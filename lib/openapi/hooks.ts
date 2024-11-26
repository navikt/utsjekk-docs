import { OpenApiObjectSchema } from "@/lib/openapi/schema"
import { OpenApiDoc } from "@/lib/openapi/types"
import { useMemo } from "react"

import oldSpec from "./openapi.yml"
import newSpec from "./openapi_new.yml"

type SpecType = "old" | "new"

export const useOpenApiDoc = (type: SpecType): OpenApiDoc => {
  return useMemo(
    () =>
      OpenApiObjectSchema.parse(
        type === "old" ? oldSpec : newSpec,
      ) as OpenApiDoc,
    [oldSpec],
  )
}
