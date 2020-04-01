import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorNotFoundComponent} from './errors/error-not-found/error-not-found.component';
import {UserService} from './core/services/user.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [UserService]},
  { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule), canActivate: [UserService]},
  { path: 'graph', loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule), canActivate: [UserService]},
  {path: '404', component: ErrorNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
