import { useContext } from "react"
import { OpenAPIV3_1 } from "openapi-types"
import { Heading } from "@navikt/ds-react"

import { OpenApiSpecContext } from "@/lib/openapi/context"
import { isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"
import { ResponseView } from "@/components/openapi/ResponseView"

import styles from "./ResponsesView.module.css"
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import ResponseObject = OpenAPIV3_1.ResponseObject

type Props = {
  responses: Record<string, ReferenceObject | ResponseObject>
}

export const ResponsesView: React.FC<Props> = ({ responses }) => {
  const { currentDoc: doc } = useContext(OpenApiSpecContext)

  return (
    <>
      <Heading className={styles.title} level="3" size="small">
        Respons
      </Heading>
      <div className={styles.responses}>
        {Object.entries(responses).map(([code, response]) => {
          const responseObject = isReferenceObject(response)
            ? (resolveRef(response.$ref, doc) as ResponseObject)
            : (response as ResponseObject)

          return (
            <ResponseView
              key={code}
              httpStatusCode={code}
              response={responseObject}
              doc={doc}
            />
          )
        })}
      </div>
    </>
  )
}
