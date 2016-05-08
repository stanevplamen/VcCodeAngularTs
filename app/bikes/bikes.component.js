System.register(['angular2/core', 'angular2/router', '../shared/datepicker/datepicker.directive', '../shared/datetimepicker/datetimepicker.directive', '../shared/spin/spin.directive', '../shared/touchspin/touchspin.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, datepicker_directive_1, datetimepicker_directive_1, spin_directive_1, touchspin_directive_1;
    var BikesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (datepicker_directive_1_1) {
                datepicker_directive_1 = datepicker_directive_1_1;
            },
            function (datetimepicker_directive_1_1) {
                datetimepicker_directive_1 = datetimepicker_directive_1_1;
            },
            function (spin_directive_1_1) {
                spin_directive_1 = spin_directive_1_1;
            },
            function (touchspin_directive_1_1) {
                touchspin_directive_1 = touchspin_directive_1_1;
            }],
        execute: function() {
            BikesComponent = (function () {
                function BikesComponent() {
                    console.log("This is " + BikesComponent.pazoStatic);
                    this.dateValue = "3/13/1983";
                    this.datetimeValue = "";
                    this.spinTrigger = new core_1.EventEmitter();
                }
                BikesComponent.prototype.toggleImage = function () {
                };
                BikesComponent.prototype.ngOnInit = function () {
                };
                BikesComponent.prototype.triggerTheSpin = function (active) {
                    this.spinTrigger.emit(active);
                };
                BikesComponent.prototype.onDateClicked = function (dateString) {
                    console.log(dateString);
                    console.log(this.dateValue);
                };
                BikesComponent.prototype.onDatetimeClicked = function (datetimeString) {
                    console.log(datetimeString);
                    console.log(this.datetimeValue);
                };
                BikesComponent.prototype.showModal = function (message) {
                    //https://nakupanda.github.io/bootstrap3-dialog/
                    BootstrapDialog.show({
                        title: 'Default Title',
                        message: 'Click buttons below.',
                        buttons: [{
                                label: 'Title 1',
                                action: function (dialog) {
                                    dialog.setTitle('Title 1');
                                }
                            }, {
                                label: 'Title 2',
                                action: function (dialog) {
                                    dialog.setTitle('Title 2');
                                }
                            }]
                    });
                };
                BikesComponent.prototype.showModalComplex = function () {
                    BootstrapDialog.show({
                        title: 'More dialog sizes',
                        message: 'Hi Apple!',
                        buttons: [{
                                label: 'Normal',
                                action: function (dialog) {
                                    dialog.setTitle('Normal');
                                    dialog.setSize(BootstrapDialog.SIZE_NORMAL);
                                }
                            }, {
                                label: 'Small',
                                action: function (dialog) {
                                    dialog.setTitle('Small');
                                    dialog.setSize(BootstrapDialog.SIZE_SMALL);
                                }
                            }, {
                                label: 'Wide',
                                action: function (dialog) {
                                    dialog.setTitle('Wide');
                                    dialog.setSize(BootstrapDialog.SIZE_WIDE);
                                }
                            }, {
                                label: 'Large',
                                action: function (dialog) {
                                    dialog.setTitle('Large');
                                    dialog.setSize(BootstrapDialog.SIZE_LARGE);
                                }
                            }]
                    });
                };
                BikesComponent.prototype.showModalOther = function () {
                    BootstrapDialog.show({
                        message: 'I send ajax request!',
                        draggable: true,
                        buttons: [{
                                icon: 'glyphicon glyphicon-send',
                                label: 'Send ajax request',
                                cssClass: 'btn-primary',
                                autospin: true,
                                action: function (dialogRef) {
                                    dialogRef.enableButtons(false);
                                    dialogRef.setClosable(false);
                                    dialogRef.getModalBody().html('Dialog closes in 5 seconds.');
                                    setTimeout(function () {
                                        dialogRef.close();
                                    }, 5000);
                                }
                            }, {
                                label: 'Close',
                                action: function (dialogRef) {
                                    dialogRef.close();
                                }
                            }]
                    });
                };
                BikesComponent.pazoStatic = 'bikes static';
                BikesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/bikes/bikes.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, datepicker_directive_1.DatepickerDirective, datetimepicker_directive_1.DatetimepickerDirective, spin_directive_1.SpinDirective, touchspin_directive_1.TouchspinDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BikesComponent);
                return BikesComponent;
            }());
            exports_1("BikesComponent", BikesComponent);
        }
    }
});
//# sourceMappingURL=bikes.component.js.map