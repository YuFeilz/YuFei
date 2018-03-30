import { Injectable,Type } from '@angular/core';

import { ContentSysAlertComponent } from './content-sys-alert.component';

@Injectable()
export class Item{
    constructor(public component:Type<any>,public data:any){}
}
export class ContentService {
    getAds() {
      return [
        new Item(ContentSysAlertComponent, {name: '惊喜在后面', bio: 'The surprise is in the back'}),
        new Item(ContentSysAlertComponent, {name: '往下看', bio: 'Look Down'}),
        new Item(ContentSysAlertComponent,   {name: '继续往下看', bio: 'Keep looking down '}),
        new Item(ContentSysAlertComponent,   {name: '就想说一句卧槽', bio: 'Just want to say a slots'}),
      ];
    }
  }