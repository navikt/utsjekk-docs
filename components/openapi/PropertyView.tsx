import { useState } from "react"
import clsx from "clsx"
import { OpenAPIV3_1 } from "openapi-types"
import { ChevronRightIcon } from "@navikt/aksel-icons"

import { Required } from "@/components/openapi/Required"

import styles from "./PropertyView.module.css"

import SchemaObject = OpenAPIV3_1.SchemaObject

type Props = {
  name: string
  schema: SchemaObject
  required?: boolean
}

export const PropertyView: React.FC<Props> = ({ name, schema, required }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  console.log(schema)

  return (
    <li className={styles.listItem}>
      <div>
        <pre className={styles.key}>
          {schema.type === "object" ? (
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
          ) : (
            name
          )}
        </pre>
        {required && <Required />}
      </div>
      <div className={styles.value}>
        <pre className={styles.pre}>{schema.type}</pre>
        <hr className={styles.separator} />
      </div>
    </li>
  )
}
