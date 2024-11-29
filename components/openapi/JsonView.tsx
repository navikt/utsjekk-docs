import styles from "./JsonView.module.css"

type IndentProps = {
  indent: number
  indentLength?: number
}

const Indent: React.FC<IndentProps> = ({ indent, indentLength = 2 }) => {
  return Array(Math.max(indent * indentLength, 0)).fill(" ")
}

type JsonObjectViewProps = {
  json: object
  indent: number
}

const JsonObjectView: React.FC<JsonObjectViewProps> = ({ json, indent }) => {
  return (
    <>
      {"{\n"}
      {Object.entries(json).map(([key, value], i, array) => (
        <span key={key}>
          <Indent indent={indent} />
          <span className={styles.key}>"{key}"</span>:{" "}
          <JsonTypeView json={value} indent={indent + 1} />
          {i < array.length - 1 && ",\n"}
        </span>
      ))}
      {"\n"}
      <Indent indent={indent - 1} />
      {"}"}
    </>
  )
}

type JsonArrayViewProps = {
  json: JsonTypeViewProps["json"][]
  indent: number
}

const JsonArrayView: React.FC<JsonArrayViewProps> = ({ json, indent }) => {
  return json.map((it, i) => <JsonTypeView key={i} json={it} indent={indent} />)
}

type JsonTypeViewProps = {
  json: ReturnType<typeof JSON.parse>
  indent: number
}

const JsonTypeView: React.FC<JsonTypeViewProps> = ({ json, indent }) => {
  if (typeof json === "object") {
    if (Array.isArray(json)) {
      return <JsonArrayView json={json} indent={indent - 1} />
    }
    return <JsonObjectView json={json} indent={indent + 1} />
  }

  if (typeof json === "string") {
    return <span className={styles.string}>"{json}"</span>
  }

  if (typeof json === "number") {
    return <span className={styles.number}>{json}</span>
  }

  return null
}

type JsonViewProps = {
  json: ReturnType<typeof JSON.parse>
}

export const JsonView: React.FC<JsonViewProps> = ({ json }) => {
  return (
    <pre className={styles.container}>
      <JsonTypeView json={json} indent={0} />
    </pre>
  )
}
