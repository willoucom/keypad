import { Component, HostBinding, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme-slide',
  template: `
  <mat-slide-toggle class="example-icon" (change)="onChange($event)">
    <mat-icon class="example-icon">{{ icon }}</mat-icon>
  </mat-slide-toggle>
  `,
  styles: [
  ]
})
export class ThemeSlideComponent {
  @HostBinding('class') className = '';
  public theme: string;
  public icon: string

  private static readonly THEME_LIGHT = 'light-theme';
  private static readonly THEME_DARK = 'dark-theme';
  private static readonly ICON_DARK = 'light_mode';
  private static readonly ICON_LIGHT = 'bedtime';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = this.document.documentElement.classList.contains(ThemeSlideComponent.THEME_DARK) ? ThemeSlideComponent.THEME_DARK : ThemeSlideComponent.THEME_LIGHT;
    this.icon = this.document.documentElement.classList.contains(ThemeSlideComponent.THEME_DARK) ?  ThemeSlideComponent.ICON_LIGHT : ThemeSlideComponent.ICON_DARK;
  }

  onChange($event: MatSlideToggleChange) {
    console.log($event.checked);
    if ($event.checked) {
      this.selectLightTheme();
    } else {
      this.selectDarkTheme();
    }
  }
  public selectDarkTheme(): void {
    this.document.documentElement.classList.remove(ThemeSlideComponent.THEME_LIGHT);
    this.theme = ThemeSlideComponent.THEME_DARK;
    this.icon = ThemeSlideComponent.ICON_DARK;
  }
  
  public selectLightTheme(): void {
    this.document.documentElement.classList.add(ThemeSlideComponent.THEME_LIGHT);
    this.theme = ThemeSlideComponent.THEME_LIGHT;
    this.icon = ThemeSlideComponent.ICON_LIGHT;
  }


}
