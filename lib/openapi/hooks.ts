import { useData } from "nextra/hooks"
import { OpenApiObjectSchema } from "@/lib/openapi/schema"
import { OpenApiDoc } from "@/lib/openapi/types"

export const useOpenApiDoc = (): OpenApiDoc => {
  const { spec } = useData()

  return OpenApiObjectSchema.parse(spec) as OpenApiDoc
}
