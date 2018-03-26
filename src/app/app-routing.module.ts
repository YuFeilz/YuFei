import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
 
const childrenRoutes:Routes=[
  { path:'login',component:LoginComponent },
  { path:'mains',loadChildren: 'app/mains/mains.module#MainsModule' },
  { path:'',redirectTo:'/login',pathMatch:'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(childrenRoutes,{enableTracing: true})
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
