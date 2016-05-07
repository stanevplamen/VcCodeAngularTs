// https://github.com/Eonasdan/bootstrap-datetimepicker
// http://eonasdan.github.io/bootstrap-datetimepicker/
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DatetimepickerDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DatetimepickerDirective = (function () {
                function DatetimepickerDirective(el) {
                    this.el = el;
                    this.datetimeClicked = new core_1.EventEmitter();
                }
                DatetimepickerDirective.prototype.ngOnInit = function () {
                    var $dateInput = $(this.el.nativeElement);
                    this.options = $.extend({
                        sideBySide: true
                    }, this.options);
                    $dateInput.datetimepicker(this.options);
                    $dateInput.datetimepicker().on('dp.change', function (ev) {
                        this.datetimeClicked.emit(ev.date.toString());
                    }.bind(this));
                };
                __decorate([
                    core_1.Input('datetimepicker-widget'), 
                    __metadata('design:type', Object)
                ], DatetimepickerDirective.prototype, "options", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], DatetimepickerDirective.prototype, "datetimeClicked", void 0);
                DatetimepickerDirective = __decorate([
                    core_1.Directive({
                        selector: '[datetimepicker-widget]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DatetimepickerDirective);
                return DatetimepickerDirective;
            }());
            exports_1("DatetimepickerDirective", DatetimepickerDirective);
        }
    }
});
//# sourceMappingURL=datetimepicker.directive.js.map