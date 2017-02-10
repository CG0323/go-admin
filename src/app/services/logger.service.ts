import { Injectable, Input } from '@angular/core';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';

@Injectable()
export class LoggerService {

    constructor( ) {
        // TODO
    }

    public log( component: string, msg?: string, data?: string[] ) {
        if ( !environment.silent ) {
            console.log( component + ': ' + msg );
        }
    }
}
