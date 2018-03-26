// import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainsComponent } from './mains.component';

// import { Menu1Component } from '../business/menus/menu1/menu1.component';
import { Menu2Component } from '../business/menus/menu2/menu2.component';
import { Menu3Component } from '../business/menus/menu3/menu3.component';
import { Menu4Component } from '../business/menus/menu4/menu4.component';

import { MainsRoutingModule  } from './mains-routing.module';
@NgModule({
    imports:[
        CommonModule,
        MainsRoutingModule
    ],
    declarations:[
        MainsComponent,
        // Menu1Component,
        Menu2Component,
        Menu3Component,
        Menu4Component,
    ]
})
export class MainsModule{}