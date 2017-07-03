import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination'; 
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2PaginationModule,
    Angular2ImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
