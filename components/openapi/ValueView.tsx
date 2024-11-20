import { OpenAPIV3_1 } from "openapi-types"
import { BodyLong, Detail } from "@navikt/ds-react"

import { isReferenceObject } from "@/lib/openapi/guards"
import { OpenApiDoc } from "@/lib/openapi/types"
import { resolveRef } from "@/lib/openapi/util"

import styles from "./ValueView.module.css"
import SchemaObject = OpenAPIV3_1.SchemaObject
import ReferenceObject = OpenAPIV3_1.ReferenceObject

type Props = {
  schema: SchemaObject | ReferenceObject
  doc: OpenApiDoc
}

export const ValueView: React.FC<Props> = ({ schema, doc }) => {
  const schemaObject = isReferenceObject(schema)
    ? resolveRef(schema.$ref, doc)
    : schema

  const description = schema.description ?? schemaObject.description

  return (
    <div className={styles.value}>
      {description && <BodyLong>{description}</BodyLong>}
      {schemaObject.enum && (
        <>
          <Detail>En av:</Detail>
          <ul className={styles.enumList}>
            {schemaObject.enum.map((it) => (
              <li key={it} className={styles.enumValue}>
                <pre className={styles.pre}>{it}</pre>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
