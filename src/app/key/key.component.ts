import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Key {
  keycode: string;
  label: string;
}

@Component({
  selector: 'app-key',
  template: `
    <div class="key">
      <mat-form-field appearance="fill">
        <mat-label>{{ label }}</mat-label>
        <mat-select [(ngModel)]="selected" (ngModelChange)="show()">
          <mat-option *ngFor="let key of keys" [value]="key.keycode">
            {{key.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styles: [`
    .key{
      width: 200px;
      height: 50px;
      padding: 10px;
      display: inline;
    }
  `
  ]
})
export class KeyComponent implements OnInit {
  @Input() label: string = 'default';
  @Input() selected: string = "Q";
  @Output() selectedChange = new EventEmitter<string>();


  keys: Key[] = [
    { keycode: 'A', label: 'A' },
    { keycode: 'B', label: 'B' },
    { keycode: 'C', label: 'C' },
    { keycode: 'D', label: 'D' },
    { keycode: 'E', label: 'E' },
    { keycode: 'F', label: 'F' },
    { keycode: 'G', label: 'G' },
    { keycode: 'H', label: 'H' },
    { keycode: 'I', label: 'I' },
    { keycode: 'J', label: 'J' },
    { keycode: 'K', label: 'K' },
    { keycode: 'L', label: 'L' },
    { keycode: 'M', label: 'M' },
    { keycode: 'N', label: 'N' },
    { keycode: 'O', label: 'O' },
    { keycode: 'P', label: 'P' },
    { keycode: 'Q', label: 'Q' },
    { keycode: 'R', label: 'R' },
    { keycode: 'S', label: 'S' },
    { keycode: 'T', label: 'T' },
    { keycode: 'U', label: 'U' },
    { keycode: 'V', label: 'V' },
    { keycode: 'W', label: 'W' },
    { keycode: 'X', label: 'X' },
    { keycode: 'Y', label: 'Y' },
    { keycode: 'Z', label: 'Z' },
    { keycode: 'ONE', label: '1' },
    { keycode: 'TWO', label: '2' },
    { keycode: 'THREE', label: '3' },
    { keycode: 'FOUR', label: '4' },
    { keycode: 'FIVE', label: '5' },
    { keycode: 'SIX', label: '6' },
    { keycode: 'SEVEN', label: '7' },
    { keycode: 'EIGHT', label: '8' },
    { keycode: 'NINE', label: '9' },
    { keycode: 'ZERO', label: '0' },
    { keycode: 'ENTER', label: 'Enter' },
    { keycode: 'RETURN', label: 'Return' },
    { keycode: 'ESCAPE', label: 'Escape' },
    { keycode: 'BACKSPACE', label: 'Backspace' },
    { keycode: 'TAB', label: 'Tab' },
    { keycode: 'SPACEBAR', label: 'Spacebar' },
    { keycode: 'SPACE', label: 'Space' },
    { keycode: 'MINUS', label: 'Minus (-)' },
    { keycode: 'EQUALS', label: 'Equals (=)' },
    { keycode: 'LEFT_BRACKET', label: 'Left Bracket ([)' },
    { keycode: 'RIGHT_BRACKET', label: 'Right Bracket (])' },
    { keycode: 'BACKSLASH', label: 'Back Slash (\\)' },
    { keycode: 'POUND', label: 'Pound (#)' },
    { keycode: 'SEMICOLON', label: 'Semicolon (;)' },
    { keycode: 'QUOTE', label: 'Quote (\')' },
    { keycode: 'GRAVE_ACCENT', label: 'Grave Accent (`)' },
    { keycode: 'COMMA', label: 'Comma (,)' },
    { keycode: 'PERIOD', label: 'Period (.)' },
    { keycode: 'FORWARD_SLASH', label: 'Forward Slash (/)' },
    { keycode: 'CAPS_LOCK', label: 'Caps Lock' },
    { keycode: 'F1', label: 'F1' },
    { keycode: 'F2', label: 'F2' },
    { keycode: 'F3', label: 'F3' },
    { keycode: 'F4', label: 'F4' },
    { keycode: 'F5', label: 'F5' },
    { keycode: 'F6', label: 'F6' },
    { keycode: 'F7', label: 'F7' },
    { keycode: 'F8', label: 'F8' },
    { keycode: 'F9', label: 'F9' },
    { keycode: 'F10', label: 'F10' },
    { keycode: 'F11', label: 'F11' },
    { keycode: 'F12', label: 'F12' },
    { keycode: 'PRINT_SCREEN', label: 'Print screen' },
    { keycode: 'SCROLL_LOCK', label: 'Scroll Lock' },
    { keycode: 'PAUSE', label: 'Pause' },
    { keycode: 'INSERT', label: 'Insert' },
    { keycode: 'HOME', label: 'Home' },
    { keycode: 'PAGE_UP', label: 'Page UP' },
    { keycode: 'DELETE', label: 'Delete' },
    { keycode: 'END', label: 'End' },
    { keycode: 'PAGE_DOWN', label: 'Page Down' },
    { keycode: 'RIGHT_ARROW', label: 'Right Arrow' },
    { keycode: 'LEFT_ARROW', label: 'Left Arrow' },
    { keycode: 'DOWN_ARROW', label: 'Down Arrow' },
    { keycode: 'UP_ARROW', label: 'Up Arrow' },
    { keycode: 'KEYPAD_NUMLOCK', label: 'Keypad Numlock' },
    { keycode: 'KEYPAD_FORWARD_SLASH', label: 'Keypad Forward Slash' },
    { keycode: 'KEYPAD_ASTERISK', label: 'Keypad Asterisk' },
    { keycode: 'KEYPAD_MINUS', label: 'Keypad Minus' },
    { keycode: 'KEYPAD_PLUS', label: 'Keypad Plus' },
    { keycode: 'KEYPAD_ENTER', label: 'Keypad Enter' },
    { keycode: 'KEYPAD_ONE', label: 'Keypad 1' },
    { keycode: 'KEYPAD_TWO', label: 'Keypad 2' },
    { keycode: 'KEYPAD_THREE', label: 'Keypad 3' },
    { keycode: 'KEYPAD_FOUR', label: 'Keypad 4' },
    { keycode: 'KEYPAD_FIVE', label: 'Keypad 5' },
    { keycode: 'KEYPAD_SIX', label: 'Keypad 6' },
    { keycode: 'KEYPAD_SEVEN', label: 'Keypad 7' },
    { keycode: 'KEYPAD_EIGHT', label: 'Keypad 8' },
    { keycode: 'KEYPAD_NINE', label: 'Keypad 9' },
    { keycode: 'KEYPAD_ZERO', label: 'Keypad 0' },
    { keycode: 'KEYPAD_PERIOD', label: 'Keypad Period' },
    { keycode: 'KEYPAD_BACKSLASH', label: 'Keypad Back Slash' },
    { keycode: 'APPLICATION', label: 'Application' },
    { keycode: 'POWER', label: 'Power' },
    { keycode: 'KEYPAD_EQUALS', label: 'Keypad Equals' },
    { keycode: 'F13', label: 'F13' },
    { keycode: 'F14', label: 'F14' },
    { keycode: 'F15', label: 'F15' },
    { keycode: 'F16', label: 'F16' },
    { keycode: 'F17', label: 'F17' },
    { keycode: 'F18', label: 'F18' },
    { keycode: 'F19', label: 'F19' },
    { keycode: 'F20', label: 'F20' },
    { keycode: 'F21', label: 'F21' },
    { keycode: 'F22', label: 'F22' },
    { keycode: 'F23', label: 'F23' },
    { keycode: 'F24', label: 'F24' },
    { keycode: 'LEFT_CONTROL', label: 'Left Control' },
    { keycode: 'CONTROL', label: 'Control' },
    { keycode: 'LEFT_SHIFT', label: 'Left Shift' },
    { keycode: 'SHIFT', label: 'Shift' },
    { keycode: 'LEFT_ALT', label: 'Left Alt' },
    { keycode: 'ALT', label: 'Alt' },
    { keycode: 'OPTION', label: 'Option' },
    { keycode: 'LEFT_GUI', label: 'Left GUI' },
    { keycode: 'GUI', label: 'GUI' },
    { keycode: 'WINDOWS', label: 'Windows' },
    { keycode: 'COMMAND', label: 'Command' },
    { keycode: 'RIGHT_CONTROL', label: 'Right Control' },
    { keycode: 'RIGHT_SHIFT', label: 'Right Shift' },
    { keycode: 'RIGHT_ALT', label: 'Right Alt' },
    { keycode: 'RIGHT_GUI', label: 'Right GUI' },
  ];

  show() {
    this.selectedChange.emit(this.selected);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
