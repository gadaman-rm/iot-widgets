import { TransformedBox } from "../math/matrix"
import { Point } from "../math/point"

export interface LogPointStyle {
  labelOffsetX?: number
  labelOffsetY?: number
  color?: string
}

const logPoint = (
  container: HTMLElement | SVGSVGElement,
  point: Point,
  label?: string,
  style?: LogPointStyle,
  showLabel: boolean = true,
) => {
  const pointSize = 15
  label ??= "p"

  let isPoint = document.getElementById(label.toLowerCase()) as HTMLDivElement
  const pointRef = isPoint ? isPoint : document.createElement("div")
  pointRef.setAttribute("id", label.toLowerCase())
  pointRef.style.position = "absolute"
  pointRef.style.width = `${pointSize}px`
  pointRef.style.height = `${pointSize}px`
  pointRef.style.insetInlineStart = `0px`
  pointRef.style.insetBlockStart = `0px`
  pointRef.style.borderRadius = `${pointSize}px`

  pointRef.style.transform = `translate(${point.x - pointSize / 2}px, ${point.y - pointSize / 2}px)`
  pointRef.style.backgroundColor = style?.color ? style?.color : "green"

  if (showLabel === true) {
    let isLabel = document.getElementById(
      "t-" + label.toLowerCase(),
    ) as SVGTextElement | null

    const labelRef = isLabel ? isLabel : document.createElement("div")
    labelRef.setAttribute("id", "t-" + label.toLowerCase())
    labelRef.style.position = "absolute"
    labelRef.style.insetInlineStart = `0px`
    labelRef.style.insetBlockStart = `0px`
    labelRef.style.transform = `translate(${
      point.x + pointSize + (style?.labelOffsetX || 0)
    }px, ${point.y + pointSize + (style?.labelOffsetY || 0)}px)`
    labelRef.style.color = style?.color ? style?.color : "green"
    labelRef.innerHTML = `${label}{${point.x}, ${point.y}}`
    container.appendChild(labelRef)
  }

  container.appendChild(pointRef)
}

export const logInfo = (
  container: HTMLElement | SVGSVGElement,
  data: {
    points?: {
      point: Point
      label?: string
      color?: string
      showLabel?: boolean
    }[]
    TransformedBox?: {
      points: Omit<TransformedBox, "aabox" | "cen">
      color?: string
      prefix?: string
      showLabel?: boolean
    }[]
  },
) => {
  if (data.points)
    data.points.forEach((item) => {
      logPoint(
        container,
        item.point,
        item.label,
        { labelOffsetX: -8, labelOffsetY: -8, color: item.color },
        item.showLabel,
      )
    })
  if (data.TransformedBox)
    data.TransformedBox.forEach((item) => {
      const currentResizelogStyle: LogPointStyle = {
        labelOffsetX: -8,
        labelOffsetY: -8,
        color: item.color,
      }
      logPoint(
        container,
        item.points.tl,
        `${item.prefix || ""}tl`,
        currentResizelogStyle,
        item.showLabel,
      )
      logPoint(
        container,
        item.points.tr,
        `${item.prefix || ""}tr`,
        currentResizelogStyle,
      )
      logPoint(
        container,
        item.points.bl,
        `${item.prefix || ""}bl`,
        currentResizelogStyle,
        item.showLabel,
      )
      logPoint(
        container,
        item.points.br,
        `${item.prefix || ""}br`,
        currentResizelogStyle,
        item.showLabel,
      )
    })
}
