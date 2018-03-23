import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
 
const childrenRoutes:Routes=[
  { path:'login',component:LoginComponent },
  { path:'main',component:MainComponent },
  { path:'',redirectTo:'/login',pathMatch:'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(childrenRoutes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
