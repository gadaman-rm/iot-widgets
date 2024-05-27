import { JsonEdit } from "./JsonEdit"

document.body.innerHTML = `
<div is="g-json-edit"></div>
`
const elem = document.querySelector<JsonEdit>(`div[is="g-json-edit"]`)!
elem.code = `{ 
  "name": "zero",
  "age": 30,
  "gender": "male"
} 
`

elem.addEventListener("json-change", (e) => {
  console.log(e.detail.json, elem.codeInJson())
})
