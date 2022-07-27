import { Component, SimpleChanges, OnChanges, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { KeyboardComponent } from '../keyboard/keyboard.component';
import { KeycodesService } from '../keycodes.service';

interface Key {
  value: string;
  label: string;
  selected: string;
}

@Component({
  selector: 'app-boardfull',
  template: `
    <br/>
    <div class="full-width">
      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Template</mat-label>
        <mat-select (selectionChange)="select()" [(ngModel)]="template">
          <mat-option value="">None</mat-option>
          <mat-option value="keys_default">Default (QWERTY)</mat-option>
          <mat-option value="keys_azerty">Default (AZERTY)</mat-option>
          <mat-option value="keys_valorant_qwerty">Valorant (QWERTY)</mat-option>
          <mat-option value="keys_valorant_azerty">Valorant (AZERTY)</mat-option>
        </mat-select>
        <mat-hint>Selecting a model will replace your current configuration.</mat-hint>
      </mat-form-field>
    </div>
    <br/>
    <div class="board">
      <div class="key">
        <app-keyfull (click)="openDialog('0')" label="01" [selected]="keycodes.keycodesArray[keys[0]]"></app-keyfull>
        <app-keyfull (click)="openDialog('1')" label="02" [selected]="keycodes.keycodesArray[keys[1]]"></app-keyfull>
        <app-keyfull (click)="openDialog('2')" label="03" [selected]="keycodes.keycodesArray[keys[2]]"></app-keyfull>
        <app-keyfull (click)="openDialog('3')" label="04" [selected]="keycodes.keycodesArray[keys[3]]"></app-keyfull>
        <app-keyfull (click)="openDialog('4')" label="05" [selected]="keycodes.keycodesArray[keys[4]]"></app-keyfull>
        <br/>
        <app-keyfull (click)="openDialog('5')" label="06" [selected]="keycodes.keycodesArray[keys[5]]"></app-keyfull>
        <app-keyfull (click)="openDialog('6')" label="07" [selected]="keycodes.keycodesArray[keys[6]]"></app-keyfull>
        <app-keyfull (click)="openDialog('7')" label="08" [selected]="keycodes.keycodesArray[keys[7]]"></app-keyfull>
        <app-keyfull (click)="openDialog('8')" label="09" [selected]="keycodes.keycodesArray[keys[8]]"></app-keyfull>
        <app-keyfull (click)="openDialog('9')" label="10" [selected]="keycodes.keycodesArray[keys[9]]"></app-keyfull>
        <br/>
        <app-keyfull (click)="openDialog('10')" label="11" [selected]="keycodes.keycodesArray[keys[10]]"></app-keyfull>
        <app-keyfull (click)="openDialog('11')" label="12" [selected]="keycodes.keycodesArray[keys[11]]"></app-keyfull>
        <app-keyfull (click)="openDialog('12')" label="13" [selected]="keycodes.keycodesArray[keys[12]]"></app-keyfull>
        <app-keyfull (click)="openDialog('13')" label="14" [selected]="keycodes.keycodesArray[keys[13]]"></app-keyfull>
        <app-keyfull (click)="openDialog('14')" label="15" [selected]="keycodes.keycodesArray[keys[14]]"></app-keyfull>
        <br/>
        <app-keyfull (click)="openDialog('15')" label="16" [selected]="keycodes.keycodesArray[keys[15]]"></app-keyfull>
        <app-keyfull (click)="openDialog('16')" label="17" [selected]="keycodes.keycodesArray[keys[16]]"></app-keyfull>
        <app-keyfull (click)="openDialog('17')" label="18" [selected]="keycodes.keycodesArray[keys[17]]"></app-keyfull>
        <app-keyfull (click)="openDialog('18')" label="19" [selected]="keycodes.keycodesArray[keys[18]]"></app-keyfull>
        <app-keyfull (click)="openDialog('19')" label="20" [selected]="keycodes.keycodesArray[keys[19]]"></app-keyfull>
      </div>
      <div class="thumb">
        <table>
          <tr>
            <td></td>
            <td><app-keyfull (click)="openDialog('20')" label="Button" [selected]="keycodes.keycodesArray[keys[20]]" size="small"></app-keyfull></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td><app-keyfull (click)="openDialog('21')" label="Left" [selected]="keycodes.keycodesArray[keys[21]]" size="small"></app-keyfull></td>
            <td></td>
          </tr>
          <tr>
            <td><app-keyfull (click)="openDialog('22')" label="Down" [selected]="keycodes.keycodesArray[keys[22]]" size="small"></app-keyfull></td>
            <td></td>
            <td><app-keyfull (click)="openDialog('23')" label="Up" [selected]="keycodes.keycodesArray[keys[23]]" size="small"></app-keyfull></td>
          </tr>
          <tr>
            <td></td>
            <td><app-keyfull (click)="openDialog('24')" label="Right" [selected]="keycodes.keycodesArray[keys[24]]" size="small"></app-keyfull></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td><app-keyfull (click)="openDialog('25')" label="Button" [selected]="keycodes.keycodesArray[keys[25]]" size="small"></app-keyfull></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <br/>
    <div class="options">
      <button mat-raised-button color="primary" (click)="download()">download</button>&nbsp;
      <button mat-raised-button color="secondary" (click)="reset()">reset</button>
    </div>
    <br/>
    <mat-accordion>
      <mat-expansion-panel hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title>Code</mat-panel-title>
        </mat-expansion-panel-header>
        <mat-form-field class="full-width" appearance="fill">
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

    .board {
      display: table;
    }
    .key{
      float:left;
    }

    .thumb{
      float:left;
      height: 400px;
      margin: 0px;
      padding: 0px;
      table , td, th, tr {
        border: 0px;
        border-spacing: 0px;
        margin: 0px;
        padding: 0px;
      }
    }

    .full-width {
      width: 100%;
    }
    `
  ]
})

export class BoardfullComponent {
  public show: boolean = false;
  public template: string = ``;

  keys_a = {
    "0": "KC.A",
    "1": "KC.A",
    "2": "KC.A",
    "3": "KC.A",
    "4": "KC.A",
    "5": "KC.A",
    "6": "KC.A",
    "7": "KC.A",
    "8": "KC.A",
    "9": "KC.A",
    "10": "KC.A",
    "11": "KC.A",
    "12": "KC.A",
    "13": "KC.A",
    "14": "KC.A",
    "15": "KC.A",
    "16": "KC.A",
    "17": "KC.A",
    "18": "KC.A",
    "19": "KC.A",
    "20": "KC.A",
    "21": "KC.A",
    "22": "KC.A",
    "23": "KC.A",
    "24": "KC.A",
    "25": "KC.A"
  }

  keys_default = {
    "0": "KC.N1",
    "1": "KC.N2",
    "2": "KC.N3",
    "3": "KC.N4",
    "4": "KC.N5",
    "5": "KC.TAB",
    "6": "KC.Q",
    "7": "KC.W",
    "8": "KC.E",
    "9": "KC.R",
    "10": "KC.LSHIFT",
    "11": "KC.A",
    "12": "KC.S",
    "13": "KC.D",
    "14": "KC.F",
    "15": "KC.LCTRL",
    "16": "KC.Z",
    "17": "KC.X",
    "18": "KC.C",
    "19": "KC.V",
    "20": "KC.LSHIFT",
    "21": "KC.LEFT",
    "22": "KC.DOWN",
    "23": "KC.UP",
    "24": "KC.RIGHT",
    "25": "KC.SPACE"
  }

  keys_azerty = {
    "0": "KC.N1",
    "1": "KC.N2",
    "2": "KC.N3",
    "3": "KC.N4",
    "4": "KC.N5",
    "5": "KC.TAB",
    "6": "KC.A",
    "7": "KC.Z",
    "8": "KC.E",
    "9": "KC.R",
    "10": "KC.LSHIFT",
    "11": "KC.Q",
    "12": "KC.S",
    "13": "KC.D",
    "14": "KC.F",
    "15": "KC.LCTRL",
    "16": "KC.W",
    "17": "KC.X",
    "18": "KC.C",
    "19": "KC.V",
    "20": "KC.LSHIFT",
    "21": "KC.LEFT",
    "22": "KC.DOWN",
    "23": "KC.UP",
    "24": "KC.RIGHT",
    "25": "KC.SPACE"
  }

  keys_valorant_qwerty = {
    "0": "KC.N1",
    "1": "KC.N2",
    "2": "KC.N3",
    "3": "KC.N4",
    "4": "KC.N5",
    "5": "KC.TAB",
    "6": "KC.Q",
    "7": "KC.W",
    "8": "KC.E",
    "9": "KC.R",
    "10": "KC.LSHIFT",
    "11": "KC.A",
    "12": "KC.S",
    "13": "KC.D",
    "14": "KC.F",
    "15": "KC.LCTRL",
    "16": "KC.Z",
    "17": "KC.X",
    "18": "KC.C",
    "19": "KC.V",
    "20": "KC.G",
    "21": "KC.B",
    "22": "KC.T",
    "23": "KC.Z",
    "24": "KC.NO",
    "25": "KC.SPACE"
  }

  keys_valorant_azerty = {
    "0": "KC.N1",
    "1": "KC.N2",
    "2": "KC.N3",
    "3": "KC.N4",
    "4": "KC.N5",
    "5": "KC.TAB",
    "6": "KC.A",
    "7": "KC.Z",
    "8": "KC.E",
    "9": "KC.R",
    "10": "KC.LSHIFT",
    "11": "KC.Q",
    "12": "KC.S",
    "13": "KC.D",
    "14": "KC.F",
    "15": "KC.LCTRL",
    "16": "KC.W",
    "17": "KC.X",
    "18": "KC.C",
    "19": "KC.V",
    "20": "KC.G",
    "21": "KC.B",
    "22": "KC.T",
    "23": "KC.W",
    "24": "KC.NO",
    "25": "KC.SPACE"
  }

  keys: {[key:string]:string} = {
    "0": "KC.N1",
    "1": "KC.N2",
    "2": "KC.N3",
    "3": "KC.N4",
    "4": "KC.N5",
    "5": "KC.TAB",
    "6": "KC.Q",
    "7": "KC.W",
    "8": "KC.E",
    "9": "KC.R",
    "10": "KC.LSHIFT",
    "11": "KC.A",
    "12": "KC.S",
    "13": "KC.D",
    "14": "KC.F",
    "15": "KC.LCTRL",
    "16": "KC.Z",
    "17": "KC.X",
    "18": "KC.C",
    "19": "KC.V",
    "20": "KC.LSHIFT",
    "21": "KC.LEFT",
    "22": "KC.DOWN",
    "23": "KC.UP",
    "24": "KC.RIGHT",
    "25": "KC.SPACE"
  }

  constructor(public dialog: MatDialog, public keycodes: KeycodesService) { 
    this.load();
  }

  download() {
    let link = document.createElement('a');
    let filename = 'keys.json';
    link.download = filename;
    let blob = new Blob([JSON.stringify(this.keys)], {type: 'text/plain'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }

  openDialog(pos: string=""): void {
    this.keycodes.selected =  this.keys[pos.toString()];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(KeyboardComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.keys[pos.toString()] = this.keycodes.selected;
      this.save();
    });
  }

  load() {
    let keys = localStorage.getItem('Storage');
    if (keys) {
      this.keys = JSON.parse(keys);
    }
  }

  save() {
    localStorage.setItem('Storage', JSON.stringify(this.keys));
  }
  

  reset() {
    this.keys = this.keys_default;
    this.save();
  }

  select() {
    if (this.template != "") {	
      this.keys = eval("this."+this.template);
      this.save();
    }
  }


}
