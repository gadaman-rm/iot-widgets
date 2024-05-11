import "./styles/reset.scss"
// import {
//   provideFASTDesignSystem,
//   fastMenu,
//   fastMenuItem,
// } from "@microsoft/fast-components"
// import "./styles/theme/light-material.scss"
import "./styles/theme/dark-material.scss"
import "./styles/adoptor/g-components.scss"
import "./components/components"
import "./widgets"
import "@material/web/ripple/ripple"
import { MenuJson } from "./components/components"
import { htmlRoot } from "./_helper"

const app = document.querySelector<HTMLDivElement>("#app")!

// provideFASTDesignSystem().register(fastMenu(), fastMenuItem())

const test = document.createElement("div")
test.innerHTML = `
<div id="menu" is="g-menu-json">
</div>
`
app.appendChild(test)

const menu = document.querySelector<MenuJson>("#menu")!
menu.items = [
  {
    type: "item",
    id: "home",
    text: "Home",
    icon: `<svg
            width="24"
            data-role="icon"
            data-group="home"
            class="menu-item-padding"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>`,
    hint: "Home",
    disable: true,
  },
  {
    type: "item",
    id: "exit",
    icon: `<svg
     data-role="icon"
     data-group="exit"
     class="menu-item-padding"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 448 512"
   >
     <path
       d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"
     />
   </svg>
`,
    text: "Exit",
    hint: "Esc",
  },
  {
    type: "divider",
  },

  {
    type: "sub-item",
    icon: `<svg
      data-role="icon"
      data-group="home"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
      />
    </svg>`,
    text: "Align",
    menuJsonItems: [
      {
        type: "item",
        id: "sub1",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/></svg>`,
        text: "sub1",
        hint: "1",
      },
      {
        type: "item",
        id: "sub2",
        text: "sub2",
        icon: `<svg
            width="24"
            data-role="icon"
            data-group="home"
            class="menu-item-padding"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>`,
        hint: "2",
      },
      {
        type: "divider",
      },

      // sub

      {
        type: "sub-item",
        icon: `<svg
      data-role="icon"
      data-group="home"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
      />
    </svg>`,
        text: "Align",
        menuJsonItems: [
          {
            type: "item",
            id: "sub3",
            icon: `<svg
     data-role="icon"
     data-group="exit"
     class="menu-item-padding"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 448 512"
   >
     <path
       d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"
     />
   </svg>
`,
            text: "sub3",
            hint: "3",
          },
          {
            type: "item",
            id: "sub4",
            text: "sub4",
            icon: `<svg
            width="24"
            data-role="icon"
            data-group="home"
            class="menu-item-padding"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>`,
            hint: "4",
          },
        ],
      },
    ],
  },
]

menu.addEventListener("menu-select", (e) => {
  console.log(e.detail.id)
})

app.appendChild(htmlRoot`
<div is="g-tab">
</div>
`)

// test.innerHTML = `
// <div id="menu" is="g-menu" open>
//   <span data-role="meta" data-group="home" data-disable></span>
//   <span data-role="text" data-group="home">Home</span>
//    <svg
//      data-role="icon"
//      data-group="home"
//      class="menu-item-padding"
//      xmlns="http://www.w3.org/2000/svg"
//      viewBox="0 0 576 512"
//    >
//      <path
//        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
//      />
//    </svg>
//   <span data-role="hint" data-group="home">Home</span>
//
//   <span data-role="meta" data-group="exit" ></span>
//   <span data-role="text" data-group="exit">Exit</span>
//    <svg
//      data-role="icon"
//      data-group="exit"
//      class="menu-item-padding"
//      xmlns="http://www.w3.org/2000/svg"
//      viewBox="0 0 448 512"
//    >
//      <path
//        d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"
//      />
//    </svg>
//   <span data-role="hint" data-group="exit">Esc</span>
//
//   <hr />
//
//   <span data-role="meta" data-group="zero" data-nested></span>
//   <span data-role="text" data-group="zero">Zero</span>
//
// </div>
// `

// app.appendChild(test)

// test.innerHTML = `
// <fast-menu>
//     <fast-menu-item>Menu item 1</fast-menu-item>
//     <fast-menu-item>Menu item 2</fast-menu-item>
//     <fast-menu-item>Menu item 3</fast-menu-item>
//     <fast-divider></fast-divider>
//     <fast-menu-item>
//         Menu item 3
//         <fast-menu>
//             <fast-menu-item>Menu item 3.1</fast-menu-item>
//             <fast-menu-item>Menu item 3.2</fast-menu-item>
//             <fast-menu-item>Menu item 3.3</fast-menu-item>
//         </fast-menu>
//     </fast-menu-item>
//     <fast-menu-item role="menuitemradio">Menu item 4</fast-menu-item>
//     <fast-menu-item role="menuitemradio">Menu item 5</fast-menu-item>
// </fast-menu>
// `

// const menu = document.querySelector<Menu>("#menu")!
//
// menu.addEventListener("menu-select", (e) => {
//   console.log(e.detail.group)
// })
