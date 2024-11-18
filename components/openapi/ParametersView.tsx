import { OpenAPIV3, OpenAPIV3_1 } from "openapi-types"
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import ParameterObject = OpenAPIV3.ParameterObject
import { Heading } from "@navikt/ds-react"
import { isParameterObject } from "@/lib/openapi/guards"

const isPathParameter = (value: ParameterObject) => value.in === "path"

type Props = {
  parameters: (ReferenceObject | ParameterObject)[]
}

export const ParametersView: React.FC<Props> = ({ parameters }) => {
  const pathParameters = parameters
    .filter(isParameterObject)
    .filter(isParameterObject)

  return (
    <>
      <Heading level="3" size="small">
        Path parameters
      </Heading>
      {pathParameters.map((it) => (
        <div key={it.name}>{it.name}</div>
      ))}
    </>
  )
}
