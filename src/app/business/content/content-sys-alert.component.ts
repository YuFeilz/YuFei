import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
    selector:'content-sys-alert',
    template:`
            <div>{{data.name}}</div>
            <div>{{data.bio}}</div>
            `,
})
export class ContentSysAlertComponent implements AdComponent{
    @Input() data:any;
    constructor(){}
}