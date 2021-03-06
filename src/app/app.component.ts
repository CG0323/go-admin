import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { Message } from './models/message';
import { Account} from './models/index';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IAppState, getCurrentAccount} from './app.states';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html'
    // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private title = 'app works!';
    private toastrConfig: ToasterConfig;
    private logger: LoggerService;
    private mylinks: Array<any> = [];
    private user:string = '';
    private currentAccount: Account;
    private subscription;
    constructor(
        private store: Store<IAppState>,   
        private toastr: ToasterService) {
            
        this.toastrConfig = new ToasterConfig( {
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        this.subscription = store.let(getCurrentAccount).subscribe(account=>{
            this.currentAccount = <Account>account;
            if(!this.currentAccount){
                this.mylinks = [];
            }else if(this.currentAccount.role == "管理员"){
                this.user = this.currentAccount.name;
                this.mylinks = [
                    {
                    'title': '教师列表',
                    'icon': 'user',
                    'link': ['/teachers']
                    },
                    {
                    'title': '学员列表',
                    'icon': 'user',
                    'link': ['/students']
                    },
                 ];
            }else{
                this.user = this.currentAccount.name;
                this.mylinks = [
                    {
                    'title': '学员列表',
                    'icon': 'user',
                    'link': ['/students']
                    }
                ];
            }
        });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }

    public ngOnInit() {
        //  sedding the resize event, for AdminLTE to place the height
        let ie = this.detectIE();
        if ( !ie ) {
            window.dispatchEvent( new Event( 'resize' ) );
        } else {
            // solution for IE from @hakonamatata
            let event = document.createEvent( 'Event' );
            event.initEvent( 'resize', false, true );
            window.dispatchEvent( event );
        }

        // defining some test users


        // define here your own links menu structure
        // this.mylinks = [
        //   {
        //     'title': '教师列表',
        //     'icon': 'user',
        //     'link': ['/teachers']
        //   },
        //   {
        //     'title': '添加教师',
        //     'icon': 'user-plus',
        //     'link': ['/add-teacher']
        //   },
        //   {
        //     'title': 'Sub menu',
        //     'icon': 'link',
        //     'sublinks': [
        //       {
        //         'title': 'Page 2',
        //         'link': ['/page/2'],
        //       },
        //       {
        //         'title': 'Page 3',
        //         'link': ['/page/3'],
        //       }
        //     ]
        //   },
        //   {
        //     'title': 'External Link',
        //     'icon': 'google',
        //     'link': ['http://google.com'],
        //     'external': true,
        //     'target': '_blank'
        //   },
        //   {
        //     'title': 'External Links',
        //     'icon': 'link',
        //     'sublinks': [
        //       {
        //         'title': 'Github',
        //         'link': ['http://github.com'],
        //         'icon': 'github',
        //         'external': true,
        //         'target': '_blank'
        //       },
        //       {
        //         'title': 'Yahoo',
        //         'link': ['http://yahoo.com'],
        //         'icon': 'yahoo',
        //         'external': true,
        //         'target': '_blank'
        //       }
        //     ]
        //   }
        // ];

        // sending a test message
        // this.msgServ.addMessage( new Message( {
        //     author: user2,
        //     content: 'le contenu d\'un message d\'une importance extreme',
        //     destination: user1,
        //     title: 'un message super important'
        // }) );
    }

      ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    protected detectIE(): any {
        let ua = window.navigator.userAgent;

        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

        let msie = ua.indexOf( 'MSIE ' );
        if ( msie > 0 ) {
            // IE 10 or older => return version number
            return parseInt( ua.substring( msie + 5, ua.indexOf( '.', msie ) ), 10 );
        }

        let trident = ua.indexOf( 'Trident/' );
        if ( trident > 0 ) {
            // IE 11 => return version number
            let rv = ua.indexOf( 'rv:' );
            return parseInt( ua.substring( rv + 3, ua.indexOf( '.', rv ) ), 10 );
        }

        let edge = ua.indexOf( 'Edge/' );
        if ( edge > 0 ) {
            // Edge (IE 12+) => return version number
            return parseInt( ua.substring( edge + 5, ua.indexOf( '.', edge ) ), 10 );
        }

        // other browser
        return false;
    }

}
