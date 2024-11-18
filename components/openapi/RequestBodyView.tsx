import { OpenAPIV3_1 } from "openapi-types"
import { Heading } from "@navikt/ds-react"

import { isRequestBodyObject } from "@/lib/openapi/guards"
import { SchemaTypeView } from "@/components/openapi/SchemaTypeView"
import { Required } from "@/components/openapi/Required"

import ReferenceObject = OpenAPIV3_1.ReferenceObject
import RequestBodyObject = OpenAPIV3_1.RequestBodyObject

import styles from "./RequestBodyView.module.css"

type Props = {
  requestBody: ReferenceObject | RequestBodyObject
  doc: OpenAPIV3_1.Document
}

export const RequestBodyView: React.FC<Props> = ({ requestBody, doc }) => {
  if (!isRequestBodyObject(requestBody)) {
    return null // TODO: Support ref-objects
  }

  console.log(requestBody)

  return (
    <>
      {Object.entries(requestBody.content).map(
        ([mediaType, mediaTypeObject]) => {
          const schema = mediaTypeObject.schema
          return (
            <div className={styles.requestBody} key={mediaType}>
              <div className={styles.heading}>
                <div>
                  <Heading level="3" size="small">
                    Request body:
                  </Heading>
                  <pre>{mediaType}</pre>
                </div>
                {requestBody.required && <Required />}
              </div>
              <div>
                {schema && <SchemaTypeView schema={schema} doc={doc} />}
              </div>
            </div>
          )
        },
      )}
    </>
  )
}
