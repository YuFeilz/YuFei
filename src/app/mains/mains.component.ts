import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { trigger,state,style,animate,transition, animation } from '@angular/animations';
import {MainsAnimate} from '../animate';


@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css'],
  animations:[MainsAnimate]
})
export class MainsComponent implements OnInit {
  state='hides';
  constructor(private router:Router) { }

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
    this.router.navigate(['/mains/menu1/userinfo']);
  }
  password():void{
    this.router.navigate(['/mains/menu1/password']);
  }
  menusShow():void{
    const menus=document.getElementsByClassName('left-menus');
    menus[0].classList.toggle('hide');
  }
}
