import { Sample } from "./Sample"

document.body.innerHTML = `
<div is="g-sample">
  <div id="name" slot="name">Zero</div>
  <div id="description" slot="description">Life is better when you are in the place that you belong to be there!</div>
</div>
`
const elem = document.querySelector<Sample>(`div[is="g-sample"]`)!

console.log(elem)
