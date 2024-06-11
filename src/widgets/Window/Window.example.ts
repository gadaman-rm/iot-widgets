import { Window } from "./Window"

document.body.innerHTML = `
<div is="g-window" value="30"></div>
`
const elem = document.querySelector<Window>(`div[is="g-window"]`)!

elem.addEventListener("widget-loaded", (e) => {
  console.log(e.detail.loaded)
})
