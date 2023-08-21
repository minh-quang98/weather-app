import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule }    from '@angular/forms';
import { CardModule } from 'primeng/card';

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

@NgModule({
  declarations: [
    AppComponent,
    AuthenComponent,
    UserPageComponent,
    AdminPageComponent,
    HeaderComponent,
    SearchBarComponent,
    CurrentWeatherComponent,
    ExtendedForecastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AvatarModule,
    AvatarGroupModule,
    DropdownModule,
    FormsModule,
    CardModule,
    AppRoutingModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
