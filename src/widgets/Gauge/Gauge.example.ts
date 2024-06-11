import { Gauge } from "./Gauge"

document.body.innerHTML = `
<div is="g-gauge" value="30"></div>
`
const elem = document.querySelector<Gauge>(`div[is="g-gauge"]`)!

elem.addEventListener("widget-loaded", (e) => {
  console.log(e.detail.loaded)
})
