import { EditBox, IWidgets } from ".."
import { moveToIndex } from "../../_helper"
import { Transform, toTransformBox } from "../../math/matrix"
import { Point } from "../../math/point"
import html from "./SvgContainer.html?raw"
import style from "./SvgContainer.scss?inline"

const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>${html}`

export interface WidgetChangeEvent {
  widgets: IWidgets[]
}
export interface EditBoxChangeEvent {
  editBoxforWidgets: EditBoxforWidgets[]
}

export type EditBoxforWidgets = { widget: IWidgets; editBox: EditBox }

export const SVG_CONTAINER_ATTRIBUTES = ["panx", "pany", "zoom"] as const
export class SvgContainer extends HTMLDivElement {
  root: SVGSVGElement
  main: SVGGElement
  transform: Transform
  widgets: IWidgets[]
  editBoxforWidgets: EditBoxforWidgets[]
  static get observedAttributes() {
    return SVG_CONTAINER_ATTRIBUTES
  }
  widgetChangeEvent: CustomEvent<WidgetChangeEvent>
  editBoxChangeEvent: CustomEvent<EditBoxChangeEvent>
  constructor(
    widgets: IWidgets[] = [],
    pan: Point = { x: 0, y: 0 },
    zoom: number = 1,
  ) {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.root = this.shadowRoot!.querySelector("#root")!
    this.main = this.shadowRoot!.querySelector("#main")!
    this.setAttribute("is", "g-svg-container")
    this.transform = new Transform(this.main, pan.x, pan.y, zoom, zoom)
    this.zoom = zoom
    this.pan = pan
    this.editBoxforWidgets = []
    widgets.forEach((widget) => this.addWidget(widget))
    this.widgets = widgets
    this.appendChild(document.createElement("main"))
    this.widgetChangeEvent = new CustomEvent<WidgetChangeEvent>(
      "widget-change",
      { detail: { widgets } },
    )
    this.editBoxChangeEvent = new CustomEvent<EditBoxChangeEvent>(
      "editbox-change",
      { detail: { editBoxforWidgets: [] } },
    )
  }
  public get zoom() {
    return +this.getAttribute("zoom")!
  }
  public set zoom(zoom: number) {
    this.setAttribute("zoom", zoom.toString())
  }
  public get pan() {
    return { x: +this.getAttribute("panx")!, y: +this.getAttribute("pany")! }
  }
  public set pan(pan: Point) {
    this.setAttribute("panx", pan.x.toString())!
    this.setAttribute("pany", pan.y.toString())!
  }
  public get matrix() {
    return this.root.getScreenCTM()!
  }
  mouseCoordInContainerMatrix = (e: MouseEvent) => {
    return new DOMPoint(e.clientX, e.clientY).matrixTransform(this.matrix)
  }
  mouseCoordInContainer(e: MouseEvent) {
    const pan = this.pan
    const zoom = this.zoom
    return { x: (e.clientX - pan.x) / zoom, y: (e.clientY - pan.y) / zoom }
  }
  zoomUpdate(oldZoom: number, newZoom: number) {
    this.transform.transform = { scaleX: newZoom, scaleY: newZoom }
  }
  panXUpdate(oldPanX: number, newPanX: number) {
    this.transform.transform = { ...this.pan, x: newPanX }
  }
  panYUpdate(oldPanY: number, newPanY: number) {
    this.transform.transform = { ...this.pan, y: newPanY }
  }

  attributeChangedCallback(
    attributeName: (typeof SVG_CONTAINER_ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (attributeName) {
      case "panx":
        this.panXUpdate(+oldValue, +newValue)
        break
      case "pany":
        this.panYUpdate(+oldValue, +newValue)
        break
      case "zoom":
        this.zoomUpdate(+oldValue, +newValue)
        break
    }
  }

  addWidget(widget: IWidgets) {
    this.firstChild!.appendChild(widget)
    this.widgets.push(widget)

    this.widgetChangeEvent.detail.widgets = [...this.widgets]
    this.dispatchEvent(this.widgetChangeEvent)
  }
  removeWidget(widget: IWidgets) {
    const removeItem = this.widgets.find((item) => item.id === widget.id)
    if (removeItem) {
      removeItem.remove()
      this.widgets = this.widgets.filter((item) => item.id !== widget.id)

      this.widgetChangeEvent.detail.widgets = [...this.widgets]
      this.dispatchEvent(this.widgetChangeEvent)
    }
  }
  findWidget(widgetId: string) {
    return this.widgets.find((item) => item.id === widgetId)
  }

  addEditBox(widget: IWidgets, editBox: EditBox) {
    this.firstChild!.appendChild(editBox)
    this.editBoxforWidgets.push({ editBox, widget })

    this.editBoxChangeEvent.detail.editBoxforWidgets = [
      ...this.editBoxforWidgets,
    ]
    this.dispatchEvent(this.editBoxChangeEvent)
  }
  removeEditBox(editBox: EditBox) {
    const removeItem = this.editBoxforWidgets.find(
      (item) => item.editBox.id === editBox.id,
    )
    if (removeItem) {
      removeItem.editBox.remove()
      this.editBoxforWidgets = this.editBoxforWidgets.filter(
        (item) => item.editBox.id !== editBox.id,
      )

      this.editBoxChangeEvent.detail.editBoxforWidgets = [
        ...this.editBoxforWidgets,
      ]
      this.dispatchEvent(this.editBoxChangeEvent)
    }
  }
  removeAllEditBox() {
    if (this.editBoxforWidgets.length > 0) {
      this.editBoxforWidgets.forEach((item) => item.editBox.remove())
      this.editBoxforWidgets = []

      this.editBoxChangeEvent.detail.editBoxforWidgets = []
      this.dispatchEvent(this.editBoxChangeEvent)
    }
  }
  findEditBoxByWidgetId(widget: IWidgets) {
    return this.editBoxforWidgets.find((item) => item.widget.id === widget.id)
  }
  findEditBoxById(editBox: EditBox) {
    return this.editBoxforWidgets.find((item) => item.editBox.id === editBox.id)
  }

  riseToTop() {
    const selected = this.editBoxforWidgets[0].widget
    if (selected && this.widgets.length > 1) {
      const widgetIndex = this.widgets.findIndex(
        (item) => item.id === selected.id,
      )
      moveToIndex(selected, this.widgets.length)
      this.swap(this.widgets.length - 1, widgetIndex)
    }
  }

  rise() {
    const selected = this.editBoxforWidgets[0].widget
    if (selected && this.widgets.length > 1) {
      const widgetIndex = this.widgets.findIndex(
        (item) => item.id === selected.id,
      )
      const swapIndex =
        widgetIndex + 1 >= this.widgets.length
          ? this.widgets.length - 1
          : widgetIndex + 1
      moveToIndex(selected, swapIndex + 1)
      this.swap(widgetIndex, swapIndex)
    }
  }

  lower() {
    const selected = this.editBoxforWidgets[0].widget
    if (selected && this.widgets.length > 1) {
      const widgetIndex = this.widgets.findIndex(
        (item) => item.id === selected.id,
      )
      const swapIndex = widgetIndex ? widgetIndex - 1 : (0 as number)
      moveToIndex(selected, swapIndex)
      this.swap(widgetIndex, swapIndex)
    }
  }

  lowerToBottom() {
    const selected = this.editBoxforWidgets[0].widget
    if (selected && this.widgets.length > 1) {
      const widgetIndex = this.widgets.findIndex(
        (item) => item.id === selected.id,
      ) as number
      moveToIndex(selected, 0)
      this.swap(0, widgetIndex)
    }
  }

  verticalLeft() {
    if (this.editBoxforWidgets.length > 1) {
      let leftist = this.editBoxforWidgets[0]
      this.editBoxforWidgets.forEach((item) => {
        if (item.widget.x < leftist.widget.x) leftist = item
      })

      this.editBoxforWidgets.forEach((item) => {
        item.widget.x = leftist.widget.x
        item.editBox.x = leftist.editBox.x
      })
    }
  }

  verticalRight() {
    if (this.editBoxforWidgets.length > 1) {
      let rightist = this.editBoxforWidgets[0]
      this.editBoxforWidgets.forEach((item) => {
        if (
          item.widget.x + item.widget.width >
          rightist.widget.x + rightist.widget.width
        )
          rightist = item
      })

      this.editBoxforWidgets.forEach((item) => {
        const d =
          rightist.widget.x +
          rightist.widget.width -
          item.widget.x -
          item.widget.width
        item.widget.x += d
        item.editBox.x += d
      })
    }
  }

  verticalCenter() {
    if (this.editBoxforWidgets.length > 1) {
      const ref = this.editBoxforWidgets[0]
      const refCenter = ref.widget.x + ref.widget.width / 2

      this.editBoxforWidgets.forEach((item) => {
        const itemCenter = item.widget.x + item.widget.width / 2
        const d = refCenter - itemCenter
        item.widget.x += d
        item.editBox.x += d
      })
    }
  }

  verticalDistributeCenter() {
    if (this.editBoxforWidgets.length > 2) {
      const sorted = this.editBoxforWidgets.sort(
        (p, c) => p.widget.x - c.widget.x,
      )
      const firstIndex = 0
      const lastIndex = sorted.length - 1

      const fill = sorted.reduce((p, c, index) => {
        if (index !== firstIndex && index !== lastIndex) {
          return p + c.widget.width
        } else return p
      }, 0)

      const itemFirst = sorted[firstIndex].widget.x
      const itemLast = sorted[lastIndex].widget.x
      const space =
        (itemLast - itemFirst - sorted[firstIndex].widget.width - fill) /
        (sorted.length - 1)
      let sum = 0

      sorted.forEach((item, index) => {
        item.widget.x = itemFirst + sum + index * space
        item.editBox.x = itemFirst + sum + index * space
        sum += item.widget.width
      })
    }
  }

  rowDistribute() {
    if (this.editBoxforWidgets.length > 2) {
      this.editBoxforWidgets.forEach((item, index, arr) => {
        if (index > 0) {
          item.widget.x = arr[0].widget.x
          item.widget.y = arr[index - 1].widget.y + arr[index - 1].widget.height

          item.editBox.x = arr[0].widget.x
          item.editBox.y =
            arr[index - 1].widget.y + arr[index - 1].widget.height
        }
      })
    }
  }

  horizontalTop() {
    if (this.editBoxforWidgets.length > 1) {
      let leftist = this.editBoxforWidgets[0]
      this.editBoxforWidgets.forEach((item) => {
        if (item.widget.y < leftist.widget.y) leftist = item
      })

      this.editBoxforWidgets.forEach((item) => {
        item.widget.y = leftist.widget.y
        item.editBox.y = leftist.editBox.y
      })
    }
  }

  horizontalBottom() {
    if (this.editBoxforWidgets.length > 1) {
      let rightist = this.editBoxforWidgets[0]
      this.editBoxforWidgets.forEach((item) => {
        if (
          item.widget.y + item.widget.height >
          rightist.widget.y + rightist.widget.height
        )
          rightist = item
      })

      this.editBoxforWidgets.forEach((item) => {
        const d =
          rightist.widget.y +
          rightist.widget.height -
          item.widget.y -
          item.widget.height
        item.widget.y += d
        item.editBox.y += d
      })
    }
  }

  horizontalCenter() {
    if (this.editBoxforWidgets.length > 1) {
      const ref = this.editBoxforWidgets[0]
      const refCenter = ref.widget.y + ref.widget.height / 2

      this.editBoxforWidgets.forEach((item) => {
        const itemCenter = item.widget.y + item.widget.height / 2
        const d = refCenter - itemCenter
        item.widget.y += d
        item.editBox.y += d
      })
    }
  }

  horizontalDistributeCenter() {
    if (this.editBoxforWidgets.length > 2) {
      const sorted = this.editBoxforWidgets.sort(
        (p, c) => p.widget.y - c.widget.y,
      )
      const firstIndex = 0
      const lastIndex = sorted.length - 1

      const fill = sorted.reduce((p, c, index) => {
        if (index !== firstIndex && index !== lastIndex) {
          return p + c.widget.height
        } else return p
      }, 0)

      const itemFirst = sorted[firstIndex].widget.y
      const itemLast = sorted[lastIndex].widget.y
      const space =
        (itemLast - itemFirst - sorted[firstIndex].widget.height - fill) /
        (sorted.length - 1)
      let sum = 0

      sorted.forEach((item, index) => {
        item.widget.y = itemFirst + sum + index * space
        item.editBox.y = itemFirst + sum + index * space
        sum += item.widget.height
      })
    }
  }

  columnDistribute() {
    if (this.editBoxforWidgets.length > 2) {
      this.editBoxforWidgets.forEach((item, index, arr) => {
        if (index > 0) {
          item.widget.y = arr[0].widget.y
          item.widget.x = arr[index - 1].widget.x + arr[index - 1].widget.width

          item.editBox.x = arr[0].widget.x
          item.editBox.x = arr[index - 1].widget.x + arr[index - 1].widget.width
        }
      })
    }
  }

  widgetsInBox(start: Point, end: Point) {
    return this.widgets.filter((item) => {
      if (item.getAttribute("is") !== "g-editbox") {
        const { tl, tr, br, bl } = toTransformBox(
          item.x,
          item.y,
          item.width,
          item.height,
          -item.rotate,
        )

        if (
          tl.x >= start.x &&
          tl.y >= start.y &&
          tl.x <= end.x &&
          tl.y <= end.y &&
          tr.x >= start.x &&
          tr.y >= start.y &&
          tr.x <= end.x &&
          tr.y <= end.y &&
          br.x >= start.x &&
          br.y >= start.y &&
          br.x <= end.x &&
          br.y <= end.y &&
          bl.x >= start.x &&
          bl.y >= start.y &&
          bl.x <= end.x &&
          bl.y <= end.y
        )
          return item
      }
    })
  }

  swap(indexA: number, indexB: number) {
    ;[[this.widgets[indexA]], [this.widgets[indexB]]] = [
      [this.widgets[indexB]],
      [this.widgets[indexA]],
    ]
  }
  //********************************* Events *********************************
  // @ts-ignore: Unreachable code error
  addEventListener<K extends keyof CustomElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void
  // @ts-ignore: Unreachable code error
  removeEventListener<K extends keyof CustomElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void
}

interface CustomElementEventMap extends HTMLElementEventMap {
  "widget-change": { detail: WidgetChangeEvent }
  "editbox-change": { detail: EditBoxChangeEvent }
}

customElements.define("g-svg-container", SvgContainer, { extends: "div" })
