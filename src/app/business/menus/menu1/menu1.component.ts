import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { trigger,state,style,animate,transition, animation } from '@angular/animations';
import { Menus,MenusService } from '../menus.service'; 

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css'],
  animations:[
    trigger('listState',[
      state('hide',style({
        display:'none'
      })),
      state('show',style({
        display:'block'
      })),
      transition('hide <=> show',animate('0.2s .2s ease-in-out'))
    ])
  ],
  providers:[MenusService]
})
export class Menu1Component implements OnInit {
  menus:Menus[];
  constructor(
    private routerfo:ActivatedRoute,
    private menusService:MenusService
  ) {
    this.menus=menusService.menus;
   }
  ngOnInit() {
    console.log(this.menus)
  }
}
