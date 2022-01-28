import { Component, SimpleChanges, OnChanges, OnInit, Input } from '@angular/core';


interface Key {
  value: string;
  label: string;
  selected: string;
}


@Component({
  selector: 'app-board',
  template: `
    <br/>
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>Name</mat-label>
      <input matInput [(ngModel)]="keys['NAME']"/>
    </mat-form-field>

    <div class="key">
      <hr/>
      <app-key label="01" [(selected)]="keys[0]"></app-key>
      <app-key label="02" [(selected)]="keys[1]"></app-key>
      <app-key label="03" [(selected)]="keys[2]"></app-key>
      <app-key label="04" [(selected)]="keys[3]"></app-key>
      <app-key label="05" [(selected)]="keys[4]"></app-key>
      <hr/>
      <app-key label="06" [(selected)]="keys[5]"></app-key>
      <app-key label="07" [(selected)]="keys[6]"></app-key>
      <app-key label="08" [(selected)]="keys[7]"></app-key>
      <app-key label="09" [(selected)]="keys[8]"></app-key>
      <app-key label="10" [(selected)]="keys[9]"></app-key>
      <hr/>
      <app-key label="11" [(selected)]="keys[10]"></app-key>
      <app-key label="12" [(selected)]="keys[11]"></app-key>
      <app-key label="13" [(selected)]="keys[12]"></app-key>
      <app-key label="14" [(selected)]="keys[13]"></app-key>
      <app-key label="15" [(selected)]="keys[14]"></app-key>
      <hr/>
      <app-key label="16" [(selected)]="keys[15]"></app-key>
      <app-key label="17" [(selected)]="keys[16]"></app-key>
      <app-key label="18" [(selected)]="keys[17]"></app-key>
      <app-key label="19" [(selected)]="keys[18]"></app-key>
      <app-key label="20" [(selected)]="keys[19]"></app-key>
    </div>
    <hr/>
    <div class="thumb">
      <table>
        <tr>
          <td></td>
          <td><app-key label="Button" [(selected)]="keys[20]"></app-key></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td><app-key label="Left" [(selected)]="keys[23]"></app-key></td>
          <td></td>
        </tr>
        <tr>
          <td><app-key label="Down" [(selected)]="keys[21]"></app-key></td>
          <td><app-key label="Clic" [(selected)]="keys[24]"></app-key></td>
          <td><app-key label="Up" [(selected)]="keys[25]"></app-key></td>
        </tr>
        <tr>
          <td></td>
          <td><app-key label="Right" [(selected)]="keys[22]"></app-key></td>
          <td></td>
        </tr>
      </table>
    </div>
    <div class="options">
      <button mat-raised-button color="primary" (click)="download()">download</button>
    </div>
    <br/>
    <mat-accordion>
      <mat-expansion-panel hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title>Code</mat-panel-title>
        </mat-expansion-panel-header>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Json</mat-label>
          <textarea matInput disabled rows="30">{{ keys | json }}</textarea>
        </mat-form-field>
      </mat-expansion-panel>
    </mat-accordion>

    `,
  styles: [`
    .options {
      display: table;
    }

    .key{
    }
    .thumb{
      table {
        align:center;
        margin-right: auto;
        margin-left: auto;
      }
    }
    hr {
      /* don't know what i am doing here */
      width:90%;
      margin-top: 0px;
      margin-bottom: 20px;
      align: center;
    }
    .example-full-width {
      width: 100%;
    }
    `
  ]
})

export class BoardComponent {
  keys = {
    "NAME": "Default",
    "0": "ONE",
    "1": "TWO",
    "2": "THREE",
    "3": "FOUR",
    "4": "FIVE",
    "5": "TAB",
    "6": "Q",
    "7": "W",
    "8": "E",
    "9": "R",
    "10": "SHIFT",
    "11": "A",
    "12": "S",
    "13": "D",
    "14": "F",
    "15": "CONTROL",
    "16": "Z",
    "17": "X",
    "18": "C",
    "19": "V",
    "20": "SHIFT",
    "21": "DOWN_ARROW",
    "22": "RIGHT_ARROW",
    "23": "LEFT_ARROW",
    "24": "ALT",
    "25": "UP_ARROW"
  }

  setkey() {
    this.keys[0] = "Q";
  }

  download() {
    let link = document.createElement('a');
    let filename = 'keyset_'+ this.keys['NAME'] +'.json';
    link.download = filename;
    let blob = new Blob([JSON.stringify(this.keys)], {type: 'text/plain'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }

}
