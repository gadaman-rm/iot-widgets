import { useEffect, useRef } from "preact/hooks"
import { Gauge } from "./widgets"

export function App() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.appendChild(new Gauge())
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
