// https://github.com/mleibman/SlickGrid/
// https://mleibman.github.io/SlickGrid/examples/
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
    var SlickGridDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SlickGridDirective = (function () {
                function SlickGridDirective(el) {
                    this.el = el;
                }
                SlickGridDirective.prototype.ngOnInit = function () {
                    this.data.options = $.extend({
                        enableCellNavigation: true,
                        enableColumnReorder: false,
                        multiColumnSort: true
                    }, this.data.options);
                    this.grid = new Slick.Grid(this.el.nativeElement, this.data.data, this.data.columns, this.data.options);
                    this.grid.onSort.subscribe(function (e, args) {
                        var cols = args.sortCols;
                        this.data.data.sort(function (dataRow1, dataRow2) {
                            for (var i = 0, l = cols.length; i < l; i++) {
                                var field = cols[i].sortCol.field;
                                var sign = cols[i].sortAsc ? 1 : -1;
                                var value1 = dataRow1[field], value2 = dataRow2[field];
                                var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
                                if (result != 0) {
                                    return result;
                                }
                            }
                            return 0;
                        });
                        this.grid.invalidate();
                        this.grid.render();
                    }.bind(this));
                };
                __decorate([
                    core_1.Input('slickgrid-widget'), 
                    __metadata('design:type', Object)
                ], SlickGridDirective.prototype, "data", void 0);
                SlickGridDirective = __decorate([
                    core_1.Directive({
                        selector: '[slickgrid-widget]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SlickGridDirective);
                return SlickGridDirective;
            }());
            exports_1("SlickGridDirective", SlickGridDirective);
        }
    }
});
//# sourceMappingURL=slickgrid.directive.js.map