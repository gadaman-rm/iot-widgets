import {
  FormBuilder,
  Gauge,
  RefrigeratorContent,
  RefrigeratorFrame,
  Row,
  Slider,
} from ".."

export type IWidgets =
  | Slider
  | Gauge
  | RefrigeratorFrame
  | RefrigeratorContent
  | Row
  | FormBuilder
