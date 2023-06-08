import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
