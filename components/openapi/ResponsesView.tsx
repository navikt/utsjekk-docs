import { useContext } from "react"
import { OpenAPIV3_1 } from "openapi-types"
import { Heading } from "@navikt/ds-react"

import { OpenApiSpecContext } from "@/lib/openapi/context"
import { isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"
import { ResponseView } from "@/components/openapi/ResponseView"

import styles from "./ResponsesView.module.css"
import { Tabs } from "nextra/components"
import { JsonView } from "@/components/openapi/JsonView"
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import ResponseObject = OpenAPIV3_1.ResponseObject
import ExampleObject = OpenAPIV3_1.ExampleObject

type Props = {
  responses: Record<string, ReferenceObject | ResponseObject>
}

export const ResponsesView: React.FC<Props> = ({ responses }) => {
  const { currentDoc: doc } = useContext(OpenApiSpecContext)

  const responseList = Object.entries(responses).map(([code, response]) => {
    const schema = isReferenceObject(response)
      ? (resolveRef(response.$ref, doc) as ResponseObject)
      : response

    return {
      ...schema,
      code: code,
    }
  })

  const examples = responseList
    .filter((response) => response.content)
    .map((response) => Object.values(response.content!)[0]?.examples)
    .filter((response) => !!response)
    .reduce((acc, cur) => ({ ...acc, ...cur }), {})

  return (
    <div className={styles.container}>
      <Heading className={styles.title} level="3" size="small">
        Respons
      </Heading>
      <div className={styles.responses}>
        {responseList
          .filter((response) => response.code !== "default")
          .map((response) => {
            return (
              <ResponseView
                key={response.code}
                httpStatusCode={response.code}
                response={response}
                doc={doc}
              />
            )
          })}
      </div>
      {Object.keys(examples).length > 0 && (
        <>
          <Heading className={styles.examplesHeading} level="4" size="xsmall">
            Eksempler:
          </Heading>
          <Tabs className={styles.tabs} items={Object.keys(examples)}>
            {Object.entries(examples).map(([key, example]) => (
              <Tabs.Tab key={key}>
                <JsonView json={(example as ExampleObject).value} />
              </Tabs.Tab>
            ))}
          </Tabs>
        </>
      )}
    </div>
  )
}
