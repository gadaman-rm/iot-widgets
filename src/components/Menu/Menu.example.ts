import { Menu } from "./Menu"

document.body.innerHTML = `
<div is="g-menu" open x="20" y="30">
  <span data-role="meta" data-group="home" data-disable="true" data-nested="false"></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-role="icon" data-group="home"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
  <span data-role="text" data-group="home">Home</span>
  <span data-role="hint" data-group="home">Home</span>

  <span data-role="meta" data-group="align" data-disable="false"></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-role="icon" data-group="align"><path d="M0 64C0 46.3 14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64zM192 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zm32 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM127.8 268.6L25.8 347.9C15.3 356.1 0 348.6 0 335.3V176.7c0-13.3 15.3-20.8 25.8-12.6l101.9 79.3c8.2 6.4 8.2 18.9 0 25.3z"/></svg>
  <span data-role="text" data-group="align">Align</span>

  <hr />

  <span data-role="meta" data-group="exit" data-disable="false" data-nested="false"></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-role="icon" data-group="exit"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
  <span data-role="text" data-group="exit">Exit</span>
  <span data-role="hint" data-group="exit">Esc</span>
</div>
`
const elem = document.querySelector<Menu>(`div[is="g-menu"]`)!

elem.addEventListener("menu-select", (e) => {
  console.log(e.detail.group)
})
