import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { MainsComponent } from './mains.component';

import { Menu1Component } from '../business/menus/menu1/menu1.component';
import { Menu2Component } from '../business/menus/menu2/menu2.component';
import { Menu3Component } from '../business/menus/menu3/menu3.component';
import { Menu4Component } from '../business/menus/menu4/menu4.component';

const mainRoutes:Routes=[
    { 
      path: '',
      component:MainsComponent,  
      children:[
        { 
          path:'',
          component:Menu1Component
        },
        {
          path:'menu1',
          component:Menu1Component
        },
        {
          path:'menu2',
          component:Menu2Component
        },
        {
          path:'menu3',
          component:Menu3Component
        },
        {
          path:'menu4',
          component:Menu4Component
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