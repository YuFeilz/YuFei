import { trigger,state,style,animate,transition, animation } from '@angular/animations';

export const MainsAnimate=trigger('mains',[
    state('hides',style({
        'top':'-300%'
    })),
    state('shows',style({
        'top':'36px'
    })),
    transition('hides<=>shows',animate('.5s .5s cubic-bezier(0.2, 0.8, 0.3, 1.8)'))
])