import { useEffect, useRef } from "preact/hooks"
import "./widgets"
import { EditBox, Gauge } from "./widgets"

export function App() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const gauge = new Gauge('zero', 200, 200, 200, 200, 45)
      
      ref.current.appendChild(gauge)
      const editBox = new EditBox('zero')
      ref.current.appendChild(editBox)
    }
  }, [ref])

  return (
    <>
      <div ref={ref} style={{
        position: 'relative',
        width: '100dvw',
        height: '100dvh',
        backgroundColor: 'gray',
      }}></div>
    </>
  )
}
