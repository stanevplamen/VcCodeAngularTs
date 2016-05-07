// https://github.com/Eonasdan/bootstrap-datetimepicker
// http://eonasdan.github.io/bootstrap-datetimepicker/

import { Directive, ElementRef, Input, OnInit, Output, EventEmitter  } from 'angular2/core';

declare var $;

@Directive({
    selector: '[datetimepicker-widget]'
})
export class DatetimepickerDirective implements OnInit {
    
    @Input('datetimepicker-widget') options: any;
    @Output() datetimeClicked: EventEmitter<string> = new EventEmitter<string>();
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {
         
        var $dateInput = $(this.el.nativeElement);
         
        this.options = $.extend({
            sideBySide: true
        }, this.options);     
        
        $dateInput.datetimepicker(this.options);
        
        $dateInput.datetimepicker().on('dp.change', function (ev) {
            this.datetimeClicked.emit(ev.date.toString());
        }.bind(this));
    }

}