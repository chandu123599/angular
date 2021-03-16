import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './Button/button/button.component';
import { HeaderComponent } from './aheader/header/header.component';
import { NavbarComponent } from './2navbar/navbar/navbar.component';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { MatAutocompleteModule, MatBadgeModule, 
  MatBottomSheetModule, MatCheckboxModule, 
  MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule, 
  MatGridListModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, 
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
  MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, 
  MatStepperModule, MatTableModule, MatTabsModule, 
  MatTooltipModule, MatTreeModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { MaterialinputComponent } from './materialinput/materialinput.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
 


 

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    NavbarComponent,
    MenuComponent,
    MaterialinputComponent,
    AutocompleteComponent,
    SnackbarComponent,
    DialogComponent,
    DialogExampleComponent,
    DatatableComponent,
    ScrollingComponent
  ],

entryComponents:[DialogExampleComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    ScrollingModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
    AppRoutingModule
     
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
