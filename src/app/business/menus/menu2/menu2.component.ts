import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuClick(event:any):void{
    $('.menus').hide(500);
    $(event.target).next().show(500);
  }

}