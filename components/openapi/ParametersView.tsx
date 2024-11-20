import { OpenAPIV3_1 } from "openapi-types"
import { Heading } from "@navikt/ds-react"

import { isParameterObject, isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"
import { OpenApiDoc } from "@/lib/openapi/types"
import { NonArrayPropertyView } from "@/components/openapi/NonArrayPropertyView"

import ReferenceObject = OpenAPIV3_1.ReferenceObject
import ParameterObject = OpenAPIV3_1.ParameterObject
import NonArraySchemaObject = OpenAPIV3_1.NonArraySchemaObject

import styles from "./ParametersView.module.css"

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
      {pathParameters.map((parameter) => {
        const schema: NonArraySchemaObject =
          parameter.schema && isReferenceObject(parameter.schema)
            ? (resolveRef(parameter.schema.$ref, doc) as NonArraySchemaObject)
            : (parameter.schema as NonArraySchemaObject)

        return (
          <NonArrayPropertyView
            key={parameter.name}
            name={parameter.name}
            schema={schema}
            required={parameter.required ?? false}
          />
        )
      })}
    </>
  )
}
