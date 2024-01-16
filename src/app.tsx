import { useEffect, useRef } from "preact/hooks"
import "./widgets"
import { EditBox, Slider } from "./widgets"

export function App() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const editBox = new EditBox(500, 300, 40, 50)
      const slider = new Slider(200, 100)

      ref.current.appendChild(editBox)
      ref.current.appendChild(slider)
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
