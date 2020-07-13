import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthenticationGuard } from "./shared/guards/authentication.guard";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    data: { breadcrumb: "Home" },
  },
  {
    path: "collection",
    loadChildren: "./collection/collection.module#CollectionModule",
    canActivate: [AuthenticationGuard],
    data: { breadcrumb: "Collection" },
  },
  {
    path: "product",
    loadChildren: "./product/product.module#ProductModule",
    canActivate: [AuthenticationGuard],
    data: { breadcrumb: "Product" },
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule",
    data: { breadcrumb: "LOGIN" },
  },
  {
    path: "cart",
    loadChildren: "./cart/cart.module#CartModule",
    canActivate: [AuthenticationGuard],
    data: { breadcrumb: "CART" },
  },
  {
    path: "checkout",
    loadChildren: "./checkout/checkout.module#CheckoutModule",
    canActivate: [AuthenticationGuard],
    data: { breadcrumb: "CHECKOUT" },
  },
  {
    path: "",
    pathMatch: "prefix",
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
