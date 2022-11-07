import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DefaultComponent} from "./layout/default/default.component";
import {HomeComponent} from "./page/home/home.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
