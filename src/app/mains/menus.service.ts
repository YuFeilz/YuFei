import { Injectable } from '@angular/core';
import { All_menus } from './menus-mock';

@Injectable()
export class Menus{
  constructor(
    public title:string,
    public icon:string,
    public state='hide',
    public url:string,
    public children:Array<Object>
  ) { }
  menuClick():void{
    this.state=this.state==='hide'?'show':'hide';
  } 
}

const all_menus=All_menus.map(value=>new Menus(value.title,value.icon,'hide',value.url,value.children))
@Injectable()
export class MenusService {
  menus=all_menus;
  constructor() { }
  
}
