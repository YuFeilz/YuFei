import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { MainsComponent } from './mains.component';

const mainRoutes:Routes=[
    { 
      path: '',
      component:MainsComponent,  
      children:[
        { 
          path:'',
          loadChildren:'app/business/menus/menu/menu.module#MenuModule'
        },
        {
          path:'menu',
          loadChildren:'app/business/menus/menu/menu.module#MenuModule'
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