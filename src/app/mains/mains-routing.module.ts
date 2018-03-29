import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { MainsComponent } from './mains.component';

import { Menu2Component } from '../business/menus/menu2/menu2.component';
import { Menu3Component } from '../business/menus/menu3/menu3.component';

const mainRoutes:Routes=[
    { 
      path: '',
      component:MainsComponent,  
      children:[
        { 
          path:'',
          loadChildren:'app/business/menus/menu1/menu1.module#Menu1Module'
        },
        {
          path:'menu1',
          loadChildren:'app/business/menus/menu1/menu1.module#Menu1Module'
        },
        {
          path:'menu2',
          component:Menu2Component
        },
        {
          path:'menu3',
          component:Menu3Component
        } 
      ]
      
    }
]
@NgModule({
    imports: [
      RouterModule.forChild(mainRoutes)
    ],
    declarations: [],
    exports:[
      RouterModule
    ]
  })
  export class MainsRoutingModule { }