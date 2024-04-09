import "./components/components"
import "./styles/reset.scss"
import "./widgets"
import { MdFilledButton } from "@material/web/button/filled-button"
import "@material/web/tokens/v0_192/_md-ref-palette.scss"
import "@material/web/tokens/v0_192/_md-sys-color.scss"

const app = document.querySelector<HTMLDivElement>("#app")!

const test = document.createElement("div")
test.innerHTML = `
<div is="g-modal" open="true">
</div>
`

new MdFilledButton()
app.appendChild(test)
