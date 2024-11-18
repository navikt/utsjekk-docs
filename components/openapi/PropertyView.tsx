import { OpenAPIV3_1 } from "openapi-types"

import { Required } from "@/components/openapi/Required"

import styles from "./PropertyView.module.css"
import SchemaObject = OpenAPIV3_1.SchemaObject

type Props = {
  name: string
  schema: SchemaObject
  required?: boolean
}

export const PropertyView: React.FC<Props> = ({ name, schema, required }) => {
  return (
    <li className={styles.listItem}>
      <div>
        <pre className={styles.key}>{name}</pre>
        {required && <Required />}
      </div>
      <div className={styles.value}>
        <pre className={styles.pre}>{schema.type}</pre>
        <hr className={styles.separator} />
      </div>
    </li>
  )
}
