import { Injectable } from '@angular/core';

@Injectable()
export class Menus{
  constructor(public title:string,public state='hide',public children:Array<string>) { }
  menuClick():void{
    this.state=this.state==='hide'?'show':'hide';
  }
}

const All_menus=[
  {title:'菜单一',children:['子菜单一','子菜单二','子菜单三','子菜单四','./content']},
  {title:'菜单二',children:['子菜单一','子菜单二','子菜单三','子菜单四','./1']},
  {title:'菜单三',children:['子菜单一','子菜单二','子菜单三','子菜单四','./2']},
  {title:'菜单四',children:['子菜单一','子菜单二','子菜单三','子菜单四','./3']}
].map(value=>new Menus(value.title,'hide',value.children))
@Injectable()
export class MenusService {
  menus=All_menus;
  constructor() { }
  
}
