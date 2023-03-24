import {Component, Input} from '@angular/core';
import {Content} from "@angular/compiler";

@Component({
  selector: 'app-root',
  template: `
    <app-content-card></app-content-card>
  `,
})
export class ContentCardComponent {
  @Input() content: Content;

  get typeClass() {
    return `content-type-${this.content.type || 'none'}`;
  }
}
