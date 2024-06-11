import { RefrigeratorContent } from "./RefrigeratorContent"

document.body.innerHTML = `
<div is="g-refrigerator-content" x="100" y="100"></div>
`
const elem = document.querySelector<RefrigeratorContent>(
  `div[is="g-refrigerator-content"]`,
)!

elem.addEventListener("widget-loaded", (e) => {
  console.log(e.detail.loaded)
})
