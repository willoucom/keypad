import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay';

import { ThemeSlideComponent } from './theme-slide/theme-slide.component';
import { KeyfullComponent } from './keyfull/keyfull.component';
import { BoardfullComponent } from './boardfull/boardfull.component';
import { KeyselectComponent } from './keyselect/keyselect.component';
import { KeyboardComponent } from './keyboard/keyboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ThemeSlideComponent,
    KeyfullComponent,
    BoardfullComponent,
    KeyselectComponent,
    KeyboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    OverlayModule,
    MatDialogModule,CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
