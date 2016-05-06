// https://github.com/twbs/bootstrap/tree/master/js

import { Directive, ElementRef, Input, OnInit } from 'angular2/core';

@Directive({
    selector: '[tooltip-widget]'
})
export class TooltipDirective implements OnInit {
    
    @Input('tooltip-widget') options: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {
        // this.el.nativeElement.style.backgroundColor = 'blue';
        
        this.options = $.extend({
            delay: 420
        }, this.options);
        
        $(this.el.nativeElement).tooltip(this.options);
        console.log(this.options);
    }

}