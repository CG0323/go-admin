// angular
import { Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from "@angular/router";
import { Http,Response } from '@angular/http';

// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { Configuration } from '../app.constants';
import { USER } from '../common/category.common';
import { LoginStatus, Account} from '../models/index';

@Injectable()
export class AuthService{

  constructor(
    private http: Http,
    private router: Router,
    private config: Configuration
  ) {

  }

  authenticate(username:string, password:string):Observable<Account> {
    return this.http.post(this.config.server + 'users/login', {username:username, password:password})
    .map(res=>{ 
      let user = res.json();
      if(user.role == "学员"){
        return null;
      }else{
        return new Account(user);
      }

    })
    .catch(()=> Observable.of(null));
      // .subscribe(res=>{
      //   if(res.ok){
      //     var date = new Date ();
      //     date.setMinutes (date.getMinutes () + 1);
      //     this.cookieService.put("isLoggedIn", "true", {expires: date});
      //     return LoginStatus.LoggedIn;
      //   }else{
      //     return LoginStatus.LoggingFailed;
      //   }
      // })

  }

}
