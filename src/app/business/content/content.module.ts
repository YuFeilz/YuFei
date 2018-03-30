import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';
import { ContentDirective } from './content.directive';
import { ContentRoutingModule } from './content.routing.module';
import { ContentSysAlertComponent } from './content-sys-alert.component';
import { ContentBannerComponent } from './content-banner.component';
import { AdComponent } from './ad.component';
import { ContentService } from './content.service';

@NgModule({
    imports:[
        CommonModule,
        ContentRoutingModule
    ],
    declarations:[
        ContentComponent,
        ContentDirective,
        ContentSysAlertComponent,
        ContentBannerComponent
    ],
    entryComponents:[ContentSysAlertComponent],
    providers:[ContentService]
})
export class ContentModule{
    constructor() {}
}