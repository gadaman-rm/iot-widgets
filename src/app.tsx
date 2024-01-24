import { useEffect, useRef } from "preact/hooks"
import "./widgets"
// import { MyComponent } from "./widgets"
import { EditBox, Gauge } from "./widgets"
import { randomId } from "./math/helper"
import { Transform } from "./math/matrix"

export function App() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const gauge = new Gauge('zero', 200, 200, 200, 200, 45)
      const tstr = 'translate(700px, 700px) scale(1.5)'
      const t =  new Transform(tstr)
      // document.querySelector<HTMLDivElement>("#app")!.style.transform = tstr
      // document.body.style.transform = tstr
      ref.current.style.transform = tstr
  
      ref.current.appendChild(gauge)
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
      ref.current.appendChild(editBox)

      /*
      const myCom = new MyComponent()
      myCom.innerHTML = `
        <div slot="title1">Zero</div>
        <div slot="title2">Here</div>
      `
      myCom.onT1Click = (e) => console.log('zero 1: ', e)
      ref.current.appendChild(myCom)

      ;(window as any).t1clickhandler = (e: MouseEvent) => {
        console.log('zero 2: ', e)
      }

      const div = document.createElement('div')
      div.innerHTML = `
      <div is="my-component" ont1click="t1clickhandler">
        <div slot="title1">Zero</div>
        <div slot="title2">Here</div>
      </div>
      `
      ref.current.appendChild(div)
      */
    }
  }, [ref])

  return (
    <>
      <div ref={ref} style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'gray',
      }}></div>
    </>
  )
}
