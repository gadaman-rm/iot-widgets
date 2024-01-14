import { useEffect, useRef } from "preact/hooks"
import "./widgets"

export function App() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
//       const div = document.createElement('div')
//       div.innerHTML = `
// <div is="my-component">
//   <span slot="title1" style='color: green'>hello</span>
//   <span slot="title2">zero</span>
// </div>
// `
//       ref.current.appendChild(div)

         let slider = document.createElement('div')
         slider.innerHTML = `
         <div 
         is="my-slider"
         x="200" 
         y="200" 
         width="653" 
         height="66.68661572947046"
         scaleX="1"
         scaleY="1"
         rotate="45"
         ></div>

         <div 
         is="my-gauge"
         x="200" 
         y="200" 
         scaleX="1"
         scaleY="1"
         rotate="45"
         ></div>
         `
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
