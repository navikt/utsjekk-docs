import { createContext, ReactNode, useState } from "react"
import { OpenApiDoc } from "@/lib/openapi/types"
import { validateSchema } from "@/lib/openapi/validation"

import oldSpec from "./openapi.yml"
import newSpec from "./openapi_new.yml"

type OpenApiSpecContext = {
  currentDoc: OpenApiDoc
  setCurrentDoc: (title: string) => void
  docs: OpenApiDoc[]
}

export const OpenApiSpecContext = createContext<OpenApiSpecContext>({
  doc: null,
  setDoc: () => null,
  docs: [],
} as unknown as OpenApiSpecContext)

const docs = [validateSchema(oldSpec), validateSchema(newSpec)]

const getDoc = (title: string): OpenApiDoc => {
  return docs.find((it) => it.info.title === title)!
}

type Props = {
  children: ReactNode
  defaultDoc?: string
}

export const OpenApiSpecProvider: React.FC<Props> = ({
  children,
  defaultDoc = "Utsjekk API (wip)",
}) => {
  const [doc, setDoc] = useState<OpenApiDoc>(getDoc(defaultDoc))

  const updateDoc = (title: string) => {
    return setDoc(getDoc(title))
  }

  return (
    <OpenApiSpecContext.Provider
      value={{
        currentDoc: doc,
        setCurrentDoc: updateDoc,
        docs: docs,
      }}
    >
      {children}
    </OpenApiSpecContext.Provider>
  )
}
