import { Component,Input, OnInit, OnDestroy,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { Item } from './content.service';
import { ContentDirective } from './content.directive';
import { AdComponent } from './ad.component';

@Component({
    selector:'content-banner',
    template:`
            <div class="content-banner">
              <h3>月下独酌</h3>
              <ng-template content-host></ng-template>
            </div>`,
})
export class ContentBannerComponent implements OnInit,OnDestroy{
    @Input() ads:Item[];
    currentIndex:number=-1;
    @ViewChild(ContentDirective) adHost:ContentDirective;
    interval:any;
    constructor(private componentfactoryresolver:ComponentFactoryResolver){}
    ngOnInit(): void {
        this.loopComponent();
        this.getAds();
        console.log(this.ads)
    }
    ngOnDestroy(): void {
        clearInterval(this.interval);
    }
    loopComponent(){
        this.currentIndex=(this.currentIndex+1)%(this.ads.length);
        let item=this.ads[this.currentIndex];
        let componentFactory=this.componentfactoryresolver.resolveComponentFactory(item.component);
        let viewcontainerRef=this.adHost.viewContainerRef;
        viewcontainerRef.clear();
        let componentRef=viewcontainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data=item.data;
    }
    getAds(){
        this.interval=setInterval(()=>{
            this.loopComponent();
        },3000)
    }
}