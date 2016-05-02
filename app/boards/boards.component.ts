import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    templateUrl: 'app/boards/boards.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class BoardsComponent implements OnInit {
    
    static pazoStatic: string = 'boards static';


    constructor() {
        console.log(`This is ${BoardsComponent.pazoStatic}`);
    }

    toggleImage(): void {
 
    }

    ngOnInit(): void {
       
    }
}
