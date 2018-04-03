import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainsComponent } from './mains.component';

import { Menu2Component } from '../business/menus/menu2/menu2.component';
import { Menu3Component } from '../business/menus/menu3/menu3.component';
// import {MainsAnimate} from './animate';
// import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

import { MainsRoutingModule  } from './mains-routing.module';
@NgModule({
    imports:[
        CommonModule,
        MainsRoutingModule
    ],
    declarations:[
        MainsComponent,
        // MainsAnimate,
        // NotFoundPageComponent,
        Menu2Component,
        Menu3Component,
    ]
})
export class MainsModule{}