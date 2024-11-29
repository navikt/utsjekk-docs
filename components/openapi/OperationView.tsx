import { BodyLong, Heading, TagProps } from "@navikt/ds-react"
import { OpenAPIV3_1 } from "openapi-types"

import { ParametersView } from "@/components/openapi/ParametersView"
import { RequestBodyView } from "@/components/openapi/RequestBodyView"
import { ResponsesView } from "@/components/openapi/ResponsesView"
import { Method } from "@/components/openapi/types"

import styles from "./OperationView.module.css"
import OperationObject = OpenAPIV3_1.OperationObject
import { Tag } from "@/components/Tag"

const getTagType = (method: Method): TagProps["variant"] => {
  switch (method) {
    case Method.Trace:
    case Method.Options:
    case Method.Head:
    case Method.Get:
      return "info"
    case Method.Patch:
    case Method.Put:
    case Method.Post:
      return "warning"
    case Method.Delete:
      return "error"
  }
}

type Props = OperationObject & {
  method: Method
  path: string
}

export const OperationView: React.FC<Props> = ({
  operationId: id,
  method,
  path,
  summary,
  description,
  parameters,
  requestBody,
  responses,
}) => {
  return (
    <div className={styles.operation} key={`${path}-${method}`}>
      <Heading level="2" size="medium">
        {summary}
        <a id={id} className={styles.scrollAnchor} />
      </Heading>
      <div>
        <div className={styles.path}>
          <Tag
            className={styles.method}
            size="medium"
            variant={getTagType(method)}
          >
            {method.toUpperCase()}
          </Tag>
          <pre>{path}</pre>
          <a className={styles.operationAnchor} href={`#${id}`} />
        </div>
        {description && <BodyLong>{description}</BodyLong>}
      </div>
      {parameters && <ParametersView parameters={parameters} />}
      {requestBody && <RequestBodyView requestBody={requestBody} />}
      {responses && <ResponsesView responses={responses} />}
      <hr className={styles.separator} />
    </div>
  )
}
