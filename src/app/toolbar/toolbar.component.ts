import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <span>Keypad</span>
      <span class="example-spacer"></span>
      <app-theme-slide></app-theme-slide>
    </mat-toolbar-row>
  </mat-toolbar>
  `,
  styles: [`
  .example-spacer {
    flex: 1 1 auto;
  }
  `]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
