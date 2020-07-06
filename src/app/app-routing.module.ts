import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: { breadcrumb: "Home" },
  },
  {
    path: "collection",
    loadChildren: "./collection/collection.module#CollectionModule",
    data: { breadcrumb: "Collection" },
  },
  {
    path: "product",
    loadChildren: "./product/product.module#ProductModule",
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
    data: { breadcrumb: "CART" },
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
