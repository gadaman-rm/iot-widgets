import { MenuJson } from "./MenuJson"
import "./MenuJson.example.scss"

document.body.innerHTML = `
<div is="g-menu-json"></div>
<div class="to"></div>
<div class="ro"></div>
<div class="bo"></div>
<div class="lo"></div>
`
const elem = document.querySelector<MenuJson>(`div[is="g-menu-json"]`)!

elem.topOffset = 50
elem.rightOffset = 100
elem.buttomOffset = 80
elem.leftOffset = 70

elem.items = [
  {
    type: "sub-item",
    text: "Align",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,0,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V17A1,1,0,0,0,21,16Zm.92-13.38a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"></path></svg>`,
    menuJsonItems: [
      {
        type: "item",
        id: "center",
        text: "Center",
        hint: "",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>`,
      },
      {
        type: "item",
        id: "v-left",
        text: "Vertical left",
        hint: "",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="horizontal-align-left"><path d="M21,10H16V7a1,1,0,0,0-1-1H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,2,0V18H21a1,1,0,0,0,1-1V11A1,1,0,0,0,21,10ZM4,8H14v2H4Zm16,8H4V12H20Z"></path></svg>`,
      },
      {
        type: "divider",
      },
      {
        type: "sub-item",
        icon: "",
        text: "Sub1",
        menuJsonItems: [
          {
            type: "item",
            id: "sub1-1",
            text: "Sub1 - 1",
            hint: "",
            icon: "",
          },
          {
            type: "item",
            id: "sub1-2",
            text: "Sub1 - 2",
            hint: "",
            icon: "",
          },
        ],
      },
    ],
  },
  {
    type: "sub-item",
    text: "Order",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="layers"><path d="M2.5,10.56l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,0-1.73l-9-5.2a1,1,0,0,0-1,0l-9,5.2a1,1,0,0,0,0,1.73ZM12,5.65l7,4-7,4.05L5,9.69Zm8.5,7.79L12,18.35,3.5,13.44a1,1,0,0,0-1.37.36,1,1,0,0,0,.37,1.37l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,.37-1.37A1,1,0,0,0,20.5,13.44Z"></path></svg>`,
    menuJsonItems: [
      {
        type: "item",
        id: "rise-top",
        text: "Rise to Top",
        hint: "",
        icon: "",
      },
      {
        type: "item",
        id: "rise",
        text: "Rise",
        hint: "",
        icon: "",
      },
      {
        type: "sub-item",
        icon: "",
        text: "Sub2",
        menuJsonItems: [
          {
            type: "item",
            id: "sub2-1",
            text: "Sub2 - 1",
            hint: "",
            icon: "",
          },
          {
            type: "item",
            id: "sub2-2",
            text: "Sub2 - 2",
            hint: "",
            icon: "",
          },
        ],
      },
    ],
  },
]

elem.addEventListener("menu-select", (e) => {
  console.log(e.detail.id)
})
