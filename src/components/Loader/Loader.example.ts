import { Loader } from "./Loader"

document.body.innerHTML = `
<div is="g-loader" anchor="left" open="true">
  <h1>some content</h1>
</div>
`
const elem = document.querySelector<Loader>(`div[is="g-loader"]`)!

console.log(elem)
