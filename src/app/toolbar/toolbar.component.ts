import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <a mat-button routerLink="/">
      <mat-icon aria-hidden="false">home</mat-icon>
        Keypad</a>
      <span>&nbsp;</span>
      <a routerLink="/v2" mat-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
        <mat-icon>verified</mat-icon> V2
      </a>
      <span class="example-spacer"></span>
      <a mat-button href="https://keyboardchecker.com/" target="_blank">Keyboard Checker <mat-icon>launch</mat-icon></a>
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
