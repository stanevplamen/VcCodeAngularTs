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
    var PopoverDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PopoverDirective = (function () {
                function PopoverDirective(el) {
                    this.el = el;
                }
                PopoverDirective.prototype.ngOnInit = function () {
                    // this.el.nativeElement.style.backgroundColor = 'blue';
                    this.options = jQuery.extend({
                        trigger: 'hover'
                    }, this.options);
                    jQuery(this.el.nativeElement).popover(this.options);
                    console.log(this.options);
                };
                __decorate([
                    core_1.Input('popover-widget'), 
                    __metadata('design:type', Object)
                ], PopoverDirective.prototype, "options", void 0);
                PopoverDirective = __decorate([
                    core_1.Directive({
                        selector: '[popover-widget]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PopoverDirective);
                return PopoverDirective;
            }());
            exports_1("PopoverDirective", PopoverDirective);
        }
    }
});
//# sourceMappingURL=popover.directive.js.map