import {Component, Input} from "@angular/core";

@Component({
  selector: "got-character-bio",
  template: `
  <div>
    <img [src]="character?.portrait">
    <span class="summary" [innerText]="character?.bio"></span>
  </div>`
})
export class CharacterBioComponent {
  @Input() character;
}