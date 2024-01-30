import { randomId } from './math/helper'
import './reset.scss'
import { Container, EditBox, Gauge } from './widgets'
import './widgets'

const app = document.querySelector<HTMLDivElement>('#app')!

const containerMain = document.createElement('main')
const container = new Container({x: 200, y: 200}, 3)
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
