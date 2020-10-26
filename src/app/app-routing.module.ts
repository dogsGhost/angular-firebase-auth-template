import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    ...canActivate(redirectLoggedInToHome),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
