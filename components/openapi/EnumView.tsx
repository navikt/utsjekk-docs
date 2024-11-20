import { BodyShort } from "@navikt/ds-react"
import styles from "./EnumView.module.css"

type Props = {
  values: string[]
}

export const EnumView: React.FC<Props> = ({ values }) => {
  return (
    <>
      <BodyShort>En av:</BodyShort>
      <ul className={styles.enumList}>
        {values.map((it) => (
          <li key={it} className={styles.enumValue}>
            <pre className={styles.pre}>{it}</pre>
          </li>
        ))}
      </ul>
    </>
  )
}
