// https://github.com/wenzhixin/bootstrap-table
// https://github.com/wenzhixin/bootstrap-table/issues/1765

import { Directive, ElementRef, Input, OnInit } from 'angular2/core';

declare var $;

@Directive({
    selector: '[bstable-widget]'
})
export class BsTableDirective implements OnInit {
    
    @Input('bstable-widget') options: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {
     
        this.options = $.extend({
            pagination: true
        }, this.options );
        
        $(this.el.nativeElement).bootstrapTable(this.options);
    }

}