import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeycodesService } from '../keycodes.service';

@Component({
  selector: 'app-keyselect',
  template: `
    <button mat-raised-button [ngClass]="{'mat-primary':selected==keycode}" (click)="select(keycode)">{{ label }}</button>
  `,
  styles: [`
    button {
      margin: 5px;
    }

  `
  ]
})
export class KeyselectComponent implements OnInit {
  // keycodes: Record<string, string>; 
  @Input() keycode: string = "KC.A";
  // @Input() label: string = "A";
  @Input() selected: string = "KC.A";
  @Output() selectedChange = new EventEmitter<string>();

  private keycodesArray: Record<string, string>;
  public label: string;

  constructor(private keycodes: KeycodesService) { 
    this.keycodesArray = keycodes.keycodesArray;
    this.label=this.keycodesArray[this.keycode];
  }

  ngOnInit(): void {
    this.label=this.keycodesArray[this.keycode];
  }

  select(label: string) {
    this.keycodes.selected = label;
    console.log(this.keycodes.selected);
    this.selectedChange.emit(label);
  }
}
