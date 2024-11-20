import clsx from "clsx"
import { ChevronRightIcon } from "@navikt/aksel-icons"

import styles from "./ExpandButton.module.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  expanded: boolean
  expand: () => void
}

export const ExpandButton: React.FC<Props> = ({
  expanded,
  expand,
  onClick,
  children,
  ...buttonProps
}) => {
  const onExpand = (event: React.MouseEvent<HTMLButtonElement>) => {
    expand()
    onClick?.(event)
  }

  return (
    <button
      className={clsx(styles.expandButton)}
      onClick={onExpand}
      {...buttonProps}
    >
      {children}
      <ChevronRightIcon
        fontSize={20}
        className={clsx(styles.expandIcon, expanded && styles.expanded)}
        fontWeight="700"
      />
    </button>
  )
}
