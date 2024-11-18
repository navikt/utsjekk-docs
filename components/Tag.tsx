import { Callout } from "nextra/components"
import { ComponentProps } from "react"

import styles from "./Tag.module.css"

type Props = ComponentProps<typeof Callout>

export const Tag: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <span className={styles.tag}>
      <Callout {...rest}>{children}</Callout>
    </span>
  )
}
