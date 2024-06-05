import { FormBuilder } from "./FormBuilder"
import "@material/web/textfield/filled-text-field"
import "@material/web/textfield/outlined-text-field"

import "@material/web/select/outlined-select"
import "@material/web/select/filled-select"
import "@material/web/select/select-option"
import "@material/web/checkbox/checkbox"

import { randomId } from "../../math/helper"

document.body.innerHTML = `
<div is="g-svg-container">
   <div is="g-form-builder"></div>
</div>
`
const elem = document.querySelector<FormBuilder>(`div[is="g-form-builder"]`)!
// elem.addEventListener("widget-loaded", (e) => {
//   console.log(e.detail.loaded)
// })

elem.items = [
  // {
  //   type: "select",
  //   id: randomId(),
  //   required: true,
  //   options: [
  //     { display: "apple", vlaue: "apple", selected: true },
  //     { display: "banana", vlaue: "banana" },
  //   ],
  // },
  {
    type: "checkbox",
    id: randomId(),
    options: [{ vlaue: "1" }, { vlaue: "2" }],
  },
]
