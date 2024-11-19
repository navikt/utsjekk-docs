import { OpenAPIV3_1 } from "openapi-types"

import styles from "./ExampleView.module.css"

import SchemaObject = OpenAPIV3_1.SchemaObject

type Props = {
  schema: SchemaObject
}

export const ExampleView: React.FC<Props> = ({ schema }) => {
  if (!schema.example) {
    return null
  }

  return (
    <pre className={styles.container}>
      Eksempel: <code className={styles.example}>{schema.example}</code>
    </pre>
  )
}
