import { OpenAPIV3_1 } from "openapi-types"
import { BodyShort } from "@navikt/ds-react"
import { ExampleView } from "@/components/openapi/ExampleView"
import { KeyView } from "@/components/openapi/KeyView"
import { EnumView } from "@/components/openapi/EnumView"

import styles from "./PropertyView.module.css"

import NonArraySchemaObject = OpenAPIV3_1.NonArraySchemaObject

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

const renderRange = (schema: NonArraySchemaObject) => {
  switch (schema.type) {
    case "integer":
      return renderIntegerRange(schema)
    case "string":
      return renderStringRange(schema)
  }
}

type Props = {
  name: string
  schema: NonArraySchemaObject
  required: boolean
}

export const NonArrayPropertyView: React.FC<Props> = ({
  name,
  schema,
  required,
}) => {
  return (
    <li className={styles.listItem}>
      <KeyView required={required}>{name}</KeyView>
      <div className={styles.value}>
        <pre className={styles.pre}>
          {schema.type}
          {!!schema.format && ` (${schema.format})`}{" "}
          {renderRange(schema) && (
            <code className={styles.example}>{renderRange(schema)}</code>
          )}
        </pre>
        <ExampleView schema={schema} />
        {schema.description && <BodyShort>{schema.description}</BodyShort>}
        {schema.enum && <EnumView values={schema.enum} />}
        <hr className={styles.separator} />
      </div>
    </li>
  )
}
