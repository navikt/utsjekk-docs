import { OpenAPIV3, OpenAPIV3_1 } from "openapi-types"

import { isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"
import { OpenApiDoc } from "@/lib/openapi/types"
import { ObjectView } from "@/components/openapi/ObjectView"
import ReferenceObject = OpenAPIV3.ReferenceObject
import SchemaObject = OpenAPIV3_1.SchemaObject

type Props = {
  schema: SchemaObject | ReferenceObject
  doc: OpenApiDoc
}

export const SchemaTypeView: React.FC<Props> = ({ schema, doc }) => {
  const data =
    isReferenceObject(schema) && schema.$ref
      ? resolveRef(schema.$ref, doc)
      : (schema as SchemaObject)

  switch (data.type) {
    case "string":
      return "string"
    case "null":
      return "null"
    case "number":
      return "number"
    case "boolean":
      return "boolean"
    case "array":
      return "array"
    case "integer":
      return "integer"
    case "object":
      return (
        <ObjectView
          required={data.required}
          properties={data.properties}
          doc={doc}
        />
      )
  }
}
