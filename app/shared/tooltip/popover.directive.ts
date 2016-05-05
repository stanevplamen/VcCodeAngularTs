import { Directive, ElementRef, Input, OnInit } from 'angular2/core';

@Directive({
    selector: '[popover-widget]'
})
export class PopoverDirective implements OnInit {
    
    @Input('popover-widget') options: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {

        this.options = jQuery.extend({
            trigger: 'hover'
        }, this.options);
        
        $(this.el.nativeElement).popover(this.options);
        console.log(this.options);
    }

}