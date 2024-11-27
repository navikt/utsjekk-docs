import { useContext, useMemo } from "react"
import { OpenAPIV3_1 } from "openapi-types"
import { Heading } from "@navikt/ds-react"

import { OpenApiSpecContext } from "@/lib/openapi/context"
import { Nav } from "@/components/openapi/Nav"
import { Method } from "@/components/openapi/types"
import { OperationView } from "@/components/openapi/OperationView"

import styles from "./OpenApiView.module.css"
import { OpenApiDoc } from "@/lib/openapi/types"
import OperationObject = OpenAPIV3_1.OperationObject

type Operation = OperationObject & {
  path: string
  method: Method
}

const getOperations = (doc: OpenApiDoc): Operation[] =>
  doc.paths
    ? Object.entries(doc.paths)
        .filter(([_, pathObject]) => !!pathObject)
        .flatMap(([path, pathObject]) =>
          Object.values(Method)
            .filter((method) => Object.hasOwn(pathObject!, method))
            .map((method) => {
              const pathItem = pathObject![method] as OperationObject
              return {
                path: path,
                method: method,
                ...pathItem,
              }
            }),
        )
    : []

export const OpenApiView: React.FC = () => {
  const { currentDoc } = useContext(OpenApiSpecContext)

  const operations = useMemo(() => getOperations(currentDoc), [currentDoc])

  return (
    <div className={styles.container}>
      <Nav doc={currentDoc} />
      <article className={styles.document}>
        <Heading className={styles.title} level="1" size="large">
          {currentDoc.info.title}
        </Heading>
        {operations.map((operation) => {
          return <OperationView key={operation.operationId} {...operation} />
        })}
      </article>
    </div>
  )
}
