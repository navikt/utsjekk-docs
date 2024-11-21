import { OpenApiObjectSchema } from "@/lib/openapi/schema"
import { OpenApiDoc } from "@/lib/openapi/types"
import { useMemo } from "react"

import spec from "./openapi.yml"

export const useOpenApiDoc = (): OpenApiDoc => {
  return useMemo(() => OpenApiObjectSchema.parse(spec) as OpenApiDoc, [spec])
}
