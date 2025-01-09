import { OpenApiObjectSchema } from "@/lib/openapi/schema"
import { OpenApiDoc } from "@/lib/openapi/types"

export const validateSchema = (value: object): OpenApiDoc => {
  return OpenApiObjectSchema.parse(value) as unknown as OpenApiDoc
}
