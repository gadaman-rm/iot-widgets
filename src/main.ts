import { randomId } from './math/helper'
import { Transform } from './math/matrix'
import './reset.scss'
import { EditBox, Gauge } from './widgets'
const app = document.querySelector<HTMLDivElement>('#app')!

const gauge = new Gauge('zero', 200, 200, 200, 200, 45)
const tstr = 'translate(700px, 400px) scale(1.5)'
document.body.style.transform = tstr
const t = new Transform(document.body)

app.appendChild(gauge)
const editBox = new EditBox(
    randomId(),
    t,
    gauge.width, gauge.height, gauge.x, gauge.y, gauge.rotate)
editBox.onEdit = (e) => {
    gauge.setAttribute('width', e.width.toString())
    gauge.setAttribute('height', e.height.toString())
    gauge.setAttribute('rotate', e.rotate.toString())
    gauge.setAttribute('origin', e.originStr)
    gauge.setAttribute('x', e.x.toString())
    gauge.setAttribute('y', e.y.toString())
}
app.appendChild(editBox)