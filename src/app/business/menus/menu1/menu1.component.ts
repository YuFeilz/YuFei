import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { trigger,state,style,animate,transition, animation } from '@angular/animations';
import { Menus,MenusService } from '../menus.service'; 
import {ListAnimate} from '../../../animate';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css'],
  animations:[ListAnimate],
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
    
  }
}
