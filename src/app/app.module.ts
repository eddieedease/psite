import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination'; 
import { RouterModule, Routes } from '@angular/router';



import 'hammerjs';
import {EdSerService} from './ed-ser.service';


import { NgxGalleryModule } from 'ngx-gallery';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { WorkComponent } from './work/work.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StepperComponent } from './stepper/stepper.component';
import { BlogComponent } from './blog/blog.component';



const appRoutes: Routes = [
  { path: 'site', component: SiteComponent },
  { path: 'work', component: WorkComponent },
  { path: 'blog', component: BlogComponent },
  { path: '404', component: NotfoundComponent },
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
    WorkComponent,
    NotfoundComponent,
    StepperComponent,
    BlogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2PaginationModule,
    NgxGalleryModule
  ],
  providers: [EdSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
