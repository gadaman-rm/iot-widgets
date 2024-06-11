import { Button } from "./Buttton"

document.body.innerHTML = `
<div is="g-button">
  zero
</div>
`
const elem = document.querySelector<Button>(`div[is="g-button"]`)!

elem.addEventListener("click", (e) => {
  console.log(e.target)
})
