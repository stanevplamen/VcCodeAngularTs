// https://github.com/eternicode/bootstrap-datepicker
// http://eternicode.github.io/bootstrap-datepicker/
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
    var DatepickerDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DatepickerDirective = (function () {
                function DatepickerDirective(el) {
                    this.el = el;
                    this.dateClicked = new core_1.EventEmitter();
                }
                DatepickerDirective.prototype.ngOnInit = function () {
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
                };
                __decorate([
                    core_1.Input('datepicker-widget'), 
                    __metadata('design:type', Object)
                ], DatepickerDirective.prototype, "options", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], DatepickerDirective.prototype, "dateClicked", void 0);
                DatepickerDirective = __decorate([
                    core_1.Directive({
                        selector: '[datepicker-widget]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DatepickerDirective);
                return DatepickerDirective;
            }());
            exports_1("DatepickerDirective", DatepickerDirective);
        }
    }
});
//# sourceMappingURL=datepicker.directive.js.map