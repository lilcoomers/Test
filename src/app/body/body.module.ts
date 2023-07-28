import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {BodyComponent} from "./body.component";
import {ResultPageComponent} from "../result-page/result-page.component";


@NgModule({
  declarations: [
    BodyComponent,
    SearchBarComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [
    BodyComponent
  ],
  bootstrap: [BodyComponent]
})
export class BodyModule { }
