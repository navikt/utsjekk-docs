import clsx from "clsx"
import { Callout } from "nextra/components"
import { ComponentProps } from "react"

import styles from "./Tag.module.css"

type Props = ComponentProps<typeof Callout> & {
  className?: string
}

export const Tag: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <span className={clsx(styles.tag, className)}>
      <Callout {...rest}>{children}</Callout>
    </span>
  )
}
