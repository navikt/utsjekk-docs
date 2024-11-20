import { useState } from "react"
import { OpenAPIV3_1 } from "openapi-types"
import { BodyLong } from "@navikt/ds-react"

import { OpenApiDoc } from "@/lib/openapi/types"
import { KeyView } from "@/components/openapi/KeyView"
import { ObjectView } from "@/components/openapi/ObjectView"
import { ExpandButton } from "@/components/openapi/ExpandButton"

import styles from "./PropertyView.module.css"

import SchemaObject = OpenAPIV3_1.SchemaObject

type Props = {
  keyName: string
  schema: SchemaObject
  typeName?: string
  required: boolean
  doc: OpenApiDoc
}

export const ObjectPropertyView: React.FC<Props> = ({
  keyName,
  typeName,
  schema,
  required,
  doc,
}) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <>
      <li className={styles.listItem}>
        <KeyView required={required}>
          <ExpandButton expanded={expanded} expand={toggleExpanded}>
            {keyName}
          </ExpandButton>
        </KeyView>
        <div className={styles.value}>
          <pre className={styles.pre}>
            {schema.type} {typeName && `(${typeName})`}
          </pre>
          {schema.description && <BodyLong>{schema.description}</BodyLong>}
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
