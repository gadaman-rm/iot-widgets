import { MyComponent } from "./MyComponent"
import "./MyComponent.example.scss"

document.body.innerHTML = `
<div is="my-component">
  <div slot="title1">Zero</div>
  <div slot="title2">Test</div>
</div>
`
const elem = document.querySelector<MyComponent>(`div[is="my-component"]`)!

console.log(elem)
