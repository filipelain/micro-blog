import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {ViewComponent} from './view/view.component';
import {ListComponent} from './list/list.component';
import {FeedRoutingModule} from "./feed.routing.module";
import * as fromFeed from './store';
import {PostComponent} from "./post/post.component";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {AvatarModule} from "primeng/avatar";
import {CardModule} from "primeng/card";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "../menu/menu.module";

@NgModule({
  declarations: [
    ViewComponent,
    ListComponent,
    PostComponent
  ],
  imports: [
    FeedRoutingModule,
    CommonModule,
    StoreModule
      .forFeature(fromFeed.feedFeatureKey, fromFeed.feedReducers),
    EffectsModule.forFeature([fromFeed.FeedEffects]),
    FormsModule,
    ProgressSpinnerModule,
    AvatarModule,
    CardModule,
    InputTextareaModule,
    ButtonModule,
    MenuModule
  ],
  exports: [
    FeedRoutingModule
  ]
})
export class FeedModule {
}
