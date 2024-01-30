import { randomId } from './math/helper'
import './reset.scss'
import { Container, EditBox, Gauge } from './widgets'
import './widgets'

const app = document.querySelector<HTMLDivElement>('#app')!

const containerMain = document.createElement('main')
const container = new Container({x: 200, y: 200}, 1.4)
container.appendChild(containerMain)
app.appendChild(container)

const gauge = new Gauge('zero', 200, 200, 400, 150, 0)
containerMain.appendChild(gauge)
const editBox = new EditBox(
    randomId(),
    container,
    gauge.width, gauge.height, gauge.x, gauge.y, gauge.rotate)
editBox.onEdit = (e) => {
    gauge.setAttribute('width', e.width.toString())
    gauge.setAttribute('height', e.height.toString())
    gauge.setAttribute('rotate', e.rotate.toString())
    gauge.setAttribute('origin', e.originStr)
    gauge.setAttribute('x', e.x.toString())
    gauge.setAttribute('y', e.y.toString())
}

containerMain.appendChild(editBox)


// const h1 = document.createElement('h1')
// h1.style.color = 'red'
// h1.style.position = 'absolute'
// h1.style.insetInlineStart = '100px'
// h1.style.insetBlockStart = '100px'
// h1.innerHTML = `
// zero
// `
// containerMain.appendChild(h1)