// external module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';
import { StoreModule } from '@ngrx/store';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/index';
import { AppReducer } from './app.states';




let modules = [
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ToasterModule,
    StoreModule.provideStore(AppReducer),
    EffectsModule.run(UserEffects)
];

import { AppComponent } from './app.component';

import { AppHeaderComponent } from './widgets/app-header';
import { AppFooterComponent } from './widgets/app-footer';
import { MenuAsideComponent } from './widgets/menu-aside';
import { BreadcrumbComponent } from './widgets/breadcrumb';

let widgets = [
    AppComponent,
    BreadcrumbComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MenuAsideComponent
];

import { UserService } from './services/user.service';
import { AuthGuard } from './services/authGuard.service';
import { AdminGuard } from './services/adminGuard.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { LoggerService } from './services/logger.service';
import { AuthService } from './services/index';
import { Configuration} from './app.constants';
let services = [
    UserService,
    BreadcrumbService,
    AuthGuard,
    AdminGuard,
    LoggerService,
    Configuration,
    AuthService,

];

import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { PageNumComponent } from './pages/page-num/page-num.component';

let pages = [
    TeachersComponent,
    PageNumComponent,
    LoginComponent,
    StudentsComponent,
];

// main bootstrap
import { routing } from './app.routes';
import { LoginComponent } from './pages/login/login.component';

@NgModule( {
    bootstrap: [AppComponent],
    declarations: [
        ...widgets,
        ...pages,
    ],
    imports: [
        ...modules,
        routing
    ],
    providers: [
        ...services
    ]
})
export class AppModule { }
