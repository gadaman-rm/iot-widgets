import './components/components'
import './md-v2/md-v2'
import './reset.scss'
import './widgets'
import '@material/web/button/elevated-button'
import '@material/web/tabs/tabs'
import '@material/web/tabs/primary-tab'
import '@material/web/tabs/secondary-tab'
import '@material/web/icon/icon'

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

const TestMyComponent = document.createElement('div')
TestMyComponent.innerHTML = `
<div is="g-tabs" tab="1" orientation="horizontal" width="100dvw" height="45px">
    <div is="g-tab" width="230px" height="100%">1</div>
    <div is="g-tab" width="230px" height="100%">2</div>
    <div is="g-tab" width="230px" height="100%">3</div>
</div>
`
app.appendChild(TestMyComponent)