import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server: string = 'http://60.205.216.128:3000/';
    public apiUrl: string = '';
    public serverWithApiUrl = this.server + this.apiUrl;
}
