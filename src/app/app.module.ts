import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpModule } from '@angular/http';
import {Observable} from "rxjs";

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FilterPipe} from './search.pipe';
import { FormsModule }   from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
