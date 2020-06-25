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
    path: "",
    pathMatch: "prefix",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
