import { OpenAPIV3, OpenAPIV3_1 } from "openapi-types"

import { isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"
import { OpenApiDoc } from "@/lib/openapi/types"
import { ObjectPropertyView } from "@/components/openapi/ObjectPropertyView"
import { IntegerPropertyView } from "@/components/openapi/IntegerPropertyView"
import { StringPropertyView } from "@/components/openapi/StringPropertyView"
import { ArrayPropertyView } from "@/components/openapi/ArrayPropertyView"
import { PropertyView } from "@/components/openapi/PropertyView"
import ReferenceObject = OpenAPIV3.ReferenceObject
import SchemaObject = OpenAPIV3_1.SchemaObject
import ArraySchemaObject = OpenAPIV3_1.ArraySchemaObject
import NonArraySchemaObject = OpenAPIV3_1.NonArraySchemaObject
// @ts-ignore
import MixedSchemaObject = OpenAPIV3_1.MixedSchemaObject

type Props = {
  name: string
  schema: SchemaObject | ReferenceObject
  doc: OpenApiDoc
}

export const SchemaObjectView: React.FC<Props> = ({ name, schema, doc }) => {
  const data: ArraySchemaObject | NonArraySchemaObject | MixedSchemaObject =
    isReferenceObject(schema) ? resolveRef(schema.$ref, doc) : schema

  switch (data.type) {
    case "string":
      return <StringPropertyView name={name} schema={data} />
    case "null":
    case "number":
    case "boolean":
      return <PropertyView name={name} schema={data} />
    case "array":
      return <ArrayPropertyView name={name} schema={data} doc={doc} />
    case "integer":
      return <IntegerPropertyView name={name} schema={data} />
    case "object":
      return (
        <ObjectPropertyView
          name={name}
          required={data.required?.includes(name)}
          schema={data}
          doc={doc}
        />
      )
  }
}
