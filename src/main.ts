import { randomId } from './math/helper'
import { Transform } from './math/matrix'
import './reset.scss'
import { logInfo } from './utility/debug'
import { EditBox, Gauge } from './widgets'
const app = document.querySelector<HTMLDivElement>('#app')!

const gauge = new Gauge('zero', 200, 200, 200, 200, 45)
const tstr = 'translate(314px, 290px) scale(1.2)'
app.style.transform = tstr
const containerTransform = new Transform(app)

app.appendChild(gauge)
const editBox = new EditBox(
    randomId(),
    containerTransform,
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

document.addEventListener('mousemove', (e) => {
    logInfo({
        points: [
            {
                label: 'm',
                point: {
                    x: e.clientX + 10,
                    y: e.clientY + 10,
                }
            }
        ]
    })
})