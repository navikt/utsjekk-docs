import { OpenAPIV3_1 } from "openapi-types"
import { BodyShort } from "@navikt/ds-react"
import { Tabs } from "nextra/components"

import { isReferenceObject } from "@/lib/openapi/guards"
import { getRefName, resolveRef } from "@/lib/openapi/util"
import { OpenApiDoc } from "@/lib/openapi/types"
import { Required } from "@/components/openapi/Required"
import { ObjectView } from "@/components/openapi/ObjectView"

import ReferenceObject = OpenAPIV3_1.ReferenceObject
import SchemaObject = OpenAPIV3_1.SchemaObject

import styles from "./PropertyView.module.css"

type Props = {
  name: string
  properties: (ReferenceObject | SchemaObject)[]
  required?: boolean
  doc: OpenApiDoc
}

export const OneOfPropertyView: React.FC<Props> = ({
  name,
  properties,
  required,
  doc,
}) => {
  const schemas = properties.map((prop) => {
    const schema = isReferenceObject(prop) ? resolveRef(prop.$ref, doc) : prop
    return {
      ...schema,
      name: isReferenceObject(prop) ? getRefName(prop.$ref) : "",
    }
  })

  return (
    <li className={styles.listItem}>
      <div>
        <pre className={styles.key}>{name}</pre>
        {required && <Required />}
      </div>
      <div className={styles.value}>
        <div className={styles.oneOfTabs}>
          <BodyShort>En av:</BodyShort>
          <Tabs tabClassName={styles.tab} items={schemas.map((it) => it.name)}>
            {schemas.map((schema) => (
              <Tabs.Tab key={schema.name}>
                <ObjectView
                  properties={schema.properties ?? {}}
                  required={schema.required}
                  doc={doc}
                  allOf={schema.allOf}
                />
              </Tabs.Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </li>
  )
}
