import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NbMenuModule,
    ThemeModule,
    NbLayoutModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
