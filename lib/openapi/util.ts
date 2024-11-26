import { OpenAPIV3_1 } from "openapi-types"

import SchemaObject = OpenAPIV3_1.SchemaObject
import NonArraySchemaObject = OpenAPIV3_1.NonArraySchemaObject

export const resolveRef = (
  ref: string,
  doc: OpenAPIV3_1.Document,
): SchemaObject => {
  const components = ref.split("/").slice(1)
  // @ts-ignore
  return components.reduce((acc, cur) => acc[cur], doc)
}

export const getRefName = (ref: string): string => {
  return ref.split("/").slice(-1).pop()!
}

type StringRangeOptions = {
  minLength?: number
  maxLength?: number
}

const renderStringRange = ({
  minLength,
  maxLength,
}: StringRangeOptions): string | null => {
  if (!minLength && !maxLength) {
    return null
  }

  if (minLength === maxLength) {
    return `${minLength} tegn`
  }

  if (!!minLength && !maxLength) {
    return `>= ${minLength} tegn`
  }

  if (!minLength && !!maxLength) {
    return `${maxLength} >= tegn`
  }

  return `[${minLength} ... ${maxLength}] tegn`
}

type IntegerRangeOptions = {
  minimum?: number
  exclusiveMinimum?: number | boolean
  maximum?: number
  exclusiveMaximum?: number | boolean
}

const renderIntegerRange = ({
  minimum,
  exclusiveMinimum,
  maximum,
  exclusiveMaximum,
}: IntegerRangeOptions): string | null => {
  if (!minimum && !maximum) {
    return null
  }

  if (!!minimum && !maximum) {
    return `>${!exclusiveMinimum ? "=" : ""} ${minimum}`
  }

  if (!minimum && !!maximum) {
    return `${maximum} >${!exclusiveMaximum ? "=" : ""}`
  }

  return `[${minimum! + (!!exclusiveMinimum ? 1 : 0)} ... ${maximum! - (!!exclusiveMaximum ? 1 : 0)}]`
}

export const renderRange = (schema: NonArraySchemaObject) => {
  switch (schema.type) {
    case "integer":
      return renderIntegerRange(schema)
    case "string":
      return renderStringRange(schema)
  }
}
