import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {IamRoutingModule} from "./iam.routing.module";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from "primeng/messages";
import {StoreModule} from "@ngrx/store";
import * as fromIAM from './store';
import {EffectsModule} from "@ngrx/effects";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    StoreModule.forFeature(fromIAM.aimFeatureKey, fromIAM.aimReducers),
    EffectsModule.forFeature([fromIAM.AimEffects]),
  ],
  exports: [
    IamRoutingModule
  ]
})
export class IAMModule { }
