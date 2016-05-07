// https://github.com/eternicode/bootstrap-datepicker
// http://eternicode.github.io/bootstrap-datepicker/

import { Directive, ElementRef, Input, OnInit, Output, EventEmitter  } from 'angular2/core';

declare var $;

@Directive({
    selector: '[datepicker-widget]'
})
export class DatepickerDirective implements OnInit {
    
    @Input('datepicker-widget') options: any;
    @Output() dateClicked: EventEmitter<string> = new EventEmitter<string>();
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {
         
        var $dateInput = $(this.el.nativeElement);
         
        this.options = $.extend({
            autoclose: true,
            toggleActive: true
        }, this.options);     
        
        $dateInput.datepicker(this.options);
        
        $dateInput.datepicker().on('changeDate', function (ev) {
            $dateInput.change();
            this.dateClicked.emit(ev.date.toString());
        }.bind(this));
    }

}