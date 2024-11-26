import { ComponentProps } from "react"
import { OpenAPIV3_1 } from "openapi-types"
import { Callout } from "nextra/components"
import { BodyLong, Heading } from "@navikt/ds-react"

import { useOpenApiDoc } from "@/lib/openapi/hooks"
import { RequestBodyView } from "@/components/openapi/RequestBodyView"
import { ParametersView } from "@/components/openapi/ParametersView"
import { ResponsesView } from "@/components/openapi/ResponsesView"
import { Nav } from "@/components/openapi/Nav"
import { Tag } from "@/components/Tag"

import styles from "./OpenApiView.module.css"

import OperationObject = OpenAPIV3_1.OperationObject

enum Method {
  Get = "get",
  Post = "post",
  Put = "put",
  Patch = "patch",
  Delete = "delete",
  Head = "head",
  Options = "options",
  Trace = "trace",
}

const calloutTypeForMethod = (
  method: Method,
): ComponentProps<typeof Callout>["type"] => {
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

export const OpenApiView: React.FC = () => {
  const doc = useOpenApiDoc("new")

  const operations = doc.paths
    ? Object.entries(doc.paths)
        .filter(([_, pathObject]) => !!pathObject)
        .flatMap(([path, pathObject]) =>
          Object.values(Method)
            .filter((method) => Object.hasOwn(pathObject!, method))
            .map((method) => {
              const pathItem = pathObject![method] as OperationObject
              return {
                id: pathItem.operationId,
                path: path,
                method: method,
                ...pathItem,
              }
            }),
        )
    : []

  return (
    <div className={styles.container}>
      <Nav doc={doc} />
      <div>
        <Heading className={styles.title} level="1" size="large">
          {doc.info.title}
        </Heading>
        {operations.map((operation) => {
          return (
            <div className={styles.operation} key={operation.method}>
              <Heading className={styles.subTitle} level="2" size="medium">
                {operation.summary}
                <a id={operation.id} className={styles.scrollAnchor} />
              </Heading>
              <div className={styles.path}>
                <Tag
                  className={styles.method}
                  type={calloutTypeForMethod(operation.method)}
                  emoji
                >
                  {operation.method}
                </Tag>
                <pre>{operation.path}</pre>
                <a
                  className={styles.operationAnchor}
                  href={`#${operation.id}`}
                />
              </div>
              {operation.description && (
                <BodyLong className={styles.description}>
                  {operation.description}
                </BodyLong>
              )}
              {operation.parameters && (
                <ParametersView parameters={operation.parameters} doc={doc} />
              )}
              {operation.requestBody && (
                <RequestBodyView
                  requestBody={operation.requestBody}
                  doc={doc}
                />
              )}
              {operation.responses && (
                <ResponsesView responses={operation.responses} doc={doc} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
