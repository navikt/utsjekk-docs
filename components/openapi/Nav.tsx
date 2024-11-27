import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { TagProps } from "@navikt/ds-react"

import { Tag } from "@/components/Tag"
import { SpecSelector } from "@/components/openapi/SpecSelector"
import { OpenApiDoc } from "@/lib/openapi/types"

import styles from "./Nav.module.css"

enum Method {
  Get = "get",
  Post = "post",
  Put = "put",
  Patch = "patch",
  Delete = "delete",
  Head = "head",
  Options = "options",
  Trace = "trace",
}

const calloutTypeForMethod = (method: Method): TagProps["variant"] => {
  switch (method) {
    case Method.Trace:
    case Method.Options:
    case Method.Head:
    case Method.Get:
      return "info"
    case Method.Patch:
    case Method.Put:
    case Method.Post:
      return "warning"
    case Method.Delete:
      return "error"
  }
}

type Section = {
  method: Method
  path: string
  operationId: string
  summary?: string
}

const getSections = (paths: Required<OpenApiDoc>["paths"]): Section[] =>
  Object.entries(paths)
    .filter(([_, pathObject]) => !!pathObject)
    .flatMap(([path, pathObject]) =>
      Object.values(Method)
        .filter((method) => Object.hasOwn(pathObject!, method))
        .map((method) => ({
          method: method,
          path: path,
          operationId: pathObject![method]!.operationId!,
          summary: pathObject![method]!.summary,
        })),
    )

const useActivateWhenInViewport = (
  elementsToScroll: HTMLElement[],
  elementsToActivate: Record<string, HTMLElement>,
  verticalOffset = 100,
  activeClass = "active",
) => {
  useEffect(() => {
    const scrollHandler = (event: Event) => {
      const window = event.currentTarget as Window
      const activationThreshold = window.scrollY + verticalOffset
      const isScrolledToBottom =
        window.scrollY + window.innerHeight ===
        document.documentElement.offsetHeight

      // If we've scrolled to the bottom we need to activate the last element. Otherwise, we won't be able to activate
      // elements that are placed so far down the document that they never cross the activation threshold.
      const activeElement = isScrolledToBottom
        ? elementsToScroll.slice(-1).pop()!
        : (elementsToScroll.findLast(
            (element) => element.offsetTop < activationThreshold,
          ) ?? elementsToScroll[0])

      for (const element of elementsToScroll) {
        if (element.id !== activeElement.id) {
          elementsToActivate[element.id].classList.remove(activeClass)
        }
      }

      if (activeElement) {
        elementsToActivate[activeElement.id].classList.add(activeClass)
      }
    }

    window.addEventListener("scroll", scrollHandler)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [elementsToScroll, elementsToActivate, verticalOffset, activeClass])
}

type Props = {
  doc: OpenApiDoc
}

export const Nav: React.FC<Props> = ({ doc }) => {
  const sections =
    useMemo(() => doc.paths && getSections(doc.paths), [doc]) ?? []

  const elements = useRef<Record<string, HTMLElement>>({})
  const [sectionElements, setSectionElements] = useState<HTMLElement[]>([])

  useEffect(() => {
    setSectionElements(
      sections
        .map((section) => document.getElementById(section.operationId))
        .filter((it) => it !== null),
    )
  }, [sections])

  useActivateWhenInViewport(sectionElements, elements.current)

  const updateRef = useCallback(
    (section: Section) => (el: HTMLElement | null) =>
      el && (elements.current[section.operationId] = el),
    [elements],
  )

  return (
    <div>
      <nav className={styles.nav}>
        <SpecSelector />
        {sections.map((section) => (
          <a
            key={`${section.method}-${section.operationId}`}
            className={styles.link}
            href={`#${section.operationId}`}
            ref={updateRef(section)}
          >
            <Tag size="small" variant={calloutTypeForMethod(section.method)}>
              {section.method}
            </Tag>
            {section.summary}
          </a>
        ))}
      </nav>
    </div>
  )
}
