import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


import { LoaderComponent } from './MyComponents/loader/loader.component';

import { LoginComponent } from './MyComponents/login/login.component';
import { RxjsComponent } from './MyComponents/rxjs/rxjs.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "Rxjs",
    component:RxjsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"loader",
    component:LoaderComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
