import clsx from "clsx"
import { Detail, DetailProps } from "@navikt/ds-react"

import styles from "./Required.module.css"

type Props = Omit<DetailProps, "children">

export const Required: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <Detail className={clsx(className, styles.required)} {...rest}>
      Påkrevd
    </Detail>
  )
}
