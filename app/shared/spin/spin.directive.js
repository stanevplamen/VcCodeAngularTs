// http://fgnass.github.io/spin.js/
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
    var SpinDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SpinDirective = (function () {
                function SpinDirective(el) {
                    this.el = el;
                }
                SpinDirective.prototype.ngOnInit = function () {
                    var _this = this;
                    this.options = $.extend({
                        lines: 13 // The number of lines to draw
                        ,
                        length: 28 // The length of each line
                        ,
                        width: 14 // The line thickness
                        ,
                        radius: 42 // The radius of the inner circle
                        ,
                        scale: 1 // Scales overall size of the spinner
                        ,
                        corners: 1 // Corner roundness (0..1)
                        ,
                        color: '#000' // #rgb or #rrggbb or array of colors
                        ,
                        opacity: 0.25
                    }, this.options);
                    this.options.spinTrigger.subscribe(function (active) { return _this.onTriggerChange(active); });
                };
                SpinDirective.prototype.onTriggerChange = function (active) {
                    if (active) {
                        this.spinner = new Spinner(this.options).spin(this.el.nativeElement);
                    }
                    else {
                        this.spinner.stop();
                    }
                };
                __decorate([
                    core_1.Input('spin-widget'), 
                    __metadata('design:type', Object)
                ], SpinDirective.prototype, "options", void 0);
                SpinDirective = __decorate([
                    core_1.Directive({
                        selector: '[spin-widget]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SpinDirective);
                return SpinDirective;
            }());
            exports_1("SpinDirective", SpinDirective);
        }
    }
});
//# sourceMappingURL=spin.directive.js.map