import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { KeycodesService } from '../keycodes.service';

@Component({
  selector: 'app-keyfull',
  template: `
  <button mat-button class="key {{size}}">
    <h1>{{ label }}</h1>
    <p> {{ selected }}</p>
  </button>
  `,
  styles: [`
  .key{
    width: 100px;
    height: 100px;
    padding: 0px;
    display: inline-bloc;
    float: left;
    border: 1px solid black;
    overflow: hidden;
    word-break: break-all;
    overflow-wrap: anywhere;
    margin: 2px;
    h1 {
      margin: 0px;
      align: right;
      color: lightgray;
    }
  }
  .small {
    height: 75px;
  }
  
  button {
    padding: 5px;
    margin: 5px;
  }
  `
  ]
})
export class KeyfullComponent {
  @Input() label: string = 'default';
  @Input() selected: string = "KC.N1";
  @Input() size: string = "";
}
