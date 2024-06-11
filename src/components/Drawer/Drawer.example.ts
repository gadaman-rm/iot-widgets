import { Drawer } from "./Drawer"

document.body.innerHTML = `
<div is="g-drawer" anchor="left" open="true">
  <h1>some content</h1>
</div>
`
const elem = document.querySelector<Drawer>(`div[is="g-drawer"]`)!

elem.addEventListener("drawer-change", (e) => {
  console.log(e.detail.size)
})
