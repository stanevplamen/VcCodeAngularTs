import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { ToastrService } from '../shared/toastr/toastr.service';
import {TooltipDirective} from '../shared/tooltip/tooltip.directive';
import {PopoverDirective} from '../shared/tooltip/popover.directive';
import {TypeaheadDirective} from '../shared/typeahead/typeahead.directive';

@Component({
    templateUrl: 'app/boards/boards.component.html',
    directives: [ROUTER_DIRECTIVES, TooltipDirective, PopoverDirective, TypeaheadDirective]
})
export class BoardsComponent implements OnInit {
    
    static pazoStatic: string = 'boards static';
    titleForTooltip: string = 'pazos tooltips';
    titleForPopover: string = 'pazos popover on click';
    typeaheadSource: string[];

    constructor(private _toastr: ToastrService) {
        console.log(`This is ${BoardsComponent.pazoStatic}`);
        
    }

    toggleImage(): void {
 
    }

    ngOnInit(): void {
       this.typeaheadSource = ["p1a","p1a","p1b","p1b","p1c","p1c","p1c","p2f","p2f","pg","pgh","phh",];              
    }
    
    showToastr(message: string): void {
        this._toastr.show("warning", "warning message", {"progressBar": true});
    }
}
