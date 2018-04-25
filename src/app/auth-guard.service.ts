import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
// ActivatedRouteSnapshot包含了即将被激活的路由， RouterStateSnapshot包含了即将到达的状态

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService,private router:Router){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    let url:string=state.url;
    return this.checkLogin(url);
  }
  checkLogin(url:string):boolean{
    if(document.cookie.split('=')[1]=='true'){
      return true;
    } 
    alert('亲，还没有登录！');
    this.authservice.redirectUrl=url;
    this.router.navigate(['./login']);
    return false
  }
}
