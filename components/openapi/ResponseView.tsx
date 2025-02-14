import { useState } from "react"
import clsx from "clsx"
import { OpenAPIV3_1 } from "openapi-types"
import { Detail } from "@navikt/ds-react"
import { ChevronRightIcon } from "@navikt/aksel-icons"

import { isReferenceObject } from "@/lib/openapi/guards"
import { OpenApiDoc } from "@/lib/openapi/types"
import { resolveRef } from "@/lib/openapi/util"
import { SchemaObjectView } from "@/components/openapi/SchemaObjectView"

import styles from "./ResponseView.module.css"

import ResponseObject = OpenAPIV3_1.ResponseObject
import SchemaObject = OpenAPIV3_1.SchemaObject

type Variant = "success" | "error" | "neutral"

const getVariantForCode = (code: string): Variant => {
  switch (code[0]) {
    case "4":
      return "error"
    case "5":
      return "neutral"
    default:
      return "success"
  }
}

type Props = {
  httpStatusCode: string
  response: ResponseObject
  doc: OpenApiDoc
}

const ExpandableResponseView: React.FC<Props> = ({
  httpStatusCode,
  response,
  doc,
}) => {
  const content = response.content!
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <div
      className={clsx(
        styles.response,
        styles[getVariantForCode(httpStatusCode)],
      )}
    >
      <button
        className={clsx(
          styles.header,
          styles.expandButton,
          expanded && styles.expanded,
        )}
        onClick={toggleExpanded}
      >
        {httpStatusCode}: {response.description}
        <ChevronRightIcon
          className={styles.icon}
          fontSize={20}
          fontWeight="700"
        />
      </button>
      {expanded && (
        <div className={styles.content}>
          {Object.entries(content).map(([mediaType, schema]) => {
            const schemaObject = isReferenceObject(schema.schema!)
              ? (resolveRef(schema.schema.$ref, doc) as SchemaObject)
              : (schema.schema as SchemaObject)

            return (
              <div key={mediaType}>
                <Detail className={styles.mediaType}>{mediaType}</Detail>
                <SchemaObjectView schema={schemaObject} doc={doc} />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const ResponseView: React.FC<Props> = ({
  httpStatusCode,
  response,
  doc,
}) => {
  if (response.content) {
    return (
      <ExpandableResponseView
        httpStatusCode={httpStatusCode}
        response={response}
        doc={doc}
      />
    )
  }

  return (
    <div
      className={clsx(
        styles.response,
        styles[getVariantForCode(httpStatusCode)],
      )}
    >
      <span className={styles.header}>
        {httpStatusCode}: {response.description}
      </span>
    </div>
  )
}
