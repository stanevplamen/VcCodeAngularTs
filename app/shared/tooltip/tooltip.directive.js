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
    var TooltipDirective, HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TooltipDirective = (function () {
                function TooltipDirective(el) {
                    this.el = el;
                }
                TooltipDirective.prototype.ngOnInit = function () {
                    // this.el.nativeElement.style.backgroundColor = 'blue';
                    this.options = jQuery.extend({
                        delay: 420
                    }, this.options);
                    jQuery(this.el.nativeElement).tooltip(this.options);
                    console.log(this.options);
                };
                __decorate([
                    core_1.Input('tooltip-widget'), 
                    __metadata('design:type', Object)
                ], TooltipDirective.prototype, "options", void 0);
                TooltipDirective = __decorate([
                    core_1.Directive({
                        selector: '[tooltip-widget]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], TooltipDirective);
                return TooltipDirective;
            }());
            exports_1("TooltipDirective", TooltipDirective);
            HighlightDirective = (function () {
                function HighlightDirective(el) {
                    el.nativeElement.style.backgroundColor = 'yellow';
                }
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});
//# sourceMappingURL=tooltip.directive.js.map