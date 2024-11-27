import { z } from "zod"

const ContactObjectSchema = z.object({
  name: z.string().optional(),
  url: z.string().url().optional(),
  email: z.string().email().optional(),
})

const LicenseObjectSchema = z.object({
  name: z.string(),
  identifier: z.string().optional(),
  url: z.string().url().optional(),
})

const InfoObjectSchema = z.object({
  title: z.string(),
  summary: z.string().optional(),
  description: z.string().optional(),
  termsOfService: z.string().url().optional(),
  contact: ContactObjectSchema.optional(),
  license: LicenseObjectSchema.optional(),
  version: z.string(),
})

const ServerVariableObjectSchema = z.object({
  enum: z.array(z.string()).nonempty().optional(),
  default: z.string(),
  description: z.string().optional(),
})

const ServerObjectSchema = z.object({
  url: z.string().url(),
  description: z.string().optional(),
  variables: z.record(z.string(), ServerVariableObjectSchema).optional(),
})

const ExternalDocumentationObjectSchema = z.object({
  description: z.string().optional(),
  url: z.string().url(),
})

const ParameterLocationSchema = z.enum(["path", "query", "header", "cookie"])

const BooleanSchemaObjectSchema = z.object({
  type: z.literal("boolean"),
  enum: z.array(z.any()).nonempty().optional(),
  const: z.any().optional(),
})

const NumberSchemaObjectSchema = z.object({
  type: z.literal("number"),
  multipleOf: z.number().positive().optional(),
  maximum: z.number().optional(),
  exclusiveMaximum: z.boolean().optional(),
  minimum: z.number().optional(),
  exclusiveMinimum: z.boolean().optional(),
  enum: z.array(z.any()).nonempty().optional(),
  const: z.any().optional(),
})

const StringSchemaObjectSchema = z.object({
  type: z.literal("string"),
  maxLength: z.number().nonnegative().optional(),
  minLength: z.number().nonnegative().optional(),
  pattern: z.string().optional(),
  format: z
    .enum([
      "date-time",
      "date",
      "time",
      "duration",
      "email",
      "hostname",
      "ipv4",
      "ipv6",
      "uri",
      "uri-reference",
      "uuid",
      "regex",
    ])
    .optional(),
  enum: z.array(z.any()).nonempty().optional(),
  const: z.any().optional(),
})

const ArraySchemaObjectSchema = z.object({
  type: z.literal("array"),
  items: z.record(z.string(), z.any()),
  maxItems: z.number().nonnegative().optional(),
  minItems: z.number().nonnegative().optional(),
  uniqueItems: z.boolean().optional(),
  maxContains: z.number().nonnegative().optional(),
  minContains: z.number().nonnegative().optional(),
  enum: z.array(z.any()).nonempty().optional(),
  const: z.any().optional(),
})

const ObjectSchemaObjectSchema = z.object({
  type: z.literal("object"),
  properties: z.record(z.string(), z.any()).optional(),
  maxProperties: z.number().nonnegative().optional(),
  minProperties: z.number().nonnegative().optional(),
  required: z.array(z.string()).optional(),
  dependentRequired: z.record(z.string(), z.array(z.string())).optional(),
  enum: z.array(z.any()).nonempty().optional(),
  const: z.any().optional(),
  oneOf: z.array(z.any()).optional(),
  allOf: z.array(z.any()).optional(),
})

const SchemaObjectSchema = z.discriminatedUnion("type", [
  NumberSchemaObjectSchema,
  StringSchemaObjectSchema,
  ArraySchemaObjectSchema,
  ObjectSchemaObjectSchema,
  BooleanSchemaObjectSchema,
])

const ExampleObjectSchema = z.object({
  summary: z.string().optional(),
  description: z.string().optional(),
  value: z.any().optional(),
  externalValue: z.string().url().optional(),
})

const ReferenceObjectSchema = z.object({
  $ref: z.string(),
  summary: z.string().optional(),
  description: z.string().optional(),
})

const CommonParameterObjectSchema = z.object({
  name: z.string(),
  in: ParameterLocationSchema,
  description: z.string().optional(),
  required: z.boolean().optional().default(false),
  deprecated: z.boolean().optional().default(false),
})

const SchemaParameterObjectSchema = CommonParameterObjectSchema.merge(
  z.object({
    style: z.string().optional(),
    explode: z.boolean().optional(),
    allowReserved: z.boolean().optional(),
    schema: SchemaObjectSchema,
    example: z.any().optional(),
    examples: z
      .record(z.string(), ExampleObjectSchema.or(ReferenceObjectSchema))
      .optional(),
  }),
)

const HeaderObjectSchema = CommonParameterObjectSchema.omit({
  name: true,
  in: true,
}).merge(
  z.object({
    content: z.record(z.string(), z.any()).optional(),
    schema: SchemaObjectSchema.optional(),
  }),
)

const EncodingObjectSchema = z.object({
  contentType: z.string().optional(),
  headers: z
    .record(z.string(), HeaderObjectSchema.or(ReferenceObjectSchema))
    .optional(),
})

const MediaTypeObjectSchema = z.object({
  schema: SchemaObjectSchema.or(ReferenceObjectSchema).optional(),
  example: z.any().optional(),
  examples: z
    .record(z.string(), ExampleObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  encoding: z.record(z.string(), EncodingObjectSchema).optional(),
})

const ContentParameterObjectSchema = CommonParameterObjectSchema.merge(
  z.object({
    content: z.record(z.string(), MediaTypeObjectSchema),
  }),
)

const ParameterObjectSchema = z.union([
  SchemaParameterObjectSchema,
  ContentParameterObjectSchema,
])

const RequestBodyObjectSchema = z.object({
  description: z.string().optional(),
  content: z.record(z.string(), MediaTypeObjectSchema),
  required: z.boolean().optional().default(false),
})

const LinkObjectSchema = z.object({
  operationRef: z.string().url().optional(),
  operationId: z.string().optional(),
  parameters: z.record(z.string(), z.any()).optional(),
  requestBody: z.any().optional(),
  description: z.string().optional(),
  server: ServerObjectSchema.optional(),
})

const ResponseObjectSchema = z.object({
  description: z.string(),
  headers: z
    .record(z.string(), HeaderObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  content: z.record(z.string(), MediaTypeObjectSchema).optional(),
  links: z
    .record(z.string(), LinkObjectSchema.or(ReferenceObjectSchema))
    .optional(),
})

const ResponsesObjectSchema = z.record(
  z.union([z.literal("default"), z.string()]),
  ResponseObjectSchema.or(ReferenceObjectSchema),
)

const CallbackObjectSchema = z.record(z.string(), z.any())

const SecurityRequirementObjectSchema = z.record(
  z.string(),
  z.array(z.string()),
)

const OperationObjectSchema = z.object({
  tags: z.array(z.string()).optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  externalDocs: ExternalDocumentationObjectSchema.optional(),
  operationId: z.string().optional(),
  parameters: z
    .array(ParameterObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  requestBody: RequestBodyObjectSchema.or(ReferenceObjectSchema).optional(),
  responses: ResponsesObjectSchema,
  callbacks: z
    .record(z.string(), CallbackObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  deprecated: z.boolean().optional().default(false),
  security: z.array(SecurityRequirementObjectSchema).optional(),
  servers: z.array(ServerObjectSchema).optional(),
})

const PathItemObjectSchema = z.object({
  $ref: z.string().url().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  get: OperationObjectSchema.optional(),
  put: OperationObjectSchema.optional(),
  post: OperationObjectSchema.optional(),
  delete: OperationObjectSchema.optional(),
  options: OperationObjectSchema.optional(),
  head: OperationObjectSchema.optional(),
  patch: OperationObjectSchema.optional(),
  trace: OperationObjectSchema.optional(),
  servers: z.array(ServerObjectSchema).optional(),
  parameters: z
    .array(ParameterObjectSchema.or(ReferenceObjectSchema))
    .optional(),
})

const PathsObjectSchema = z.record(z.string(), PathItemObjectSchema)

const ComponentsObjectSchema = z.object({
  schemas: z.record(z.string(), SchemaObjectSchema).optional(),
  responses: z
    .record(z.string(), ResponseObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  parameters: z
    .record(z.string(), ParameterObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  examples: z
    .record(z.string(), ExampleObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  requestBodies: z
    .record(z.string(), RequestBodyObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  headers: z
    .record(z.string(), HeaderObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  securitySchemes: z
    .record(z.string(), z.any().or(ReferenceObjectSchema))
    .optional(),
  links: z
    .record(z.string(), LinkObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  callbacks: z
    .record(z.string(), CallbackObjectSchema.or(ReferenceObjectSchema))
    .optional(),
  pathItems: z.record(z.string(), PathItemObjectSchema).optional(),
})

const TagObjectSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  externalDocs: ExternalDocumentationObjectSchema.optional(),
})

export const OpenApiObjectSchema = z.object({
  openapi: z.literal("3.1.1"),
  info: InfoObjectSchema,
  servers: z.array(ServerObjectSchema).optional(),
  paths: PathsObjectSchema.optional(),
  webhooks: z.record(z.string(), PathItemObjectSchema).optional(),
  components: ComponentsObjectSchema,
  security: z.array(SecurityRequirementObjectSchema).optional(),
  tags: z.array(TagObjectSchema).optional(),
  externalDocs: ExternalDocumentationObjectSchema.optional(),
})
