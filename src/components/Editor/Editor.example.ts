import { htmlRoot } from "../../_helper"
import { Editor } from "./Editor"

const div = htmlRoot`<div style="display: flex;"></div>`
document.body.appendChild(div)

const c1 = new Editor({
  value: `const zero = 0`,
})

const c2 = new Editor({
  value: `const zero = "0"`,
})

const c3 = new Editor({
  value: `{
"$schema": "internal://server/foo.json"
}`,
  language: "json",
})
div.appendChild(c1)
div.appendChild(c2)
div.appendChild(c3)

const elem = document.querySelector<Editor>(`div[is="g-editor"]`)!
elem.addEventListener("component-loaded", (e) => {
  console.log(e.detail.loaded)
})
