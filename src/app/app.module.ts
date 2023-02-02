import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FeedModule} from "./feed/feed.module";
import {AppRootComponent} from './app-root/app-root.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {IAMModule} from "./iam/iam.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from "primeng/toast";
import {MenuModule} from "./menu/menu.module";

@NgModule({
  declarations: [
    AppRootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FeedModule,
    IAMModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode(), autoPause: true}),
    EffectsModule.forRoot([]),
    ToastModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
