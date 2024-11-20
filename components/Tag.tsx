import clsx from "clsx"
import { Callout } from "nextra/components"
import { ComponentProps } from "react"

import styles from "./Tag.module.css"

type Props = ComponentProps<typeof Callout> & {
  className?: string
  size?: "small" | "medium"
}

export const Tag: React.FC<Props> = ({
  className,
  children,
  size = "small",
  ...rest
}) => {
  return (
    <span className={clsx(styles.tag, styles[size], className)}>
      <Callout {...rest}>{children}</Callout>
    </span>
  )
}
