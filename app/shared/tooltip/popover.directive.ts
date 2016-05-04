import { Directive, ElementRef, Input, OnInit } from 'angular2/core';
declare var jQuery:any;

@Directive({
    selector: '[popover-widget]'
})
export class PopoverDirective implements OnInit {
    
    @Input('popover-widget') options: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {
        // this.el.nativeElement.style.backgroundColor = 'blue';
        
        this.options = jQuery.extend({
            trigger: 'hover'
        }, this.options);
        
        jQuery(this.el.nativeElement).popover(this.options);
        console.log(this.options);
    }

}