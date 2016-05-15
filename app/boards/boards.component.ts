import { Component, OnInit}  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { ToastrService } from '../shared/toastr/toastr.service';
import {TooltipDirective} from '../shared/tooltip/tooltip.directive';
import {PopoverDirective} from '../shared/tooltip/popover.directive';
import {TypeaheadDirective} from '../shared/typeahead/typeahead.directive';

import {
  FORM_DIRECTIVES,
  FORM_PROVIDERS,
  CORE_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control,
  Validators,
  NgClass
} from 'angular2/common';

@Component({
    templateUrl: 'app/boards/boards.component.html',
    providers: [FORM_PROVIDERS],
    directives: [NgClass, ROUTER_DIRECTIVES, TooltipDirective, PopoverDirective, TypeaheadDirective, FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class BoardsComponent implements OnInit {
    
    static pazoStatic: string = 'boards static';
    titleForTooltip: string = 'pazos tooltips';
    titleForPopover: string = 'pazos popover on click';
    typeaheadSource: string[];
    form: ControlGroup;
    username: string;

    constructor(private _toastr: ToastrService) {
        console.log(`This is ${BoardsComponent.pazoStatic}`);
     
    }

    toggleImage(): void {
 
    }

    ngOnInit(): void {
      this.typeaheadSource = ["p1a","p1a","p1b","p1b","p1c","p1c","p1c","p2f","p2f","pg","pgh","phh",];  
      this.username = ''; 
      this.form = new ControlGroup({
        name: new Control(this.username, Validators.required),
        street: new Control('', Validators.minLength(3)),
        city: new Control('', Validators.maxLength(10)),
        zip: new Control('', Validators.pattern('[A-Za-z]{5}'))
      });       
      
     // console.log('logs', this.form, this.form.controls, this.form.controls.name.valid ); 
    }
    
    showToastr(message: string): void {
        this._toastr.show("warning", "warning message", {"progressBar": true});
    }
}
