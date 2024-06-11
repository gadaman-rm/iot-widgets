import { Slider } from "./Slider"

document.body.innerHTML = `
<div is="g-slider" width="450" value="30"></div>
`
const elem = document.querySelector<Slider>(`div[is="g-slider"]`)!

console.log(elem)
