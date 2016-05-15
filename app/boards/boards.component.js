System.register(['angular2/core', 'angular2/router', '../shared/toastr/toastr.service', '../shared/tooltip/tooltip.directive', '../shared/tooltip/popover.directive', '../shared/typeahead/typeahead.directive', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, router_1, toastr_service_1, tooltip_directive_1, popover_directive_1, typeahead_directive_1, common_1;
    var BoardsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (toastr_service_1_1) {
                toastr_service_1 = toastr_service_1_1;
            },
            function (tooltip_directive_1_1) {
                tooltip_directive_1 = tooltip_directive_1_1;
            },
            function (popover_directive_1_1) {
                popover_directive_1 = popover_directive_1_1;
            },
            function (typeahead_directive_1_1) {
                typeahead_directive_1 = typeahead_directive_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            BoardsComponent = (function () {
                function BoardsComponent(_toastr) {
                    this._toastr = _toastr;
                    this.titleForTooltip = 'pazos tooltips';
                    this.titleForPopover = 'pazos popover on click';
                    console.log("This is " + BoardsComponent.pazoStatic);
                }
                BoardsComponent.prototype.toggleImage = function () {
                };
                BoardsComponent.prototype.ngOnInit = function () {
                    this.typeaheadSource = ["p1a", "p1a", "p1b", "p1b", "p1c", "p1c", "p1c", "p2f", "p2f", "pg", "pgh", "phh",];
                    this.username = '';
                    this.form = new common_1.ControlGroup({
                        name: new common_1.Control(this.username, common_1.Validators.required),
                        street: new common_1.Control('', common_1.Validators.minLength(3)),
                        city: new common_1.Control('', common_1.Validators.maxLength(10)),
                        zip: new common_1.Control('', common_1.Validators.pattern('[A-Za-z]{5}'))
                    });
                    // console.log('logs', this.form, this.form.controls, this.form.controls.name.valid ); 
                };
                BoardsComponent.prototype.showToastr = function (message) {
                    this._toastr.show("warning", "warning message", { "progressBar": true });
                };
                BoardsComponent.pazoStatic = 'boards static';
                BoardsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/boards/boards.component.html',
                        providers: [common_1.FORM_PROVIDERS],
                        directives: [common_1.NgClass, router_1.ROUTER_DIRECTIVES, tooltip_directive_1.TooltipDirective, popover_directive_1.PopoverDirective, typeahead_directive_1.TypeaheadDirective, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [toastr_service_1.ToastrService])
                ], BoardsComponent);
                return BoardsComponent;
            }());
            exports_1("BoardsComponent", BoardsComponent);
        }
    }
});
//# sourceMappingURL=boards.component.js.map