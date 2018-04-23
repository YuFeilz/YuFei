import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
 
const childrenRoutes:Routes=[
  { path:'login',loadChildren:'app/login/login.module#LoginModule' },
  {
     path:'mains',
     loadChildren: 'app/mains/mains.module#MainsModule',
     canActivate:[AuthGuard]
  },
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
  ],
  providers:[
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { } 

