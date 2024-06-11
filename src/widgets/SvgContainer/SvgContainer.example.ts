import { EditBox } from "../EditBox/EditBox"
import { RefrigeratorFrame } from "../RefrigeratorFrame/RefrigeratorFrame"
import { SvgContainer } from "../SvgContainer/SvgContainer"

const svgContainer = new SvgContainer()
document.body.appendChild(svgContainer)

const frame1 = new RefrigeratorFrame()
frame1.x = 30
frame1.y = 30
frame1.width = 100
svgContainer.addWidget(frame1)

const edit1 = new EditBox()
edit1.x = frame1.x
edit1.y = frame1.y
edit1.width = frame1.width
edit1.height = frame1.height
edit1.ratio = frame1.ratio
edit1.svgContainer = svgContainer
svgContainer.addEditBox(frame1, edit1)
edit1.addEventListener("edit", (e) => {
  if (e.detail.type === "rotate") frame1.width = e.detail.width
  frame1.height = e.detail.height
  frame1.rotate = e.detail.rotate
  frame1.origin = e.detail.origin
  frame1.x = e.detail.x
  frame1.y = e.detail.y
})

const frame2 = new RefrigeratorFrame()
frame2.x = 55
frame2.y = 100
frame2.width = 150
svgContainer.addWidget(frame2)

const edit2 = new EditBox()
edit2.x = frame2.x
edit2.y = frame2.y
edit2.width = frame2.width
edit2.height = frame2.height
edit2.ratio = frame2.ratio
edit2.svgContainer = svgContainer
svgContainer.addEditBox(frame2, edit2)
edit2.addEventListener("edit", (e) => {
  if (e.detail.type === "rotate") frame2.width = e.detail.width
  frame2.height = e.detail.height
  frame2.rotate = e.detail.rotate
  frame2.origin = e.detail.origin
  frame2.x = e.detail.x
  frame2.y = e.detail.y
})

const frame3 = new RefrigeratorFrame()
frame3.x = 305
frame3.y = 200
frame3.width = 150
svgContainer.addWidget(frame3)

const edit3 = new EditBox()
edit3.x = frame3.x
edit3.y = frame3.y
edit3.width = frame3.width
edit3.height = frame3.height
edit3.ratio = frame3.ratio
edit3.svgContainer = svgContainer
svgContainer.addEditBox(frame3, edit3)
edit3.addEventListener("edit", (e) => {
  if (e.detail.type === "rotate") frame3.width = e.detail.width
  frame3.height = e.detail.height
  frame3.rotate = e.detail.rotate
  frame3.origin = e.detail.origin
  frame3.x = e.detail.x
  frame3.y = e.detail.y
})

setTimeout(() => {
  svgContainer.verticalCenter()
}, 1000)

setTimeout(() => {
  svgContainer.horizontalDistributeCenter()
}, 2000)

setTimeout(() => {
  svgContainer.expandWidth()
  svgContainer.horizontalDistributeCenter()
}, 3000)

setTimeout(() => {
  svgContainer.verticalRight()
}, 4000)
