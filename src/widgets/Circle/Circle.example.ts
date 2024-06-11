import { Circle } from "./Circle"

document.body.innerHTML = `
<div is="g-circle">
  zero
</div>
`
const elem = document.querySelector<Circle>(`div[is="g-circle"]`)!

console.log(elem)
