import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './headermenu/header.component';
import {MenubarModule} from "primeng/menubar";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class MenuModule { }
