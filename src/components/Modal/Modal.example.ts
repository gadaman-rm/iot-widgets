import { Modal } from "./Modal"
import "@material/web/dialog/dialog"
import "@material/web/textfield/filled-text-field"
import "@material/web/iconbutton/filled-icon-button"
import "@material/web/button/text-button"

document.body.innerHTML = `
<div is="g-modal" open>
  <p slot="header">Title</p>
  <p slot="body">body</p>
  <p slot="footer">footer</p>
</div>
`
const elem = document.querySelector<Modal>(`div[is="g-modal"]`)!

elem.addEventListener("open-change", (e) => {
  console.log(e.detail.open)
})
