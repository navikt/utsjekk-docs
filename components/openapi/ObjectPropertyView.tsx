import { useState } from "react"
import clsx from "clsx"
import { OpenAPIV3_1 } from "openapi-types"
import { BodyLong } from "@navikt/ds-react"
import { ChevronRightIcon } from "@navikt/aksel-icons"

import { Required } from "@/components/openapi/Required"
import { ObjectView } from "@/components/openapi/ObjectView"
import { OpenApiDoc } from "@/lib/openapi/types"
import { getRefName, resolveRef } from "@/lib/openapi/util"
import { isReferenceObject } from "@/lib/openapi/guards"

import styles from "./PropertyView.module.css"
import SchemaObject = OpenAPIV3_1.SchemaObject
import ReferenceObject = OpenAPIV3_1.ReferenceObject

type Props = {
  name: string
  schema: SchemaObject | ReferenceObject
  required?: boolean
  doc: OpenApiDoc
}

export const ObjectPropertyView: React.FC<Props> = ({
  name,
  schema,
  required,
  doc,
}) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  const schemaObject = isReferenceObject(schema)
    ? resolveRef(schema.$ref, doc)
    : schema

  const refName = isReferenceObject(schema) ? getRefName(schema.$ref) : null

  const description = schema.description ?? schemaObject.description

  return (
    <>
      <li className={styles.listItem}>
        <div>
          <pre className={styles.key}>
            <button
              className={clsx(styles.expandButton)}
              onClick={toggleExpanded}
            >
              {name}
              <ChevronRightIcon
                fontSize={20}
                className={clsx(styles.expandIcon, expanded && styles.expanded)}
                fontWeight="700"
              />
            </button>
          </pre>
          {required && <Required />}
        </div>
        <div className={styles.value}>
          <pre className={styles.pre}>
            {schemaObject.type} {refName && `(${refName})`}
          </pre>
          {description && <BodyLong>{description}</BodyLong>}
          {!expanded && <hr className={styles.separator} />}
        </div>
      </li>
      {expanded && (
        <div className={styles.expandedContent}>
          <ObjectView
            properties={schemaObject.properties}
            required={schemaObject.required}
            doc={doc}
          />
        </div>
      )}
    </>
  )
}
