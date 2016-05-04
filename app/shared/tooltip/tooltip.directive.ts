import { Directive, ElementRef, Input, OnInit } from 'angular2/core';
declare var jQuery:any;

@Directive({
    selector: '[tooltip-widget]'
})
export class TooltipDirective implements OnInit {
    
    @Input('tooltip-widget') options: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {
        // this.el.nativeElement.style.backgroundColor = 'blue';
        
        this.options = jQuery.extend({
            delay: 420
        }, this.options);
        
        jQuery(this.el.nativeElement).tooltip(this.options);
        console.log(this.options);
    }

}


@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}