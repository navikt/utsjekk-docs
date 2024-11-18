import { OpenAPIV3_1 } from "openapi-types"

import SchemaObject = OpenAPIV3_1.SchemaObject

export const resolveRef = (
  ref: string,
  doc: OpenAPIV3_1.Document,
): SchemaObject => {
  const components = ref.split("/").slice(1)
  // @ts-ignore
  return components.reduce((acc, cur) => acc[cur], doc)
}
