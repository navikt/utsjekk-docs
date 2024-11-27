import clsx from "clsx"

import { Tag as NavTag, TagProps } from "@navikt/ds-react"

import styles from "./Tag.module.css"

type Props = TagProps & {
  children: string
}

export const Tag: React.FC<Props> = ({
  className,
  children,
  size = "small",
  ...rest
}) => {
  return (
    <NavTag
      className={clsx(
        styles.tag,
        styles[size],
        styles[rest.variant],
        className,
      )}
      {...rest}
    >
      {children.toUpperCase()}
    </NavTag>
  )
}
