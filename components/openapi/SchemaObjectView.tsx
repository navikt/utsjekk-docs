import { OpenAPIV3_1 } from "openapi-types"
import { OpenApiDoc } from "@/lib/openapi/types"
import { ObjectView } from "@/components/openapi/ObjectView"
import SchemaObject = OpenAPIV3_1.SchemaObject

type Props = {
  schema: SchemaObject
  doc: OpenApiDoc
}

export const SchemaObjectView: React.FC<Props> = ({ schema, doc }) => {
  switch (schema.type) {
    case "null":
    case "number":
    case "boolean":
    // return <PropertyView name={name} schema={schema} />
    case "array":
    // return <ArrayPropertyView name={name} schema={schema} doc={doc} />
    case "string":
    case "integer":
    // return <NonArrayPropertyView name={name} schema={schema} />
    case "object":
      return (
        <ObjectView
          required={schema.required}
          properties={schema.properties}
          doc={doc}
        />
      )
  }
}
