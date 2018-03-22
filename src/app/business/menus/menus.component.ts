import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuClick(event:any):void{
    $(event.target).next().show(500);
  }

}
