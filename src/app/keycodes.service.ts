import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeycodesService {

  constructor() { }

  public selected: string = "KC.A";

  public keycodesArray: Record<string, string> = {
    'KC.NO': 'Ignore this key (NOOP)',
    'KC.TRANSPARENT': 'Use the next lowest non-transparent key',
    'KC.A': 'A',
    'KC.B': 'B',
    'KC.C': 'C',
    'KC.D': 'D',
    'KC.E': 'E',
    'KC.F': 'F',
    'KC.G': 'G',
    'KC.H': 'H',
    'KC.I': 'I',
    'KC.J': 'J',
    'KC.K': 'K',
    'KC.L': 'L',
    'KC.M': 'M',
    'KC.N': 'N',
    'KC.O': 'O',
    'KC.P': 'P',
    'KC.Q': 'Q',
    'KC.R': 'R',
    'KC.S': 'S',
    'KC.T': 'T',
    'KC.U': 'U',
    'KC.V': 'V',
    'KC.W': 'W',
    'KC.X': 'X',
    'KC.Y': 'Y',
    'KC.Z': 'Z',
    'KC.N1': '1',
    'KC.N2': '2',
    'KC.N3': '3',
    'KC.N4': '4',
    'KC.N5': '5',
    'KC.N6': '6',
    'KC.N7': '7',
    'KC.N8': '8',
    'KC.N9': '9',
    'KC.N0': '0',
    'KC.ENTER': 'Return (Enter)',
    'KC.ESCAPE': 'Escape',
    'KC.BSPACE': 'Delete (Backspace)',
    'KC.TAB': 'Tab',
    'KC.SPACE': 'Spacebar',
    'KC.MINUS': '-',
    'KC.EQUAL': '=',
    'KC.LBRACKET': '[',
    'KC.RBRACKET': ']',
    'KC.BSLASH': '\\',
    'KC.SCOLON': ';',
    'KC.QUOTE': '\'',
    'KC.GRAVE': '`',
    'KC.COMMA': ',',
    'KC.DOT': '.',
    'KC.SLASH': '/',
    'KC.CAPSLOCK': 'Caps Lock',
    'KC.F1': 'F1',
    'KC.F2': 'F2',
    'KC.F3': 'F3',
    'KC.F4': 'F4',
    'KC.F5': 'F5',
    'KC.F6': 'F6',
    'KC.F7': 'F7',
    'KC.F8': 'F8',
    'KC.F9': 'F9',
    'KC.F10': 'F10',
    'KC.F11': 'F11',
    'KC.F12': 'F12',
    'KC.PSCREEN': 'Print Screen',
    'KC.SCROLLLOCK': 'Scroll Lock',
    'KC.PAUSE': 'Pause',
    'KC.INSERT': 'Insert',
    'KC.HOME': 'Home',
    'KC.PGUP': 'Page Up',
    'KC.DELETE': 'Forward Delete',
    'KC.END': 'End',
    'KC.PGDOWN': 'Page Down',
    'KC.RIGHT': 'Right Arrow',
    'KC.LEFT': 'Left Arrow',
    'KC.DOWN': 'Down Arrow',
    'KC.UP': 'Up Arrow',
    'KC.NUMLOCK': 'Keypad Num Lock and Clear',
    'KC.KP_SLASH': 'Keypad /',
    'KC.KP_ASTERISK': 'Keypad *',
    'KC.KP_MINUS': 'Keypad -',
    'KC.KP_PLUS': 'Keypad +',
    'KC.KP_ENTER': 'Keypad Enter',
    'KC.KP_1': 'Keypad 1 and End',
    'KC.KP_2': 'Keypad 2 and Down Arrow',
    'KC.KP_3': 'Keypad 3 and Page Down',
    'KC.KP_4': 'Keypad 4 and Left Arrow',
    'KC.KP_5': 'Keypad 5',
    'KC.KP_6': 'Keypad 6 and Right Arrow',
    'KC.KP_7': 'Keypad 7 and Home',
    'KC.KP_8': 'Keypad 8 and Up Arrow',
    'KC.KP_9': 'Keypad 9 and Page Up',
    'KC.KP_0': 'Keypad 0 and Insert',
    'KC.KP_DOT': 'Keypad . and Delete',
    'KC.KP_EQUAL': 'Keypad =',
    'KC.F13': 'F13',
    'KC.F14': 'F14',
    'KC.F15': 'F15',
    'KC.F16': 'F16',
    'KC.F17': 'F17',
    'KC.F18': 'F18',
    'KC.F19': 'F19',
    'KC.F20': 'F20',
    'KC.F21': 'F21',
    'KC.F22': 'F22',
    'KC.F23': 'F23',
    'KC.F24': 'F24',
    'KC.LOCKING_CAPS': 'Locking Caps Lock',
    'KC.LOCKING_NUM': 'Locking Num Lock',
    'KC.LOCKING_SCROLL': 'Locking Scroll Lock',
    'KC.KP_COMMA': 'Keypad ,',
    'KC.KP_EQUAL_AS400': 'Keypad = on AS/400 keyboards',
    'KC.LCTRL': 'Left Control',
    'KC.LSHIFT': 'Left Shift',
    'KC.LALT': 'Left Alt',
    'KC.LGUI': 'Left GUI (Windows/Command/Meta key)',
    'KC.RCTRL': 'Right Control',
    'KC.RSHIFT': 'Right Shift',
    'KC.RALT': 'Right Alt',
    'KC.RGUI': 'Right GUI (Windows/Command/Meta key)',
    'KC.AUDIO_MUTE': 'Mute',
    'KC.AUDIO_VOL_UP': 'Volume Up',
    'KC.AUDIO_VOL_DOWN': 'Volume Down',
    'KC.MEDIA_NEXT_TRACK': 'Next Track (Windows)',
    'KC.MEDIA_PREV_TRACK': 'Previous Track (Windows)',
    'KC.MEDIA_STOP': 'Stop Track (Windows)',
    'KC.MEDIA_PLAY_PAUSE': 'Play/Pause Track',
    'KC.MEDIA_EJECT': 'Eject (macOS)',
    'KC.MEDIA_FAST_FORWARD': 'Next Track (macOS)',
    'KC.MEDIA_REWIND': 'Previous Track (macOS)',

    'KC.TILDE': '~',
    'KC.EXCLAIM': '!',
    'KC.AT': '@',
    'KC.HASH': '#',
    'KC.DOLLAR': '$',
    'KC.PERCENT': '%',
    'KC.CIRCUMFLEX': '^',
    'KC.AMPERSAND': '&',
    'KC.ASTERISK': '*',
    'KC.LEFT_PAREN': '(',
    'KC.RIGHT_PAREN': ')',
    'KC.UNDERSCORE': '_',
    'KC.PLUS': '+',
    'KC.LEFT_CURLY_BRACE': '{',
    'KC.RIGHT_CURLY_BRACE': '}',
    'KC.PIPE': '|',
    'KC.COLON': ':',
    'KC.DOUBLE_QUOTE': '"',
    'KC.LEFT_ANGLE_BRACKET': '<',
    'KC.RIGHT_ANGLE_BRACKET': '>',
    'KC.QUESTION': '?',

  }

  public static getKeyCode(keyevent: KeyboardEvent): string {

    var code = keyevent.code;
    var key = keyevent.key;
    let ret:string = "";

    // console.log(keyevent);
    // console.log(code + " > "+  key);

    if ( key.match(/[A-z]/g) ) {
      ret = 'KC.' + key.toUpperCase();
    } else if ( key.match(/[0-9]/g)) { 
      ret = 'KC.N' + key;
    }

		if (key === "/") ret = "KC.SLASH";
    // French
    else if (key === "&" && code === "Digit1") ret = "KC.N1";
    else if (key === "é" && code === "Digit2") ret = "KC.N2";
    else if (key === "\"" && code === "Digit3") ret = "KC.N3";
    else if (key === "'" && code === "Digit4") ret = "KC.N4";
    else if (key === "(" && code === "Digit5") ret = "KC.N5";
    else if (key === "-" && code === "Digit6") ret = "KC.N6";
    else if (key === "è" && code === "Digit7") ret = "KC.N7";
    else if (key === "_" && code === "Digit8") ret = "KC.N8";
    else if (key === "ç" && code === "Digit9") ret = "KC.N9";
    else if (key === "à" && code === "Digit0") ret = "KC.N0";
    else if (key === ")" && code === "Minus") ret = "KC.MINUS";
    else if (key === "=" && code === "Equal") ret = "KC.EQUAL";

    else if ((key === "Dead" ||key === "^") && code === "BracketLeft") ret = "KC.LBRACKET";
    else if ((key === "Dead" || key === "$") && code === "BracketRight") ret = "KC.RBRACKET";
    else if (key === "*" && code === "Backslash") ret = "KC.BSLASH";
    else if (key === "ù" && code === "Quote") ret = "KC.QUOTE";
    else if (key === "," && code === "KeyM") ret = "KC.COMMA";
    else if (key === ";" && code === "Comma") ret = "KC.SCOLON";
    else if (key === ":" && code === "Period") ret = "KC.COLON";
    else if (key === "!" && code === "Slash") ret = "KC.EXCLAIM";
    // Keyboard
		else if (key === " ")  ret = "KC.SPACE";
		else if (key === ".")  ret = "KC.DOT";
		else if (key === ",")  ret = "KC.COMMA";
		else if (key === ";")  ret = "KC.SCOLON";
		else if (key === "'")  ret = "KC.QUOTE";
		else if (key === "\\") ret = "KC.BSLASH";
		else if (key === "]")  ret = "KC.RBRACKET";
		else if (key === "[")  ret = "KC.LBRACKET";
		else if (key === "=")  ret = "KC.EQUAL";
		else if (key === "-")  ret = "KC.MINUS";
		else if (key === "`")  ret = "KC.GRAVE";
    else if (code === "Backquote")  ret = "KC.GRAVE";
		else if (key === "?")  ret = "KC.SLASH";
    // Not sure here
		else if (key === ">")  ret = "KC.DOT";
		else if (key === "<")  ret = "KC.COMA";
		else if (key === "\"") ret = "KC.QUOTE";
		else if (key === ":")  ret = "KC.SCOLON";
		else if (key === "|")  ret = "KC.BSLASH";
		else if (key === "}")  ret = "KC.RBRACKET";
		else if (key === "{")  ret = "KC.LBRACKET";
		else if (key === "~")  ret = "KC.GRAVE";
		else if (key === "_")  ret = "KC.MINUS";
		else if (key === "+")  ret = "KC.EQUAL";
    // only qwerty
		else if (key === "!")  ret = "KC.N1";
		else if (key === "@")  ret = "KC.N2";
		else if (key === "#")  ret = "KC.N3";
		else if (key === "$")  ret = "KC.N4";
		else if (key === "%")  ret = "KC.N5";
		else if (key === "^")  ret = "KC.N6";
		else if (key === "&")  ret = "KC.N7";
		else if (key === "*")  ret = "KC.N8";
		else if (key === "(")  ret = "KC.N9";
		else if (key === ")")  ret = "KC.N0";
    // Modifiers
    else if (code === "ShiftLeft")  ret = "KC.LSHIFT";
    else if (code === "ShiftRight")  ret = "KC.RSHIFT";
    else if (code === "ControlLeft")  ret = "KC.LCTRL";
    else if (code === "ControlRight")  ret = "KC.RCTRL";
    else if (code === "AltLeft")  ret = "KC.LALT";
    else if (code === "AltRight")  ret = "KC.RALT";
    // Special keys
    else if (code === "Backspace")  ret = "KC.BSPACE";
    else if (code === "ContextMenu")  ret = "KC.RGUI";
    // Navigation
    else if (code === "ArrowUp")  ret = "KC.UP";
    else if (code === "ArrowDown")  ret = "KC.DOWN";
    else if (code === "ArrowLeft")  ret = "KC.LEFT";
    else if (code === "ArrowRight")  ret = "KC.RIGHT";
    else if (code === "PageUp")  ret = "KC.PGUP";
    else if (code === "PageDown")  ret = "KC.PGDOWN";


    // Deadkey
    else if (key === "Dead")  ret = "";

    // console.log("KeyCode: " + ret);

    return ret;

  }


}
