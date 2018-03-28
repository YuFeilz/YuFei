import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
 
const childrenRoutes:Routes=[
  { path:'login',component:LoginComponent },
  { path:'mains',loadChildren: 'app/mains/mains.module#MainsModule' },
  { path:'',redirectTo:'/login',pathMatch:'full' },
  { path:'**',component:NotFoundPageComponent }
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
