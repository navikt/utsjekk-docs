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

import OperationObject = OpenAPIV3_1.OperationObject

import styles from "./OpenApiView.module.css"

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
  const doc = useOpenApiDoc()

  return (
    <div className={styles.container}>
      <Nav doc={doc} />
      <div>
        <Heading className={styles.title} level="1" size="large">
          {doc.info.title}
        </Heading>
        {doc.paths &&
          Object.entries(doc.paths).map(([path, pathObject]) => {
            if (!pathObject) {
              return null
            }

            return (
              <div key={path}>
                {Object.values(Method)
                  .filter((method) => Object.hasOwn(pathObject, method))
                  .map((method) => {
                    const pathItem = pathObject[method] as OperationObject

                    return (
                      <div className={styles.operation} key={method}>
                        <Heading
                          className={styles.subTitle}
                          level="2"
                          size="medium"
                        >
                          {pathItem.summary}
                          <a
                            id={pathItem.operationId}
                            className={styles.scrollAnchor}
                          />
                        </Heading>
                        <div className={styles.path}>
                          <Tag
                            className={styles.method}
                            type={calloutTypeForMethod(method)}
                            emoji
                          >
                            {method}
                          </Tag>
                          <pre>{path}</pre>
                          <a
                            className={styles.operationAnchor}
                            href={`#${pathItem.operationId}`}
                          />
                        </div>
                        <BodyLong className={styles.description}>
                          {pathItem.description}
                        </BodyLong>
                        {pathItem.parameters && (
                          <ParametersView
                            parameters={pathItem.parameters}
                            doc={doc}
                          />
                        )}
                        {pathItem.requestBody && (
                          <RequestBodyView
                            requestBody={pathItem.requestBody}
                            doc={doc}
                          />
                        )}
                        {pathItem.responses && (
                          <ResponsesView
                            responses={pathItem.responses}
                            doc={doc}
                          />
                        )}
                      </div>
                    )
                  })}
              </div>
            )
          })}
      </div>
    </div>
  )
}
