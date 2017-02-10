import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './services/guard.service';

// Components
import { TeachersComponent } from './pages/teachers/teachers.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ClientComponent } from './pages/client/client.component';

const routes: Routes = [
  // Root
  {
    path: '',
    redirectTo:'teachers',
    pathMatch:'full'
  },
  {
    component: TeachersComponent,
    path: 'teachers'
  },
  {
    canActivate: [CanActivateGuard],
    component: PageNumComponent,
    path: 'page/:id'
  },
  {
    canActivate: [CanActivateGuard],
    component: ClientComponent,
    path: 'client'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{useHash:true});
