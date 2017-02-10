import {CanActivate, Router, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable,OnInit, OnDestroy} from "@angular/core";
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IAppState, getCurrentAccount} from '../app.states';
import { Account} from '../models/index';
@Injectable()
export class AdminGuard implements CanActivate, OnInit, OnDestroy{
  private isAdmin: boolean;
  private subscription;
  constructor(private store: Store<IAppState>, private router: Router){
    this.subscription = store.let(getCurrentAccount).subscribe(account=>{
      this.isAdmin = (account && (<Account>account).role === "管理员");
    })
  }

  ngOnInit():void {

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  canActivate(){
      if(this.isAdmin){
        return true;
      }else{
        this.router.navigate(['students']);
        return false;
      }
      
  }
}
