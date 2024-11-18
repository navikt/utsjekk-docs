import { useState } from "react"
import clsx from "clsx"
import { OpenAPIV3_1 } from "openapi-types"
import { ChevronRightIcon } from "@navikt/aksel-icons"

import { Required } from "@/components/openapi/Required"

import styles from "./PropertyView.module.css"

import SchemaObject = OpenAPIV3_1.SchemaObject
import { ObjectView } from "@/components/openapi/ObjectView"
import { OpenApiDoc } from "@/lib/openapi/types"

type Props = {
  name: string
  schema: SchemaObject
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

  console.log("OBJECT VIEW", schema)

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
            properties={schema.properties}
            required={schema.required}
            doc={doc}
          />
        </div>
      )}
    </>
  )
}
