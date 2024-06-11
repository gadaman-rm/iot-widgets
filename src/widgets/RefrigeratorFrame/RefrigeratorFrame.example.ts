import { RefrigeratorFrame } from "./RefrigeratorFrame"

document.body.innerHTML = `
<div is="g-refrigerator-frame" x="100" y="100">
</div>
`
const elem = document.querySelector<RefrigeratorFrame>(
  `div[is="g-refrigerator-frame"]`,
)!

elem.addEventListener("widget-loaded", (e) => {
  console.log(e.detail.loaded)
})
