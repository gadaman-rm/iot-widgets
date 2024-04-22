type Create = {
  x?: number
  y?: number
  width?: number
  height?: number
  color?: string
  rotate?: number
  scaleX?: number
  scaleY?: number
}

export class RandomDiv {
  static create({
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    color = "black",
    rotate = 0,
    scaleX = 1,
    scaleY = 1,
  }: Create) {
    const div = document.createElement("elem")
    div.style.position = "absolute"
    div.style.width = `${width}px`
    div.style.height = `${height}px`
    div.style.backgroundColor = color
    div.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scaleX}, ${scaleY})`
    return div
  }
}

export class RandomSvgRect {
  static create({
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    color = "black",
    rotate = 0,
    scaleX = 1,
    scaleY = 1,
  }: Create) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    rect.setAttribute("x", x.toString())
    rect.setAttribute("y", y.toString())
    rect.setAttribute("width", width.toString())
    rect.setAttribute("height", height.toString())
    rect.setAttribute("fill", color)
    rect.setAttribute(
      "transform",
      `translate(${x}, ${y}) rotate(${rotate}) scale(${scaleX}, ${scaleY})`,
    )
    rect.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scaleX}, ${scaleY})`
    return rect
  }
}
