import {
  FormBuilder,
  Gauge,
  RefrigeratorContent,
  RefrigeratorFrame,
  Row,
  Slider,
} from "."

export type IWidgets =
  | Slider
  | Gauge
  | RefrigeratorFrame
  | RefrigeratorContent
  | Row
export type IWidgetsIsNames =
  | "g-slider"
  | "g-gauge"
  | "g-refrigerator-frame"
  | "g-refrigerator-content"
  | "g-row"
  | "g-form-builder"
export const isToWidgets = (widgetName: IWidgetsIsNames | undefined | null) => {
  switch (widgetName) {
    case "g-slider":
      return new Slider()
    case "g-gauge":
      return new Gauge()
    case "g-refrigerator-frame":
      return new RefrigeratorFrame()
    case "g-refrigerator-content":
      return new RefrigeratorContent()
    case "g-row":
      return new Row()
    case "g-form-builder":
      return new FormBuilder()
  }
}
