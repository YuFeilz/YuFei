import { Injectable,Type } from '@angular/core';

import { ContentSysAlertComponent } from './content-sys-alert.component';

@Injectable()
export class Item{
    constructor(public component:Type<any>,public data:any){}
}
export class ContentService {
    getAds() {
      return [
        new Item(ContentSysAlertComponent, {name: '花间一壶酒，独酌无相亲。', bio: 'A pot of wine, I drink alone.'}),
        new Item(ContentSysAlertComponent, {name: '举杯邀明月，对影成三人。', bio: 'The moon was invited to three people.'}),
        new Item(ContentSysAlertComponent,   {name: '月既不解饮，影徒随我身。', bio: 'The moon could not drink, but the shadow followed me.'}),
        new Item(ContentSysAlertComponent,   {name: '暂伴月将影，行乐须及春。', bio: 'The moon will be a temporary shadow play beard and spring.'}),
        new Item(ContentSysAlertComponent,   {name: '我歌月徘徊，我舞影零乱。', bio: 'I hear my song of wandering, messy.'}),
        new Item(ContentSysAlertComponent,   {name: '醒时相交欢，醉后各分散。', bio: 'When you wake up, you are all scattered after you get drunk.'}),
        new Item(ContentSysAlertComponent,   {name: '永结无情游，相期邈云汉。', bio: 'Always knot heartless swim, phase Miao Milky way.'}),
      ];
    }
  }