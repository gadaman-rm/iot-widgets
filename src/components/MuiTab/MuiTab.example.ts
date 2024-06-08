import "@material/web/tabs/tabs"
import "@material/web/tabs/primary-tab"
import "@material/web/tabs/secondary-tab"
import { MuiTab } from "./MuiTab"

document.body.innerHTML = `
<div is="g-muitab">
  <md-secondary-tab aria-label="brids" slot="tab">Birds</md-secondary-tab>
  <md-secondary-tab aria-label="cats" slot="tab" selected>Cats</md-secondary-tab>
  <md-secondary-tab aria-label="dogs" slot="tab">Dogs</md-secondary-tab>
  <div aria-label="brids" slot="panel">Brids</div>
  <div aria-label="cats" slot="panel">Cats</div>
  <div aria-label="dogs" slot="panel">Dogs</div>
</div>
`
const elem = document.querySelector<MuiTab>(`div[is="g-muitab"]`)!
elem.addEventListener("component-loaded", (e) => {
  console.log(e.detail.loaded)
})
