import { OpenAPIV3 } from "openapi-types"
import { BodyShort } from "@navikt/ds-react"

import { Required } from "@/components/openapi/Required"

import styles from "./PropertyView.module.css"
import NonArraySchemaObject = OpenAPIV3.NonArraySchemaObject

type Props = {
  name: string
  schema: NonArraySchemaObject
  required?: boolean
}

export const StringPropertyView: React.FC<Props> = ({
  name,
  schema,
  required,
}) => {
  return (
    <li className={styles.listItem}>
      <div>
        <pre className={styles.key}>{name}</pre>
        {required && <Required />}
      </div>
      <div className={styles.value}>
        <pre className={styles.pre}>
          {schema.type}
          {!!schema.format && `(${schema.format})`}{" "}
          {schema.maxLength && (
            <code
              className={styles.example}
            >{`<= ${schema.maxLength} karakterer`}</code>
          )}
        </pre>
        {!!schema.example && (
          <pre className={styles.pre}>
            Eksempel: <code className={styles.example}>{schema.example}</code>
          </pre>
        )}
        {schema.description && <BodyShort>{schema.description}</BodyShort>}
        <hr className={styles.separator} />
      </div>
    </li>
  )
}
