import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { Menu1Component } from '../business/menus/menu1/menu1.component';
import { Menu2Component } from '../business/menus/menu2/menu2.component';
import { MainComponent } from './main.component';

const mainRoutes:Routes=[
    { 
      path: '',
      component:MainComponent,
      children:[
        {
          path:'menu1',
          component:Menu1Component
        },
        {
          path:'menu2',
          component:Menu2Component
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
  export class MainRoutingModule { }