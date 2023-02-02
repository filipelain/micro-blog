import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ViewComponent} from "./view/view.component";


const feedRoutes: Routes = [{
  path: '',
  component: ViewComponent
}];
@NgModule({
  imports: [RouterModule.forChild(feedRoutes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
