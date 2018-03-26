import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { Menu1Component } from './menu1.component';
import { ContentComponent } from '../../content/content.component';
const Menu1Routes:Routes=[
    {
        path:'',
        component:Menu1Component,
        children:[
            {
                path:'',
                component:ContentComponent
            }
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(Menu1Routes)
    ],
    declarations:[],
    exports:[
        RouterModule
    ]
})
export class Menu1RoutingModule{

}