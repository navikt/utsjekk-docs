import { OpenApiDoc } from "@/lib/openapi/types"
import { useMemo } from "react"

import oldSpec from "./openapi.yml"
import newSpec from "./openapi_new.yml"
import { validateSchema } from "@/lib/openapi/validation"

type SpecType = "old" | "new"

export const useOpenApiDoc = (type: SpecType): OpenApiDoc => {
  return useMemo(
    () => validateSchema(type === "old" ? oldSpec : newSpec),
    [oldSpec, newSpec, type],
  )
}
