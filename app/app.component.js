System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './products/product-list.component', './products/product.service', './shared/toastr/toastr.service', './home/welcome.component', './products/product-detail.component', './boards/boards.component', './surfs/surfs.component', './bikes/bikes.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, product_list_component_1, product_service_1, toastr_service_1, welcome_component_1, product_detail_component_1, boards_component_1, surfs_component_1, bikes_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (toastr_service_1_1) {
                toastr_service_1 = toastr_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            },
            function (boards_component_1_1) {
                boards_component_1 = boards_component_1_1;
            },
            function (surfs_component_1_1) {
                surfs_component_1 = surfs_component_1_1;
            },
            function (bikes_component_1_1) {
                bikes_component_1 = bikes_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'ActionSports';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'action-sports-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [product_service_1.ProductService,
                            toastr_service_1.ToastrService,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/products', name: 'Products', component: product_list_component_1.ProductListComponent },
                        { path: '/boards', name: 'Boards', component: boards_component_1.BoardsComponent },
                        { path: '/surfs', name: 'Surfs', component: surfs_component_1.SurfsComponent },
                        { path: '/bikes', name: 'Bikes', component: bikes_component_1.BikesComponent },
                        { path: '/product/:id', name: 'ProductDetail', component: product_detail_component_1.ProductDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map