import { OpenAPIV3, OpenAPIV3_1 } from "openapi-types"

import { isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"
import { OpenApiDoc } from "@/lib/openapi/types"
import { NonArrayPropertyView } from "@/components/openapi/NonArrayPropertyView"
import { ObjectPropertyView } from "@/components/openapi/ObjectPropertyView"
import { ArrayPropertyView } from "@/components/openapi/ArrayPropertyView"
import { OneOfPropertyView } from "@/components/openapi/OneOfPropertyView"

import styles from "./ObjectView.module.css"

import NonArraySchemaObject = OpenAPIV3.NonArraySchemaObject
import SchemaObject = OpenAPIV3_1.SchemaObject
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import ArraySchemaObject = OpenAPIV3_1.ArraySchemaObject

const composeAllOf = (
  properties: Record<string, SchemaObject | ReferenceObject>,
  allOf: SchemaObject[],
): Record<string, SchemaObject | ReferenceObject> =>
  allOf.reduce(
    (object, current) => ({
      ...object,
      ...current.properties,
    }),
    properties,
  )

type Props = {
  required?: string[]
  properties?: Record<string, SchemaObject | ReferenceObject>
  doc: OpenApiDoc
  allOf?: SchemaObject[]
}

export const ObjectView: React.FC<Props> = ({
  required,
  properties,
  doc,
  allOf,
}) => {
  if (!properties) {
    return null
  }

  const composedProperties = allOf
    ? composeAllOf(properties ?? {}, allOf ?? [])
    : properties

  return (
    <ul className={styles.objectView}>
      {Object.entries(composedProperties).map(([name, value]) => {
        const schema = isReferenceObject(value)
          ? resolveRef(value.$ref, doc)
          : value

        switch (schema.type) {
          case "object":
            return (
              <ObjectPropertyView
                key={name}
                name={name}
                schema={value}
                required={required?.includes(name)}
                doc={doc}
              />
            )
          case "array":
            return (
              <ArrayPropertyView
                key={name}
                name={name}
                schema={schema as ArraySchemaObject}
                required={required?.includes(name)}
                doc={doc}
              />
            )
        }

        if (schema.oneOf) {
          return (
            <OneOfPropertyView
              key={name}
              name={name}
              properties={schema.oneOf}
              required={required?.includes(name)}
              doc={doc}
            />
          )
        }

        return (
          <NonArrayPropertyView
            key={name}
            name={name}
            schema={schema as NonArraySchemaObject}
            required={required?.includes(name)}
          />
        )
      })}
    </ul>
  )
}
