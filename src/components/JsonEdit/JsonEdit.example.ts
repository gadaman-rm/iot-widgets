import { JsonEdit } from "./JsonEdit"

document.body.innerHTML = `
<div is="g-json-edit"></div>
`
const elem = document.querySelector<JsonEdit>(`div[is="g-json-edit"]`)!
elem.code = `[
  {
    text: "عملیات",
    width: "200px",
  },
  {
    text: "ورژن",
  },
  {
    text: "نام",
  },
  {
    text: "کد",
  },
]
`

elem.addEventListener("json-change", (e) => {
  // console.log(e.detail.json, elem.codeInJson())
})

setTimeout(() => {
  elem.code = "zero"
}, 6000)
