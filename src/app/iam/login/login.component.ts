import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Observable} from "rxjs";
import {AppState} from "../../AppState";
import {select, Store} from "@ngrx/store";
import {errorSelector, userSelector} from "../store/aim.selectors";
import * as aimActions from "../store/aim.actions";
import {User} from "../models/Users";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {


  @ViewChild('loginForm',{static:false}) loginForm: NgForm | undefined;

   error$: Observable<string|null>;
   user$: Observable<User|undefined>;

  constructor(
    private readonly messageService: MessageService,
    private readonly store:Store<AppState>,
    private readonly router: Router
  ) {
    this.error$ = this.store.pipe(select(errorSelector));
    this.user$ = this.store.pipe(select(userSelector));
    this.user$.subscribe((user) => user && this.redirectToHome())
  }

  private async redirectToHome() {
    await this.router.navigate(['/']);
  }
  submitLogin(values:any) {
    const {login, password} = values;
    this.messageService.clear()
    if (!login){
      this.messageService.add({severity:'warn', summary:'Attention', detail:'Login is required'});
      return;
    }
    if (!password){
      this.messageService.add({severity:'warn', summary:'Attention', detail:'Password is required'});
      return;
    }
      this.store.dispatch(aimActions.login({credential: values}));
      this.loginForm?.reset();
  }
}
