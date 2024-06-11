import { RefrigeratorFrame } from "../RefrigeratorFrame/RefrigeratorFrame"
import { SvgContainer } from "../SvgContainer/SvgContainer"
import { EditBox } from "./EditBox"

const svgContainer = new SvgContainer()
document.body.appendChild(svgContainer)

const frame = new RefrigeratorFrame()
frame.x = 100
frame.y = 100
frame.width = 200
svgContainer.addWidget(frame)

const editBox = new EditBox()
editBox.x = frame.x
editBox.y = frame.y
editBox.width = frame.width
editBox.height = frame.height
editBox.ratio = frame.ratio
editBox.svgContainer = svgContainer
svgContainer.addEditBox(frame, editBox)

editBox.addEventListener("edit-start", (e) => {
  console.log("Start:", e.detail.type)
})

editBox.addEventListener("edit", (e) => {
  if (e.detail.type === "rotate") frame.width = e.detail.width
  frame.height = e.detail.height
  frame.rotate = e.detail.rotate
  frame.origin = e.detail.origin
  frame.x = e.detail.x
  frame.y = e.detail.y
})

editBox.addEventListener("edit-end", (e) => {
  console.log("End:", e.detail.type)
})
