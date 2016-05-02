import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    templateUrl: 'app/surfs/surfs.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class SurfsComponent implements OnInit {
    
    static pazoStatic: string = 'surfs static';


    constructor() {
        console.log(`This is ${SurfsComponent.pazoStatic}`);
    }

    toggleImage(): void {
 
    }

    ngOnInit(): void {
       
    }
}
