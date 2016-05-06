import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { ToastrService } from '../shared/toastr/toastr.service';
import {TooltipDirective} from '../shared/tooltip/tooltip.directive';
import {PopoverDirective} from '../shared/tooltip/popover.directive';

declare var toastr;
declare var modal;

@Component({
    templateUrl: 'app/boards/boards.component.html',
    directives: [ROUTER_DIRECTIVES, TooltipDirective, PopoverDirective]
})
export class BoardsComponent implements OnInit {
    
    static pazoStatic: string = 'boards static';
    titleForTooltip: string = 'pazos tooltips';
    titleForPopover: string = 'pazos popover on click';

    constructor(private _toastr: ToastrService) {
        console.log(`This is ${BoardsComponent.pazoStatic}`);
    }

    toggleImage(): void {
 
    }

    ngOnInit(): void {
       
    }
    
    showToastr(message: string): void {
        this._toastr.show("warning", "warning message", {"progressBar": true});
    }
}
