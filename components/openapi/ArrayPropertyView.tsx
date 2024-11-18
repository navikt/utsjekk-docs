import { useState } from "react"
import clsx from "clsx"
import { OpenAPIV3_1 } from "openapi-types"
import { ChevronRightIcon } from "@navikt/aksel-icons"

import { Required } from "@/components/openapi/Required"
import { ObjectView } from "@/components/openapi/ObjectView"
import { OpenApiDoc } from "@/lib/openapi/types"

import styles from "./PropertyView.module.css"

import ArraySchemaObject = OpenAPIV3_1.ArraySchemaObject
import { isReferenceObject } from "@/lib/openapi/guards"
import { resolveRef } from "@/lib/openapi/util"

type Props = {
  name: string
  schema: ArraySchemaObject
  required?: boolean
  doc: OpenApiDoc
}

export const ArrayPropertyView: React.FC<Props> = ({
  name,
  schema,
  required,
  doc,
}) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  const items = isReferenceObject(schema.items)
    ? resolveRef(schema.items.$ref, doc)
    : schema.items

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
          <pre className={styles.pre}>{schema.type}</pre>
          {!expanded && <hr className={styles.separator} />}
        </div>
      </li>
      {expanded && (
        <div className={styles.expandedContent}>
          <ObjectView
            properties={items.properties}
            required={items.required}
            doc={doc}
          />
        </div>
      )}
    </>
  )
}
