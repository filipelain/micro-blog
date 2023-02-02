import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRootComponent} from "./app-root/app-root.component";
import {AuthorizationGuard} from "./iam/guards/authorization.guard";

const routes: Routes = [
  {
    path: '',
    component: AppRootComponent,
    canActivate: [AuthorizationGuard],
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'iam',
    loadChildren: () => import('./iam/iam.module').then(m => m.IAMModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
