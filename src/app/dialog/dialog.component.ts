import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'; // new 
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
 

 
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent   {
  constructor(public dialog:MatDialog){}

  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }
}


