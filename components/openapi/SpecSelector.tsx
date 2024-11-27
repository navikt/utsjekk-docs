import { useContext, useEffect, useRef, useState } from "react"
import { OpenApiSpecContext } from "@/lib/openapi/context"
import { ChevronUpDownIcon } from "@navikt/aksel-icons"

import styles from "./SpecSelector.module.css"

export const SpecSelector = () => {
  const { currentDoc, docs, setCurrentDoc } = useContext(OpenApiSpecContext)
  const containerRef = useRef<HTMLDivElement>(null)

  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow((prev) => !prev)
  }

  const setDoc = (title: string) => () => {
    setCurrentDoc(title)
    setShow(false)
  }

  useEffect(() => {
    const eventHandler = (event: Event) => {
      if (!event.target || !containerRef.current) {
        return
      }

      const target = event.target as Node

      if (!containerRef.current.contains(target)) {
        setShow(false)
      }
    }

    window.addEventListener("click", eventHandler)
    window.addEventListener("focusin", eventHandler)

    return () => {
      window.removeEventListener("click", eventHandler)
      window.removeEventListener("focusin", eventHandler)
    }
  }, [containerRef])

  return (
    <div className={styles.container} ref={containerRef}>
      <button className={styles.button} onClick={toggleShow}>
        {currentDoc.info.title}
        <ChevronUpDownIcon fontWeight="bold" fontSize={18} />
      </button>
      {show && (
        <div className={styles.docButtons}>
          {docs.map((doc) => (
            <button
              key={doc.info.title}
              className={styles.button}
              onClick={setDoc(doc.info.title)}
            >
              {doc.info.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
