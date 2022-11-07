import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from "./default.component";
import {HomeComponent} from "../../page/home/home.component";
import {ProductComponent} from "../../components/product/product.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterOutlet
  ]
})
export class DefaultModule {
}
