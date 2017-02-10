import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/authGuard.service';
import { AdminGuard } from './services/adminGuard.service';
// Components
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  // Root
  {
    path: '',
    redirectTo:'teachers',
    pathMatch:'full'
  },
  {
    canActivate: [AuthGuard,AdminGuard],
    component: TeachersComponent,
    path: 'teachers'
  },
  {
    canActivate: [AuthGuard],
    component: StudentsComponent,
    path: 'students'
  },
  {
    canActivate: [AuthGuard],
    component: PageNumComponent,
    path: 'page/:id'
  },
  {
    component: LoginComponent,
    path: 'login'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{useHash:true});
