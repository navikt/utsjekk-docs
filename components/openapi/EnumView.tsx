import { BodyShort } from "@navikt/ds-react"
import { ChevronDownIcon, ChevronUpIcon } from "@navikt/aksel-icons"
import { useState } from "react"

import styles from "./EnumView.module.css"

type Props = {
  values: string[]
  defaultVisible?: number
}

export const EnumView: React.FC<Props> = ({ values, defaultVisible = 3 }) => {
  const [visibleItems, setVisibleItems] = useState(defaultVisible)

  const showable = values.slice(0, visibleItems)

  const toggleVisibleItems = () => {
    setVisibleItems((prev) =>
      prev === defaultVisible ? values.length : defaultVisible,
    )
  }

  return (
    <>
      <BodyShort>En av:</BodyShort>
      <ul className={styles.enumList}>
        {defaultVisible !== values.length && (
          <button className={styles.expandButton} onClick={toggleVisibleItems}>
            {visibleItems === defaultVisible ? (
              <>
                Se alle <ChevronDownIcon />
              </>
            ) : (
              <>
                Se færre <ChevronUpIcon />
              </>
            )}
          </button>
        )}
        {showable.map((it) => (
          <li key={it}>
            <pre className={styles.pre}>{it}</pre>
          </li>
        ))}
        {defaultVisible !== values.length &&
          visibleItems === defaultVisible &&
          "..."}
      </ul>
    </>
  )
}
