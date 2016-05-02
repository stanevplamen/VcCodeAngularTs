import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    templateUrl: 'app/bikes/bikes.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class BikesComponent implements OnInit {
    
    static pazoStatic: string = 'bikes static';


    constructor() {
        console.log(`This is ${BikesComponent.pazoStatic}`);
    }

    toggleImage(): void {
 
    }

    ngOnInit(): void {
       
    }
}
