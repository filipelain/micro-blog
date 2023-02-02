import {Component} from '@angular/core';
import {MessageService} from "primeng/api";
import {select, Store} from "@ngrx/store";
import {AppState} from "../AppState";
import * as aimSelectors from "../iam/store/aim.selectors";
import {Observable} from "rxjs";
import {User} from "../iam/models/Users";

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss'],
  providers: [MessageService],
})
export class AppRootComponent {

  loginError$: Observable<string | null>;
  loginSuccess$: Observable<User | undefined>;

  constructor(private messageService: MessageService, private readonly store: Store<AppState>) {
    this.loginError$ = this.store.pipe(select(aimSelectors.errorSelector))
    this.loginSuccess$ = this.store.pipe(select(aimSelectors.userSelector))
    this.loginError$.subscribe((error) => error && this.showErrorMessage(error));
    this.loginSuccess$.subscribe((user) => user && this.showSuccessMessage(user));
  }

  private showErrorMessage(message: string) {
    this.messageService.add({severity: 'error', summary: 'Cannot login ', detail: message});
  }

  private showSuccessMessage(user: User) {
    this.messageService.add({severity: 'success', summary: 'Login success ', detail: `Welcome ${user.name}`});
  }

}
