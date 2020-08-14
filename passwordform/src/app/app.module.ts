import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordformComponent } from './passwordform/passwordform.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PasswordformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
