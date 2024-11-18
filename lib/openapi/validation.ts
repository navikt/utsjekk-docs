import { OpenApiObjectSchema } from "@/lib/openapi/schema";

export const validateSchema = (value: object) => {
  return OpenApiObjectSchema.parse(value)
}