import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination'; 
import { RouterModule, Routes } from '@angular/router';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { TerminalComponent } from './terminal/terminal.component';
import { WorkComponent } from './work/work.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StepperComponent } from './stepper/stepper.component';

const appRoutes: Routes = [
  { path: 'site', component: SiteComponent },
  { path: 'work', component: WorkComponent },
  { path: 'hmm', component: TerminalComponent},
  { path: '',
    redirectTo: '/site',
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    TerminalComponent,
    WorkComponent,
    NotfoundComponent,
    StepperComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
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
