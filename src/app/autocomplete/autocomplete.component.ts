import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent   {
  options:string[]=['angular','material','vue']
  objectOptions =[
    {name:'angular'},
    {name:'angular material'},
    {name:'angular 3'},
    {name:'angular 4'},
    {name:'angular 5'},
  ];
  displayFn(subject){
    return subject ? subject.name :undefined;
  }
}
 