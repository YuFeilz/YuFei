import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuClick(event:any):void{
    $('.menus').hide(500);
    $(event.target).next().show(500);
  }

}
