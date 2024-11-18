import { OpenAPIV3 } from "openapi-types"
import { BodyShort } from "@navikt/ds-react"

import { Required } from "@/components/openapi/Required"

import styles from "./PropertyView.module.css"
import NonArraySchemaObject = OpenAPIV3.NonArraySchemaObject

type IntegerRangeOptions = {
  minimum?: number
  exclusiveMinimum?: boolean
  maximum?: number
  exclusiveMaximum?: boolean
}

const RangeView: React.FC<IntegerRangeOptions> = ({
  minimum,
  exclusiveMinimum,
  maximum,
  exclusiveMaximum,
}) => {
  // return schema.maxLength && (
  //   <code
  //     className={styles.example}
  //   >{`<= ${schema.maxLength} karakterer`}</code>
  // )

  if (!!minimum && !maximum) {
    return (
      <code
        className={styles.example}
      >{`>${!exclusiveMinimum && "="} ${minimum}`}</code>
    )
  }
}

const renderRange = ({
  minimum,
  exclusiveMinimum,
  maximum,
  exclusiveMaximum,
}: IntegerRangeOptions): string | null => {
  if (!minimum && !maximum) {
    return null
  }

  if (!!minimum && !maximum) {
    return `>${!exclusiveMinimum ? "=" : ""} ${minimum}`
  }

  if (!minimum && !!maximum) {
    return `${maximum} >${!exclusiveMaximum ? "=" : ""}`
  }

  return `[${minimum! + (!!exclusiveMinimum ? 1 : 0)} ... ${maximum! - (!!exclusiveMaximum ? 1 : 0)}]`
}

type Props = {
  name: string
  schema: NonArraySchemaObject
  required?: boolean
}

export const IntegerPropertyView: React.FC<Props> = ({
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
          {!!schema.format && ` (${schema.format})`}{" "}
          <code className={styles.example}>{renderRange(schema)}</code>
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
