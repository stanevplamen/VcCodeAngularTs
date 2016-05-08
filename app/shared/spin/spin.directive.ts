// http://fgnass.github.io/spin.js/

import { Directive, ElementRef, Input, OnInit } from 'angular2/core';

declare var Spinner;

@Directive({
    selector: '[spin-widget]'
})
export class SpinDirective implements OnInit {
    
    @Input('spin-widget') options: any;
    spinner: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {
  
        this.options = $.extend({
             lines: 13 // The number of lines to draw
            , length: 28 // The length of each line
            , width: 14 // The line thickness
            , radius: 42 // The radius of the inner circle
            , scale: 1 // Scales overall size of the spinner
            , corners: 1 // Corner roundness (0..1)
            , color: '#000' // #rgb or #rrggbb or array of colors
            , opacity: 0.25 
        }, this.options);

        this.options.spinTrigger.subscribe(active => this.onTriggerChange(active));             
    }
    onTriggerChange(active){
       
       if(active){
           this.spinner = new Spinner(this.options).spin(this.el.nativeElement);
       }
       else {
           this.spinner.stop();
       }
    }

}