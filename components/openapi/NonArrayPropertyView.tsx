import { OpenAPIV3_1 } from "openapi-types"
import { BodyShort } from "@navikt/ds-react"

import { ExampleView } from "@/components/openapi/ExampleView"
import { KeyView } from "@/components/openapi/KeyView"
import { EnumView } from "@/components/openapi/EnumView"
import { renderRange } from "@/lib/openapi/util"

import styles from "./PropertyView.module.css"

import NonArraySchemaObject = OpenAPIV3_1.NonArraySchemaObject

type Props = {
  name: string
  schema: NonArraySchemaObject
  required: boolean
}

export const NonArrayPropertyView: React.FC<Props> = ({
  name,
  schema,
  required,
}) => {
  return (
    <li className={styles.listItem}>
      <KeyView required={required}>{name}</KeyView>
      <div className={styles.value}>
        <pre className={styles.pre}>
          {schema.type}
          {!!schema.format && ` (${schema.format})`}{" "}
          {renderRange(schema) && (
            <code className={styles.example}>{renderRange(schema)}</code>
          )}
        </pre>
        <ExampleView schema={schema} />
        {schema.description && <BodyShort>{schema.description}</BodyShort>}
        {schema.enum && <EnumView values={schema.enum} />}
        <hr className={styles.separator} />
      </div>
    </li>
  )
}
