import { OpenAPIV3_1 } from "openapi-types"
import { Heading } from "@navikt/ds-react"

import { isReferenceObject } from "@/lib/openapi/guards"
import { Required } from "@/components/openapi/Required"

import styles from "./RequestBodyView.module.css"
import { resolveRef } from "@/lib/openapi/util"
import { ObjectView } from "@/components/openapi/ObjectView"
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import RequestBodyObject = OpenAPIV3_1.RequestBodyObject

type Props = {
  requestBody: ReferenceObject | RequestBodyObject
  doc: OpenAPIV3_1.Document
}

export const RequestBodyView: React.FC<Props> = ({ requestBody, doc }) => {
  const body = isReferenceObject(requestBody)
    ? (() => {
        const body = resolveRef(requestBody.$ref, doc)
        return { content: body, ...body }
      })()
    : requestBody

  return (
    <>
      {Object.entries(body.content).map(([mediaType, mediaTypeObject]) => {
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
                <pre>{mediaType}</pre>
              </div>
              {body.required && <Required />}
            </div>
            {schema && (
              <ObjectView
                required={schema.required}
                properties={schema.properties}
                doc={doc}
              />
            )}
          </div>
        )
      })}
    </>
  )
}
