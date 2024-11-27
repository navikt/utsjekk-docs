import { useContext } from "react"
import { OpenAPIV3_1 } from "openapi-types"
import { Heading } from "@navikt/ds-react"

import { OpenApiSpecContext } from "@/lib/openapi/context"
import { isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"
import { Required } from "@/components/openapi/Required"
import { SchemaObjectView } from "@/components/openapi/SchemaObjectView"

import styles from "./RequestBodyView.module.css"
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import RequestBodyObject = OpenAPIV3_1.RequestBodyObject

type Props = {
  requestBody: ReferenceObject | RequestBodyObject
}

export const RequestBodyView: React.FC<Props> = ({ requestBody }) => {
  const { currentDoc: doc } = useContext(OpenApiSpecContext)
  const content = isReferenceObject(requestBody)
    ? resolveRef(requestBody.$ref, doc)
    : requestBody.content

  const required = isReferenceObject(requestBody)
    ? content.required
    : requestBody.required

  return (
    <>
      {Object.entries(content).map(([mediaType, mediaTypeObject]) => {
        const schema = isReferenceObject(mediaTypeObject.schema)
          ? resolveRef(mediaTypeObject.schema.$ref, doc)
          : mediaTypeObject.schema

        return (
          <div className={styles.requestBody} key={mediaType}>
            <div className={styles.heading}>
              <div>
                <Heading level="3" size="small">
                  Request body:
                </Heading>
                <pre className={styles.mediaType}>{mediaType}</pre>
              </div>
              {required && <Required />}
            </div>
            {schema && <SchemaObjectView schema={schema} doc={doc} />}
          </div>
        )
      })}
    </>
  )
}
