import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { NavbarComponent } from './2navbar/navbar/navbar.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './Button/button/button.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialinputComponent } from './materialinput/materialinput.component';
import { MenuComponent } from './menu/menu.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { SnackbarComponent } from './snackbar/snackbar.component';



export const routes: Routes = [
    {path:'button',component:ButtonComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'menu',component:MenuComponent},
    {path:'materialinput',component:MaterialinputComponent},
    {path:'autocomplete',component:AutocompleteComponent},
    {path:'snackbar',component:SnackbarComponent},
    {path:'dialog',component:DialogComponent},
    {path:'datatable',component:DatatableComponent},
    {path:'scrolling',component:ScrollingComponent}
   
 ];
    
     
 





@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }