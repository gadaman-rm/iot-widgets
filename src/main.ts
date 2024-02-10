import { randomId } from './math/helper'
import './reset.scss'
import { SvgContainer, EditBox, Gauge } from './widgets'
import './widgets'

const app = document.querySelector<HTMLDivElement>('#app')!

const container = new SvgContainer([], {x: 200, y: 200}, 1.4)
app.appendChild(container)

const gauge = new Gauge('zero', 200, 200, 400, 150, 45)
container.addWidget(gauge)

const editBox = new EditBox(randomId(), container, gauge.width, gauge.height, gauge.x, gauge.y, gauge.rotate)
editBox.onEdit = (e) => {
    gauge.setAttribute('width', e.width.toString())
    gauge.setAttribute('height', e.height.toString())
    gauge.setAttribute('rotate', e.rotate.toString())
    gauge.setAttribute('origin', e.originStr)
    gauge.setAttribute('x', e.x.toString())
    gauge.setAttribute('y', e.y.toString())
}
editBox.onEditStart = (t) => { console.log('start', t) }
editBox.onEditEnd = (t) => { console.log('end', t) }

// document.addEventListener('mousemove', (e) => {
//     const m = editBox.mouseCoordInZoomAndPan(e)
//     editBox.moveListener.emitMove(m, m)
//     editBox.style.visibility = 'hidden'
// })

container.addWidgetEditBox(gauge, editBox)

// const h1 = document.createElement('h1')
// h1.style.color = 'red'
// h1.style.position = 'absolute'
// h1.style.insetInlineStart = '100px'
// h1.style.insetBlockStart = '100px'
// h1.innerHTML = `
// zero
// `
// container.push(h1)
