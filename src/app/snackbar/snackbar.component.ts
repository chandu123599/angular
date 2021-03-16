import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
 @Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent   {

  constructor(private snackBar:MatSnackBar) { }

  openSnackBar(message,action){
    let snackBarRef = this.snackBar.open(message , action);
    snackBarRef.afterDismissed().subscribe(() => {
          console.log("the snackbar was dismissed");
    });

    snackBarRef.onAction().subscribe(() =>{
      console.log("the snack action was trigged");
    });
  }
 
}

 