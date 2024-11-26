import { OpenAPIV3_1 } from "openapi-types"
import { BodyShort, Heading } from "@navikt/ds-react"

import { isParameterObject, isReferenceObject } from "@/lib/openapi/guards"
import { renderRange, resolveRef } from "@/lib/openapi/util"
import { OpenApiDoc } from "@/lib/openapi/types"
import { KeyView } from "@/components/openapi/KeyView"
import { EnumView } from "@/components/openapi/EnumView"
import { ExampleView } from "@/components/openapi/ExampleView"

import styles from "./ParametersView.module.css"
import propertyStyles from "./PropertyView.module.css"
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import ParameterObject = OpenAPIV3_1.ParameterObject
import NonArraySchemaObject = OpenAPIV3_1.NonArraySchemaObject

type Props = {
  parameters: (ReferenceObject | ParameterObject)[]
  doc: OpenApiDoc
}

export const ParametersView: React.FC<Props> = ({ parameters, doc }) => {
  const pathParameters = parameters
    .filter(isParameterObject)
    .filter(isParameterObject)

  return (
    <>
      <Heading className={styles.title} level="3" size="small">
        Path-parametre
      </Heading>
      <ul>
        {pathParameters.map((parameter) => {
          console.log("PARAMETER", parameter)
          const schema: NonArraySchemaObject =
            parameter.schema && isReferenceObject(parameter.schema)
              ? (resolveRef(parameter.schema.$ref, doc) as NonArraySchemaObject)
              : (parameter.schema as NonArraySchemaObject)

          return (
            <li className={propertyStyles.listItem} key={parameter.name}>
              <KeyView required={parameter.required}>{parameter.name}</KeyView>
              <div className={propertyStyles.value}>
                <pre className={propertyStyles.pre}>
                  {schema.type}
                  {!!schema.format && ` (${schema.format})`}{" "}
                  {renderRange(schema) && (
                    <code className={propertyStyles.example}>
                      {renderRange(schema)}
                    </code>
                  )}
                </pre>
                <ExampleView schema={schema} />
                {parameter.description && (
                  <BodyShort>{parameter.description}</BodyShort>
                )}
                {schema.enum && <EnumView values={schema.enum} />}
                <hr className={propertyStyles.separator} />
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
