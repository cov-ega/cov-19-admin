import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {ErrorNotFoundComponent} from './errors/error-not-found/error-not-found.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {MaterialModule} from './shared/material-module/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LottieAnimationViewModule} from 'ng-lottie';

@NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      NavbarComponent,
      ErrorNotFoundComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      CoreModule,
      CommonModule,
      BrowserAnimationsModule,
      SharedModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      LottieAnimationViewModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
