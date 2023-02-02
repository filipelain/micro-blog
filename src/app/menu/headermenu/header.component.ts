import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AppState} from "../../AppState";
import {select, Store} from "@ngrx/store";
import * as ainActions from "../../iam/store/aim.actions";
import {Observable} from "rxjs";
import * as aimSelectors from "../../iam/store/aim.selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'menu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] =[];
  name$: Observable<string|undefined>;

  constructor(private readonly store:Store<AppState>,
              private readonly router: Router) {
    this.name$ = this.store.pipe(select(aimSelectors.userNameSelector))
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Feed',
        routerLink: ['/'],
      },{
      label: 'Logout',
       command: () => this.logout()
      }
    ];
  }


  logout() {
    console.log('logout')
    this.store.dispatch(ainActions.logout())
    this.router.navigate(['/iam/login'])
  }


}
