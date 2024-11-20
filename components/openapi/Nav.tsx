import { OpenApiDoc } from "@/lib/openapi/types"
import { ComponentProps, Fragment } from "react"
import { Callout } from "nextra/components"
import { OpenAPIV3_1 } from "openapi-types"

import styles from "./Nav.module.css"
import OperationObject = OpenAPIV3_1.OperationObject
import { Tag } from "@/components/Tag"
import clsx from "clsx"

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

type Props = {
  doc: OpenApiDoc
}

export const Nav: React.FC<Props> = ({ doc }) => {
  return (
    <div>
      <nav className={styles.nav}>
        {doc.paths &&
          Object.entries(doc.paths).map(([path, pathObject]) => {
            if (!pathObject) {
              return null
            }

            return (
              <Fragment key={path}>
                {Object.values(Method)
                  .filter((method) => Object.hasOwn(pathObject, method))
                  .map((method) => {
                    const pathItem = pathObject[method] as OperationObject

                    return (
                      <a
                        key={`${method}-${pathItem.operationId}`}
                        className={styles.link}
                        href={`#${pathItem.operationId}`}
                      >
                        <Tag size="small" type={calloutTypeForMethod(method)}>
                          {method}
                        </Tag>
                        {pathItem.summary}
                      </a>
                    )
                  })}
              </Fragment>
            )
          })}
      </nav>
    </div>
  )
}
