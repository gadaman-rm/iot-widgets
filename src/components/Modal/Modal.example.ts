// import { Modal } from "./Modal"
import "@material/web/dialog/dialog"
import "@material/web/textfield/filled-text-field"
import "@material/web/iconbutton/filled-icon-button"
import "@material/web/button/text-button"

document.body.innerHTML = `
<div is="g-modal" open>
  <p>text</p>
</div>
`
// const elem = document.querySelector<Modal>(`div[is="g-modal"]`)!
// elem.addEventListener("widget-loaded", (e) => {
//   console.log(e.detail.loaded)
// })
