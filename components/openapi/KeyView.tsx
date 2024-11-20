import { ReactNode } from "react"
import { Required } from "@/components/openapi/Required"

import styles from "./KeyView.module.css"

type Props = {
  children: ReactNode
  required: boolean
}

export const KeyView: React.FC<Props> = ({ children, required }) => {
  return (
    <div>
      <pre className={styles.key}>{children}</pre>
      {required && <Required />}
    </div>
  )
}
