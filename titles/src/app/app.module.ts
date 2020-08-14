import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TitlesComponent } from './titles/titles.component';
import { TitleCastingPipe } from './title-casting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitlesComponent,
    TitleCastingPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
