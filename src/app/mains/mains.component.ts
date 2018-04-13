import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { trigger,state,style,animate,transition, animation } from '@angular/animations';
import { MenusService } from './menus.service'; 
import {MainsAnimate} from '../animate';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css'],
  animations:[MainsAnimate],
  providers:[MenusService]
})
export class MainsComponent implements OnInit {
  state='hides';
  menus;
  headerNav;
  slideShow=false;
  constructor(
    private router:Router,
    private routerfo:ActivatedRoute,
    private menusService:MenusService
  ) {
    
   }
   /**
    * @param 初始化
    */
  ngOnInit() {
    this.menus=this.menusService.menus.menuData1;
    this.headerNav=this.menusService.menus.headerNav;
  }
  /**
   * 
   * @param 点击头部导航元素菜单栏显示对应菜单
   */
  toggleMenus(nav):void{
    const id=nav.id;
    this.menus=this.menusService.menus['menuData'+id];
    for(let navItem of this.headerNav){
      navItem.isActive=false;
    }
    nav.isActive=true;
  }
  /**
   * @param 退出登录
   */
  logout():void{
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },1500)
  }
  /**
   * @param 鼠标移入用户头像显示用户信息列表
   */
  onMouseover():void{
    this.state='shows';
  }
  /**
   * @param 鼠标移出用户头像隐藏用户信息列表
   */
  onMouseout():void{
    this.state='hides';
  }
  /**
   * @param 点击用户信息列表导航到对应页面
   */
  user():void{
    this.router.navigate(['/mains/userinfo']);
  }
  /**
   * @param 点击修改密码导航到修改名密码页面
   */
  password():void{
    this.router.navigate(['/mains/password']);
  }
  /**
   * @param 左侧菜单栏缩放
   */
  menusShow(menu):void{
    for(let item of this.menus){
      if(item.id!==menu.id){
        item.isShow=true;
        item.isActive=false;
      }
    }
      if(menu.id===4){
        menu.isShow=true;
        menu.isActive=true;
      }else{
      menu.isShow=!menu.isShow;
      menu.isActive=!menu.isActive;
    }
  }
  /**
   * @param 控制左侧导航显示关闭    
   */
  slideToggle():void{
    this.slideShow=!this.slideShow;
  }
}
