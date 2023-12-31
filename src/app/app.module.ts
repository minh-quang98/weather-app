import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule }    from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenComponent } from './authen/authen.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './user-page/search-bar/search-bar.component';
import { StorageService } from './services/storage.service';
import { CurrentWeatherComponent } from './user-page/current-weather/current-weather.component';
import { ExtendedForecastComponent } from './user-page/extended-forecast/extended-forecast.component';

import { HttpClientModule } from '@angular/common/http';
import { AdminHeaderComponent } from './admin-page/admin-header/admin-header.component';
import { AdminBodyComponent } from './admin-page/admin-body/admin-body.component';
import { CustomRolePipe } from 'src/share/custom-role-pipe';
import { AdminCityBodyComponent } from './admin-page/admin-city-body/admin-city-body.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenComponent,
    UserPageComponent,
    AdminPageComponent,
    HeaderComponent,
    SearchBarComponent,
    CurrentWeatherComponent,
    ExtendedForecastComponent,
    AdminHeaderComponent,
    AdminBodyComponent,
    CustomRolePipe,
    AdminCityBodyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AvatarModule,
    AvatarGroupModule,
    DropdownModule,
    FormsModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ToastModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
