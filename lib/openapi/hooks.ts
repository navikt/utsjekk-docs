import { useData } from "nextra/hooks"
import { OpenApiObjectSchema } from "@/lib/openapi/schema"
import { OpenApiDoc } from "@/lib/openapi/types"
import { useMemo } from "react"

export const useOpenApiDoc = (): OpenApiDoc => {
  const { spec } = useData()

  return useMemo(() => OpenApiObjectSchema.parse(spec) as OpenApiDoc, [spec])
}
