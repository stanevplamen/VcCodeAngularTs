System.register(['angular2/core', 'angular2/router', '../shared/slickgrid/slickgrid.directive', '../shared/bstable/bstable.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, slickgrid_directive_1, bstable_directive_1;
    var SurfsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (slickgrid_directive_1_1) {
                slickgrid_directive_1 = slickgrid_directive_1_1;
            },
            function (bstable_directive_1_1) {
                bstable_directive_1 = bstable_directive_1_1;
            }],
        execute: function() {
            SurfsComponent = (function () {
                function SurfsComponent() {
                    console.log("This is " + SurfsComponent.pazoStatic);
                }
                SurfsComponent.prototype.toggleImage = function () {
                };
                SurfsComponent.prototype.ngOnInit = function () {
                    // start loading of slick grid and bstable props
                    this.columns = [
                        { id: "title", name: "Title", field: "title", sortable: true },
                        { id: "duration", name: "Duration", field: "duration", sortable: true, formatter: dayFormatter },
                        { id: "%", name: "% Complete", field: "percentComplete", sortable: true },
                        { id: "start", name: "Start", field: "start", formatter: dateFormatter, sortable: true },
                        { id: "finish", name: "Finish", field: "finish", formatter: dateFormatter, sortable: true },
                        { id: "effort-driven", name: "Effort Driven", field: "effortDriven", sortable: true }
                    ];
                    function dayFormatter(row, cell, value, columnDef, dataContext) {
                        return value + ' days';
                    }
                    function dateFormatter(row, cell, value, columnDef, dataContext) {
                        if (typeof value === 'object') {
                            return value.getMonth() + '/' + value.getDate() + '/' + value.getFullYear();
                        }
                        return row.getMonth() + '/' + row.getDate() + '/' + row.getFullYear();
                    }
                    var MS_PER_DAY = 24 * 60 * 60 * 1000;
                    this.tableData = [];
                    for (var i = 0; i < 500; i++) {
                        var startDate = new Date(new Date("1/1/1980").getTime() + Math.round(Math.random() * 365 * 25) * MS_PER_DAY);
                        var endDate = new Date(startDate.getTime() + Math.round(Math.random() * 365) * MS_PER_DAY);
                        this.tableData[i] = {
                            title: "Task " + i,
                            duration: Math.round(Math.random() * 30) + 2,
                            percentComplete: Math.round(Math.random() * 100),
                            start: startDate,
                            finish: endDate,
                            effortDriven: (i % 5 == 0)
                        };
                    }
                    // end loading of slick grid and bstable props
                };
                SurfsComponent.pazoStatic = 'surfs static';
                SurfsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/surfs/surfs.component.html',
                        // styleUrls: ['app/surfs/slickgrid.example.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, slickgrid_directive_1.SlickGridDirective, bstable_directive_1.BsTableDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SurfsComponent);
                return SurfsComponent;
            }());
            exports_1("SurfsComponent", SurfsComponent);
        }
    }
});
//# sourceMappingURL=surfs.component.js.map