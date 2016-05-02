import { Directive, ElementRef, Input } from 'angular2/core';
declare var jQuery:any;

@Directive({
    selector: '[tooltip-widget]'
})
export class TooltipDirective {
    
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'blue';
       jQuery(el.nativeElement).tooltip({title: 'test'});
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