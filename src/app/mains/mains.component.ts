import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { trigger,state,style,animate,transition, animation } from '@angular/animations';
import { Menus,MenusService } from './menus.service'; 
import {ListAnimate} from '../animate';

import {MainsAnimate} from '../animate';
@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css'],
  animations:[MainsAnimate,ListAnimate],
  providers:[MenusService]
})
export class MainsComponent implements OnInit {
  state='hides';
  menus:Menus[];
  constructor(
    private router:Router,
    private routerfo:ActivatedRoute,
    private menusService:MenusService
  ) {
    this.menus=menusService.menus;
   }
  ngOnInit() {
  }
  logout():void{
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },1500)
  }
  onMouseover():void{
    this.state='shows';
  }
  onMouseout():void{
    this.state='hides';
  }
  user():void{
    this.router.navigate(['/mains/menu/userinfo']);
  }
  password():void{
    this.router.navigate(['/mains/menu/password']);
  }
  menusShow():void{
    const menus=document.getElementsByClassName('left-menus');
    menus[0].classList.toggle('hide');
  }
}
