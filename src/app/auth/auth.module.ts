import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { NbCardModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
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
    NbCardModule,
    NbButtonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
