import { Component, SimpleChanges, OnInit, Input, Inject, OnChanges } from '@angular/core';
import { reduce } from 'rxjs';
import { KeycodesService } from '../keycodes.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  template: `
  <h1 mat-dialog-title>
    Select your key
  </h1>
  
  <mat-dialog-content>
    <app-keyselect [keycode]="'KC.NO'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.TRANSPARENT'" [(selected)]=selected></app-keyselect>
    <h2>Key</h2>
    <app-keyselect id="a" [keycode]="'KC.A'" [(selected)]=selected></app-keyselect>
    <app-keyselect id="b" [keycode]="'KC.B'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.C'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.D'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.E'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.G'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.H'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.I'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.J'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.K'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.L'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.M'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.O'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.P'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.Q'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.R'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.S'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.T'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.U'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.V'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.W'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.X'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.Y'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.Z'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N1'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N2'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N3'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N4'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N5'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N6'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N7'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N8'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N9'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.N0'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.ENTER'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.ESCAPE'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.BSPACE'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.TAB'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.SPACE'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.MINUS'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.EQUAL'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.LBRACKET'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.RBRACKET'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.BSLASH'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.SCOLON'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.QUOTE'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.GRAVE'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.COMMA'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.DOT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.SLASH'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.CAPSLOCK'" [(selected)]=selected></app-keyselect>
    <h2>Function keys</h2>
    <app-keyselect [keycode]="'KC.F1'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F2'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F3'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F4'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F5'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F6'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F7'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F8'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F9'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F10'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F11'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F12'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F13'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F14'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F15'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F16'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F17'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F18'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F19'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F20'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F21'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F22'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F23'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.F24'" [(selected)]=selected></app-keyselect>
    <h2>Navigation keys</h2>
    <app-keyselect [keycode]="'KC.PSCREEN'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.SCROLLLOCK'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.PAUSE'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.INSERT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.HOME'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.PGUP'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.DELETE'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.END'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.PGDOWN'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.RIGHT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.LEFT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.DOWN'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.UP'" [(selected)]=selected></app-keyselect>
    <h2>Numpad keys</h2>
    <app-keyselect [keycode]="'KC.NUMLOCK'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_SLASH'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_ASTERISK'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_MINUS'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_PLUS'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_ENTER'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_1'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_2'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_3'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_4'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_5'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_6'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_7'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_8'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_9'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_0'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_DOT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_EQUAL'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.LOCKING_CAPS'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.LOCKING_NUM'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.LOCKING_SCROLL'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_COMMA'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.KP_EQUAL_AS400'" [(selected)]=selected></app-keyselect>
    <h2>Modifier keys</h2>
    <app-keyselect [keycode]="'KC.LCTRL'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.LSHIFT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.LALT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.LGUI'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.RCTRL'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.RSHIFT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.RALT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.RGUI'" [(selected)]=selected></app-keyselect>
    <h2>Multimedia</h2>
    <app-keyselect [keycode]="'KC.AUDIO_MUTE'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.AUDIO_VOL_UP'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.AUDIO_VOL_DOWN'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.MEDIA_NEXT_TRACK'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.MEDIA_PREV_TRACK'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.MEDIA_STOP'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.MEDIA_PLAY_PAUSE'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.MEDIA_EJECT'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.MEDIA_FAST_FORWARD'" [(selected)]=selected></app-keyselect>
    <app-keyselect [keycode]="'KC.MEDIA_REWIND'" [(selected)]=selected></app-keyselect>
  </mat-dialog-content>
  <div mat-dialog-actions>
    <button mat-button mat-dialog-close>Close</button>
  </div>
  `,
  styles: [`
  `
  ]
})
export class KeyboardComponent implements OnInit {

  constructor(private keycodes: KeycodesService) {
    this.selected = keycodes.selected;
  }

  @Input() selected: string = "KC.A";
  @Input() keycode: string = "KC.A";

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEventDown(event: KeyboardEvent) { 
    let tp = KeycodesService.getKeyCode(event);
    if (tp !== "") {
      this.selected = tp;
      this.keycodes.selected = tp;
    }
    event.preventDefault();
    event.stopPropagation()
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEventUp(event: KeyboardEvent) { 
    let tp = KeycodesService.getKeyCode(event);
    if (tp !== "") {
      this.selected = tp;
      this.keycodes.selected = tp;
    }
    event.preventDefault();
    event.stopPropagation()
  }

  ngOnInit(): void {
    this.selected = this.keycodes.selected;
  }
}
