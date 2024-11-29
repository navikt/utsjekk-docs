import { Fragment, useContext } from "react"
import { OpenAPIV3_1 } from "openapi-types"
import { Heading } from "@navikt/ds-react"

import { OpenApiSpecContext } from "@/lib/openapi/context"
import { isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"
import { Required } from "@/components/openapi/Required"
import { SchemaObjectView } from "@/components/openapi/SchemaObjectView"

import styles from "./RequestBodyView.module.css"
import { JsonView } from "@/components/openapi/JsonView"
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import RequestBodyObject = OpenAPIV3_1.RequestBodyObject
import SchemaObject = OpenAPIV3_1.SchemaObject
import { Tabs } from "nextra/components"

type Example = {
  [name: string]: {
    value: any
  }
}

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
        const schema: SchemaObject = isReferenceObject(mediaTypeObject.schema)
          ? resolveRef(mediaTypeObject.schema.$ref, doc)
          : mediaTypeObject.schema

        const examples = mediaTypeObject.examples ?? schema.examples

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
            {examples && (
              <>
                <Heading level="4" size="xsmall">
                  Eksempler
                </Heading>
                <Tabs className={styles.tabs} items={Object.keys(examples)}>
                  {Object.entries(examples).map(
                    ([name, content]) =>
                      (content as Example).value && (
                        <Tabs.Tab key={name}>
                          <JsonView json={(content as Example).value} />
                        </Tabs.Tab>
                      ),
                  )}
                </Tabs>
              </>
            )}
          </div>
        )
      })}
    </>
  )
}
