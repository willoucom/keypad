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
          <td><app-keyfull (click)="openDialog('20')" label="Button" [selected]="keycodes.keycodesArray[keys[20]]"></app-keyfull></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td><app-keyfull (click)="openDialog('23')" label="Left" [selected]="keycodes.keycodesArray[keys[23]]"></app-keyfull></td>
          <td></td>
        </tr>
        <tr>
          <td><app-keyfull (click)="openDialog('21')" label="Down" [selected]="keycodes.keycodesArray[keys[21]]"></app-keyfull></td>
          <td><app-keyfull (click)="openDialog('24')" label="Clic" [selected]="keycodes.keycodesArray[keys[24]]"></app-keyfull></td>
          <td><app-keyfull (click)="openDialog('25')" label="Up" [selected]="keycodes.keycodesArray[keys[25]]"></app-keyfull></td>
        </tr>
        <tr>
          <td></td>
          <td><app-keyfull (click)="openDialog('22')" label="Right" [selected]="keycodes.keycodesArray[keys[22]]"></app-keyfull></td>
          <td></td>
        </tr>
      </table>
    </div>
    </div>
    <br/>
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

    .board {
      display: table;
    }
    .key{
      float:left;
    }

    .thumb{
      float:left;
      margin: 0px;
      padding: 0px;
      table , td, th, tr {
        border: 0px;
        border-spacing: 0px;
        margin: 0px;
        padding: 0px;
      }
    }

    .example-full-width {
      width: 100%;
    }
    `
  ]
})

export class BoardfullComponent {
  public show: boolean = false;

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
    "21": "KC.DOWN",
    "22": "KC.RIGHT",
    "23": "KC.LEFT",
    "24": "KC.LALT",
    "25": "KC.UP"
  }

  constructor(public dialog: MatDialog, public keycodes: KeycodesService) { }

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
    });
  }
    
}
