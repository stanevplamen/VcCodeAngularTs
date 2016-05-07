// https://github.com/bassjobsen/Bootstrap-3-Typeahead

import { Directive, ElementRef, Input, OnInit } from 'angular2/core';

@Directive({
    selector: '[typeahead-widget]'
})
export class TypeaheadDirective implements OnInit {
    
    @Input('typeahead-widget') options: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {

        this.options = jQuery.extend({
                autoSelect: true,
                items: 'all'
        }, this.options);
        
        $(this.el.nativeElement).typeahead(this.options);
    }

}