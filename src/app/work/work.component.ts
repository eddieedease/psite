import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';
import {
  DomSanitizer
} from '@angular/platform-browser';
import {
  Http
} from '@angular/http';
import 'rxjs/add/operator/map';
// Needed for Jquery
// declare var $: any;
import {EdSerService} from '../ed-ser.service';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, OnDestroy {
  json;
  galloaded;
  workArray = [];

  

  public p;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  subWorkNumber;
  workNumber;
  

  
  



  constructor(http_: Http, private sanitizer: DomSanitizer, private edSer: EdSerService) {
    // loading the workarray
    http_.get('assets/data.json')
    .map(response => response.json())
    .subscribe(
      article => {
        // GET JSON Object --> Make ARRAY
        this.json = article;
        console.log(this.json);
        this.workArray = $.map(this.json, function (el) {
          return el;
        });
      },
      error => console.error(error));
  }

    

  // gets called when initializing component
  ngOnInit() {

    this.edSer.serGetWorkNumber();

    console.log('this is triggered when');
    console.log(this.edSer);
    
    this.subWorkNumber = this.edSer.subjWorkNumber.subscribe((value) => {
      console.log("Deez trigger niet");
      this.workNumber = value;
      console.log(value);
    });

    

    // trigger

    

    this.galleryImages = [];
    this.galleryOptions = [{
        width: '600px',
        height: '400px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Rotate,
        thumbnails: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        previewDescription: true
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [{
        small: 'assets/contact.png',
        medium: 'assets/contact.png',
        big: 'assets/contact.png',
        description: 'asdasdsad'
      },
      {
        small: 'assets/colpick1.png',
        medium: 'assets/colpick1.png',
        big: 'assets/colpick1.png'
      }
    ];
  }

  ngOnDestroy() {

  }
}
