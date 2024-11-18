import { OpenAPIV3, OpenAPIV3_1 } from "openapi-types"

import { isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"
import { OpenApiDoc } from "@/lib/openapi/types"
import { PropertyView } from "@/components/openapi/PropertyView"
import { StringPropertyView } from "@/components/openapi/StringPropertyView"
import { IntegerPropertyView } from "@/components/openapi/IntegerPropertyView"
import { ObjectPropertyView } from "@/components/openapi/ObjectPropertyView"

import NonArraySchemaObject = OpenAPIV3.NonArraySchemaObject
import SchemaObject = OpenAPIV3_1.SchemaObject
import ReferenceObject = OpenAPIV3_1.ReferenceObject

import styles from "./ObjectView.module.css"

type Props = {
  required?: string[]
  properties?: Record<string, SchemaObject | ReferenceObject>
  doc: OpenApiDoc
}

export const ObjectView: React.FC<Props> = ({ required, properties, doc }) => {
  if (!properties) {
    return null
  }

  return (
    <ul className={styles.objectView}>
      {Object.entries(properties).map(([name, value]) => {
        const schema = isReferenceObject(value)
          ? resolveRef(value.$ref, doc)
          : value

        switch (schema.type) {
          case "string":
            return (
              <StringPropertyView
                key={name}
                name={name}
                schema={schema as NonArraySchemaObject}
                required={required?.includes(name)}
              />
            )
          case "integer":
            return (
              <IntegerPropertyView
                key={name}
                name={name}
                schema={schema as NonArraySchemaObject}
                required={required?.includes(name)}
              />
            )
          case "object":
            return (
              <ObjectPropertyView
                key={name}
                name={name}
                schema={schema as NonArraySchemaObject}
                required={required?.includes(name)}
                doc={doc}
              />
            )
        }

        return (
          <PropertyView
            key={name}
            name={name}
            schema={schema}
            required={required?.includes(name)}
          />
        )
      })}
    </ul>
  )
}
