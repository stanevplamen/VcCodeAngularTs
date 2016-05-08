// https://github.com/SamWM/jQuery-Plugins/tree/master/numeric

import { Directive, ElementRef, Input, OnInit } from 'angular2/core';

declare var $;

@Directive({
    selector: '[numeric-widget]'
})
export class NumericDirective implements OnInit {
    
    @Input('numeric-widget') options: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {

        this.options = jQuery.extend({ 
            decimalPlaces: 2,
            negative: true 
        }, 
        this.options);
        
        $(this.el.nativeElement).numeric(this.options);
     }
}