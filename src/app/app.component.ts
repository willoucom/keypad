import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-toolbar></app-toolbar>
  <mat-sidenav-container>
    <router-outlet></router-outlet>
  </mat-sidenav-container>

  `,
  styles: [`
    mat-sidenav-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 90%;
    }
  `]
})

export class AppComponent {
  title = 'keypad-web';
}
