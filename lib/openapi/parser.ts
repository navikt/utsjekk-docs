import { validateSchema } from "@/lib/openapi/validation";
import spec from "./openapi.yml"

export const parseOpenApiSpec = () => {
  return validateSchema(spec)
}