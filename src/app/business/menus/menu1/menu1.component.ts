import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
  isShow:number=1
  constructor(
    private routerfo:ActivatedRoute
  ) { }
  ngOnInit() {
    this.isShow=this.routerfo.snapshot.queryParams['isShow'];
  }
  menuClick(event:any):void{
    $('.menus').hide(500);
    $('.spans').removeClass('active');
    $(event.target).addClass('active');
    if($(event.target).next().is(':hidden')){
      $(event.target).next().show(500);
    } 
  }
}
