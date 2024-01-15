import { logInfo, toTransformBox } from '../../_helper/debug'
import html from './EditBox.html?raw'
import { EditBoxRender } from './EditBoxRender'

const template = document.createElement('template')
template.innerHTML = `${html}`

export class EditBoxRenderListener extends EditBoxRender {
    isRmidResize: boolean
    constructor() {
        super()
        this.isRmidResize = false
    }
    handleRmidResizeStart = (e: MouseEvent) => { this.isRmidResize = true }
    handleRmidResizeEnd = (e: MouseEvent) => { this.isRmidResize = false }
    handleRmidResize = (e: MouseEvent) => {
        if(this.isRmidResize) {
            const {x, y} = this.transform
            const box = toTransformBox(x, y, this.width, this.height)

            logInfo({
                TransformedBox: [{
                    points: box,
                }]
            })
            console.log(box)
        }
    }
    mount() {
        this.rmidResizeRef?.addEventListener('mousedown', this.handleRmidResizeStart)
        document.addEventListener('mousemove', this.handleRmidResize)
        document.addEventListener('mouseup', this.handleRmidResizeEnd)
    }
    unmount() {
        this.rmidResizeRef?.removeEventListener('mousedown', this.handleRmidResizeStart)
        document.removeEventListener('mousemove', this.handleRmidResizeStart)
        document.removeEventListener('mouseup', this.handleRmidResizeStart)
    }
}