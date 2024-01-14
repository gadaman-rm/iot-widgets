import { useEffect, useRef } from "preact/hooks"
import "./widgets"

export function App() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      const div = document.createElement('div')
      div.innerHTML = '<my-slider zero="zero"></my-slider>'
      ref.current.appendChild(div)
      // ref.current.appendChild(new MyComponent())
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
