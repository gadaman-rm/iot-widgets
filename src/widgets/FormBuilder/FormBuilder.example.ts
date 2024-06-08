import { FormBuilder } from "./FormBuilder"
import "@material/web/textfield/filled-text-field"
import "@material/web/textfield/outlined-text-field"

import "@material/web/tabs/tabs"
import "@material/web/tabs/primary-tab"
import "@material/web/tabs/secondary-tab"

import "@material/web/select/outlined-select"
import "@material/web/select/filled-select"
import "@material/web/select/select-option"

import "@material/web/checkbox/checkbox"

import "@material/web/radio/radio"

import "@material/web/button/outlined-button"
import "@material/web/button/filled-button"
import "@material/web/button/filled-tonal-button"
import "@material/web/button/elevated-button"

import { randomId } from "../../math/helper"

document.body.innerHTML = `
<div is="g-svg-container" hide>
   <div is="g-form-builder"></div>
</div>
`
const elem = document.querySelector<FormBuilder>(`div[is="g-form-builder"]`)!
elem.addEventListener("widget-loaded", (e) => {
  console.log(e.detail.loaded)
})

elem.open = true

elem.items = [
  {
    type: "meta",
    title: "Test",
    shape: `<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path fill="blue" d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"
      ></path>
    </svg>`,
    footer: [
      { type: "button", id: randomId(), label: "Ok" },
      { type: "button", id: randomId(), label: "Cancel", marginInline: "10px" },
    ],
  },
  {
    type: "tabs",
    id: randomId(),
    panelHeight: "400px",
    options: [
      {
        id: randomId(),
        vlaue: "Personal Info",
        key: "personal-info",
        panel: [
          {
            type: "textfeild",
            label: "Name",
            id: randomId(),
            value: "zero",
          },
          {
            type: "textfeild",
            label: "age",
            htmlType: "number",
            step: 2,
            id: randomId(),
            value: "30",
          },
          {
            type: "radiobox",
            id: randomId(),
            label: "Gender",
            options: [
              { id: randomId(), group: "gender", vlaue: "male" },
              { id: randomId(), group: "gender", vlaue: "female" },
            ],
          },
        ],
      },
      {
        id: randomId(),
        vlaue: "Favouriteis",
        selected: true,
        key: "favouriteis",
        panel: [
          {
            type: "select",
            id: randomId(),
            label: "Your favourite fruit?",
            required: true,
            options: [
              { display: "apple", vlaue: "apple", selected: true },
              { display: "pineapple", vlaue: "pineapple" },
            ],
          },
          {
            type: "checkbox",
            label: "Hobbeis",
            id: randomId(),
            options: [
              { id: randomId(), vlaue: "Sleeping", checked: true },
              { id: randomId(), vlaue: "Video Game" },
              { id: randomId(), vlaue: "Foosball" },
              { id: randomId(), vlaue: "Anime" },
            ],
          },
        ],
      },
      {
        id: randomId(),
        vlaue: "Test Scroll",
        key: "test-scroll",
        panel: [
          {
            type: "checkbox",
            label: "Test",
            id: randomId(),
            options: [
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
              { id: randomId(), vlaue: "checked", checked: true },
              { id: randomId(), vlaue: "not checked", checked: false },
            ],
          },
        ],
      },
    ],
  },
]
