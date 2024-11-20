import { OpenAPIV3_1 } from "openapi-types"
import { BodyLong } from "@navikt/ds-react"

import { isReferenceObject } from "@/lib/openapi/guards"
import { OpenApiDoc } from "@/lib/openapi/types"
import { resolveRef } from "@/lib/openapi/util"
import { EnumView } from "@/components/openapi/EnumView"

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
      {schemaObject.enum && <EnumView values={schemaObject.enum} />}
    </div>
  )
}
