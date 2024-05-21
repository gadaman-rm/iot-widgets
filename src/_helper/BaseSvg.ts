import { randomId } from "../math/helper"
import { Transform, toTransformBox } from "../math/matrix"
import { Point, point, roundPoint, subPoint } from "../math/point"

export const BASE_SVG_ATTRIBUTES = [
  "id",
  "x",
  "y",
  "width",
  "ratio",
  "height",
  "rotate",
  "scalex",
  "scaley",
  "origin",
] as const
export interface BaseSvgProps {
  template: HTMLTemplateElement
  id?: string
  width?: number
  height?: number
  x?: number
  y?: number
  rotate?: number
  origin?: string
  scaleX?: number
  scaleY?: number
}
export class BaseSvg extends HTMLDivElement {
  initAttribute(name: string, defaultValue: string) {
    if (!this.attributes.getNamedItem(name))
      this.setAttribute(name, defaultValue)
  }
  root: SVGSVGElement
  #transform: Transform
  isMounted = false
  isDimUpdate = false
  constructor({
    template,
    width,
    height,
    origin,
    id = randomId(),
    x = 0,
    y = 0,
    rotate = 0,
    scaleX = 1,
    scaleY = 1,
  }: BaseSvgProps) {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.root = this.shadowRoot!.querySelector("svg")!
    this.#transform = new Transform(this.root, x, y, scaleX, scaleY, rotate)
    this.initAttribute("id", id)
    this.initAttribute("x", x.toString())
    this.initAttribute("y", y.toString())
    if (width) this.initAttribute("width", width.toString())
    if (height) this.initAttribute("height", height.toString())
    this.initAttribute("rotate", rotate.toString())
    this.initAttribute("scalex", scaleX.toString())
    this.initAttribute("scaley", scaleY.toString())
    this.initAttribute(
      "origin",
      origin
        ? origin
        : this.width && this.height
          ? `${this.width / 2} ${this.height / 2}`
          : "0 0",
    )
  }

  public get id() {
    return this.getAttribute("id")!
  }
  public set id(id: string) {
    this.setAttribute("id", id)
  }
  public set transform(transform: Transform) {
    this.#transform = transform
  }
  public get transform(): Transform | undefined {
    return this.#transform
  }
  public get width(): number {
    return +this.getAttribute("width")!
  }
  public set width(width: number | undefined) {
    if (width !== undefined) this.setAttribute("width", width.toString())
  }
  public get ratio() {
    return +this.getAttribute("ratio")!
  }
  public set ratio(ratio: number) {
    this.setAttribute("ratio", ratio.toString())
  }
  public get height(): number {
    return +this.getAttribute("height")!
  }
  public set height(height: number | undefined) {
    if (height !== undefined) this.setAttribute("height", height.toString())
  }
  public get x() {
    return +this.getAttribute("x")!
  }
  public set x(x: number) {
    this.setAttribute("x", x.toString())
  }
  public get y() {
    return +this.getAttribute("y")!
  }
  public set y(y: number) {
    this.setAttribute("y", y.toString())
  }
  public get rotate() {
    return +this.getAttribute("rotate")!
  }
  public set rotate(rotate: number) {
    this.setAttribute("rotate", rotate.toString())
  }
  public get scaleX() {
    return +this.getAttribute("scaleX")!
  }
  public set scaleX(scaleX: number) {
    this.setAttribute("scaleX", scaleX.toString())
  }
  public get scaleY() {
    return +this.getAttribute("scaleY")!
  }
  public set scaleY(scaleY: number) {
    this.setAttribute("scaleY", scaleY.toString())
  }
  public get originStr() {
    return this.getAttribute("origin")!
  }
  public get origin(): Point {
    const origin = this.getAttribute("origin")?.trim()?.split(" ")!
    const x = +origin[0]
    const y = +origin[1]
    return { x, y }
  }
  public set origin(origin: string | Point) {
    if (typeof origin === "string") this.setAttribute("origin", origin)
    else this.setAttribute("origin", `${origin.x} ${origin.y}`)
  }

  setOriginCenter() {
    if (this.width !== undefined && this.height !== undefined)
      this.origin = { x: this.width / 2, y: this.height / 2 }
  }
  fixXyInResize(
    oldWidth: number,
    newWidth: number,
    oldHeight: number,
    newHeight: number,
  ) {
    if (this.#transform) {
      const { x, y, rotate } = this.#transform.transform
      const iBox = toTransformBox(x, y, oldWidth, oldHeight, rotate)
      const nBox = toTransformBox(x, y, newWidth, newHeight, rotate)
      const dTl = subPoint(nBox.tl, iBox.tl)
      const newPosition = roundPoint(subPoint(point(this.x, this.y), dTl))
      if (!isNaN(newPosition.x) && !isNaN(newPosition.y)) {
        this.x = newPosition.x
        this.y = newPosition.y
      }
    }
  }

  attributeChangedCallback(
    attributeName: (typeof BASE_SVG_ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (attributeName) {
      case "id":
        this.idUpdate(oldValue, newValue)
        break
      case "ratio":
        this.ratioUpdate(+oldValue, +newValue)
        break
      case "x":
        this.xUpdate(+oldValue, +newValue)
        break
      case "y":
        this.yUpdate(+oldValue, +newValue)
        break
      case "width":
        this.widthChange(+oldValue, +newValue)
        this.widthUpdate(+oldValue, +newValue)
        break
      case "height":
        this.heightChange(+oldValue, +newValue)
        this.heightUpdate(+oldValue, +newValue)
        break
      case "rotate":
        this.rotateUpdate(+oldValue, +newValue)
        break
      case "scalex":
        this.scaleXUpdate(+oldValue, +newValue)
        break
      case "scaley":
        this.scaleYUpdate(+oldValue, +newValue)
        break
      case "origin":
        this.originUpdate(oldValue, newValue)
        break
      default:
        this.attributeUpdate(attributeName, oldValue, newValue)
    }
  }
  connectedCallback() {
    this.isMounted = true
    this.mount()
  }
  disconnectedCallback() {
    this.unmount()
  }

  idUpdate(oldId: string, newId: string) {}
  ratioUpdate(oldRatio: number, newRatio: number) {}

  widthChange(oldWidth: number, newWidth: number): void {}
  heightChange(oldHeight: number, newHeight: number): void {}

  widthUpdate(oldWidth: number, newWidth: number) {
    this.fixXyInResize(oldWidth, newWidth, this.height, this.height)
    this.root.setAttribute("width", newWidth.toString())
    this.setOriginCenter()
    if (!this.isDimUpdate && this.ratio) {
      this.isDimUpdate = true
      this.height = +(newWidth * this.ratio).toFixed(3)
    } else {
      this.isDimUpdate = false
    }
  }
  heightUpdate(oldHeight: number, newHeight: number) {
    this.fixXyInResize(this.width, this.width, oldHeight, newHeight)
    this.root.setAttribute("height", newHeight.toString())
    this.setOriginCenter()
    if (!this.isDimUpdate && this.ratio) {
      this.isDimUpdate = true
      this.width = +((newHeight * 1) / this.ratio).toFixed(3)
    } else {
      this.isDimUpdate = false
    }
  }
  xUpdate(oldX: number, newX: number) {
    if (this.#transform) this.#transform.transform = { x: newX }
  }
  yUpdate(oldY: number, newY: number) {
    if (this.#transform) this.#transform.transform = { y: newY }
  }
  rotateUpdate(oldRotate: number, newRotate: number) {
    if (this.#transform) this.#transform.transform = { rotate: -newRotate }
  }
  scaleXUpdate(oldScaleX: number, newScaleX: number) {
    if (this.#transform) this.#transform.transform = { scaleX: newScaleX }
  }
  scaleYUpdate(oldScaleY: number, newScaleY: number) {
    if (this.#transform) this.#transform.transform = { scaleY: newScaleY }
  }
  originUpdate(oldOrigin: string, newOrigin: string) {
    this.root.setAttribute("transform-origin", newOrigin)
  }
  attributeUpdate(attributeName: any, oldValue: string, newValue: string) {}
  mount() {}
  unmount() {}
}
