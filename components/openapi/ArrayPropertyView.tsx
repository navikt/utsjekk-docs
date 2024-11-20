import { useState } from "react"
import clsx from "clsx"
import { OpenAPIV3_1 } from "openapi-types"
import { ChevronRightIcon } from "@navikt/aksel-icons"
import { ObjectView } from "@/components/openapi/ObjectView"
import { OpenApiDoc } from "@/lib/openapi/types"
import { getRefName, resolveRef } from "@/lib/openapi/util"
import { isReferenceObject } from "@/lib/openapi/guards"

import styles from "./PropertyView.module.css"
import { KeyView } from "@/components/openapi/KeyView"
import ArraySchemaObject = OpenAPIV3_1.ArraySchemaObject
import ReferenceObject = OpenAPIV3_1.ReferenceObject
import { ExpandButton } from "@/components/openapi/ExpandButton"

type Props = {
  name: string
  schema: ArraySchemaObject | ReferenceObject
  required: boolean
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

  const items = isReferenceObject(schema)
    ? resolveRef(schema.$ref, doc)
    : isReferenceObject(schema.items)
      ? resolveRef(schema.items.$ref, doc)
      : schema.items

  const refName =
    !isReferenceObject(schema) && isReferenceObject(schema.items)
      ? getRefName(schema.items.$ref)
      : null

  return (
    <>
      <li className={styles.listItem}>
        <KeyView required={required}>
          <ExpandButton expanded={expanded} expand={toggleExpanded}>
            {name}
          </ExpandButton>
        </KeyView>
        <div className={styles.value}>
          <pre className={styles.pre}>array {refName && `[${refName}]`}</pre>
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
