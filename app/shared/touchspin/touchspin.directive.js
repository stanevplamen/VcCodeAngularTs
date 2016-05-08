// https://github.com/istvan-ujjmeszaros/bootstrap-touchspin
// http://www.virtuosoft.eu/code/bootstrap-touchspin/
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
    var TouchspinDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TouchspinDirective = (function () {
                function TouchspinDirective(el) {
                    this.el = el;
                }
                TouchspinDirective.prototype.ngOnInit = function () {
                    this.options = $.extend({
                        min: 0,
                        max: 100,
                        step: 0.1,
                        decimals: 2,
                        boostat: 5,
                        maxboostedstep: 10,
                        postfix: '%'
                    }, this.options);
                    $(this.el.nativeElement).TouchSpin(this.options);
                    console.log(this.options);
                };
                __decorate([
                    core_1.Input('touchspin-widget'), 
                    __metadata('design:type', Object)
                ], TouchspinDirective.prototype, "options", void 0);
                TouchspinDirective = __decorate([
                    core_1.Directive({
                        selector: '[touchspin-widget]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], TouchspinDirective);
                return TouchspinDirective;
            }());
            exports_1("TouchspinDirective", TouchspinDirective);
        }
    }
});
//# sourceMappingURL=touchspin.directive.js.map