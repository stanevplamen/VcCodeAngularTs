import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { BoardsComponent } from './boards/boards.component';
import { SurfsComponent } from './surfs/surfs.component';
import { BikesComponent } from './bikes/bikes.component';

@Component({
    selector: 'action-sports-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/boards', name: 'Boards', component: BoardsComponent },
    { path: '/surfs', name: 'Surfs', component: SurfsComponent },
    { path: '/bikes', name: 'Bikes', component: BikesComponent },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'ActionSports';
}
