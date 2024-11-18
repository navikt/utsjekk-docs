import { OpenAPIV3_1 } from "openapi-types"
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import ParameterObject = OpenAPIV3_1.ParameterObject
import RequestBodyObject = OpenAPIV3_1.RequestBodyObject
import SchemaObject = OpenAPIV3_1.SchemaObject

export const isReferenceObject = (
  value: ReferenceObject | ParameterObject | RequestBodyObject | SchemaObject,
): value is ReferenceObject => {
  return Object.hasOwn(value, "$ref")
}

export const isParameterObject = (
  value: ReferenceObject | ParameterObject,
): value is ParameterObject => {
  return !isReferenceObject(value)
}

export const isRequestBodyObject = (
  value: ReferenceObject | RequestBodyObject,
): value is RequestBodyObject => {
  return !isReferenceObject(value)
}

export const isSchemaObject = (
  value: ReferenceObject | SchemaObject,
): value is SchemaObject => {
  return !isReferenceObject(value)
}
