import './components/components'
import './reset.scss'
import './widgets'
import '@material/web/button/elevated-button'

const app = document.querySelector<HTMLDivElement>('#app')!

// const zero = new MdElevatedButton()
// zero.innerHTML= `zero`
// zero.style.setProperty("--md-elevated-button-label-text-color", "red")
// zero.style.setProperty("--md-elevated-button-container-color", "yellow")
// zero.draggable = true
// zero.onclick = (e) => {
//   console.log(e);
// }


// const tabs = new MdTabs()
// tabs.ariaLabel = "Content to view"
// tabs.innerHTML = `
// <md-primary-tab id="photos-tab" aria-controls="photos-panel" inline-icon>
// <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"/></svg>
// </md-primary-tab>
// <md-primary-tab id="videos-tab" aria-controls="videos-panel">
// Videos
// </md-primary-tab>
// <md-primary-tab id="music-tab" aria-controls="music-panel">
// Music
// </md-primary-tab>
// `
// tabs.addEventListener('change', (e: any) => {
//   console.log(e.target);
//   // if (event.target.activeTabIndex === 2) {
//   //   // ... perform logic only if index of selected item is 2.
//   // }
// });

// const div = document.createElement('div')
// div.innerHTML = `
// <div id="photos-panel" role="tabpanel" aria-labelledby="photos-tab">
//   photos
// </div>
// <div id="videos-panel" role="tabpanel" aria-labelledby="videos-tab" hidden>
//   videos
// </div>
// <div id="music-panel" role="tabpanel" aria-labelledby="music-tab" hidden>
//   music
// </div>

// <div is="g-tabs" tab="1" orientation="horizontal" width="100dvw" height="45px">
//     <div is="g-tab" width="230px" height="100%">1</div>
//     <div is="g-tab" width="230px" height="100%">2</div>
//     <div is="g-tab" width="230px" height="100%">3</div>
// </div>
// `
// app.appendChild(div)
// app.appendChild(tabs)


// const container = new SvgContainer([], { x: 200, y: 200 }, 1.4)
// app.appendChild(container)

// const gauge = new Gauge('zero', 200, 200, 400, 150, 45)
// container.addWidget(gauge)

// const editBox = new EditBox(randomId(), container, gauge.width, gauge.height, gauge.x, gauge.y, gauge.rotate)
// editBox.onEdit = (e) => {
//   gauge.setAttribute('width', e.width.toString())
//   gauge.setAttribute('height', e.height.toString())
//   gauge.setAttribute('rotate', e.rotate.toString())
//   gauge.setAttribute('origin', e.originStr)
//   gauge.setAttribute('x', e.x.toString())
//   gauge.setAttribute('y', e.y.toString())
// }
// editBox.onEditStart = (t) => { console.log('start', t) }
// editBox.onEditEnd = (t) => { console.log('end', t) }

// document.addEventListener('mousemove', (e) => {
//     const m = editBox.mouseCoordInZoomAndPan(e)
//     editBox.moveListener.emitMove(m, m)
//     editBox.style.visibility = 'hidden'
// })

// container.addWidgetEditBox(gauge, editBox)

const slTest = document.createElement('div')
// slTest.innerHTML =`
// <div is='g-sidebar' tab="video">
//     <div name="video" aria-selected="false">
//         <div name="menu">
//             <svg style="width: 2rem; height: 2rem; font-weight: normal;" viewBox="0 0 24 24" data-testid="EditNoteIcon"><path d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"></path></svg>
//         </div>
//         <div name="panel">video detail</div>
//     </div>

//     <div name="photo" aria-selected="false">
//         <div name="menu">
//             <svg style="width: 1.8rem; height: 1.8rem; font-weight: normal;" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HandymanIcon"><path d="m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41z"></path><path d="m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05z"></path></svg>
//         </div>
//         <div name="panel">photo detail</div>
//     </div>
// </div>
// `

// slTest.innerHTML = `
// <div is="g-sample-list">
//     <div name="video" type="menu" is="g-sample-item">video</div>
//     <div name="photo" type="panel" is="g-sample-item">video details</div>
// </div>
// `

slTest.innerHTML = `
<div is="g-tab" anchor="right">
    <div name="video"><svg viewBox="0 0 24 24" data-testid="EditNoteIcon"><path d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"></path></svg></div>
    <div name="photo"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HandymanIcon"><path d="m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41z"></path><path d="m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05z"></path></svg></div>
</div>
`
app.appendChild(slTest)