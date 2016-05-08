// https://github.com/istvan-ujjmeszaros/bootstrap-touchspin
// http://www.virtuosoft.eu/code/bootstrap-touchspin/

import { Directive, ElementRef, Input, OnInit } from 'angular2/core';

declare var $;

@Directive({
    selector: '[touchspin-widget]'
})
export class TouchspinDirective implements OnInit {
    
    @Input('touchspin-widget') options: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {

        this.options = $.extend({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: '%'
        }, this.options);
        
        $(this.el.nativeElement).TouchSpin(this.options);
        console.log(this.options);
    }

}