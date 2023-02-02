import { Injectable } from '@angular/core';
import {Credentials} from "../models/Credentials";
import {delay, Observable, of, throwError} from "rxjs";
import {User} from "../models/Users";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credential:Credentials): Observable<User> {

    if(!(credential.login === 'john' && credential.password === 'doe')) {
      return throwError(()=>({message: 'Credentials are invalid'})).pipe(delay(500));
    }

    const user: User = {
      id: '1',
      name: 'John Doe',

    }


    return of(user).pipe(delay(500));
  }

}
