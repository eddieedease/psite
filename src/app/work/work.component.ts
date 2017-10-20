import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  Subscription
} from 'rxjs/Subscription';

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
import {
  EdSerService
} from '../ed-ser.service';


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
  galleryImages: NgxGalleryImage[] = [];
  workContentText: String = '';

  subWorkNumber;
  workNumber;

  currentWorkObject;

  constructor(private http_: Http, private sanitizer: DomSanitizer, private edSer: EdSerService) {

  }



  // gets called when initializing component
  ngOnInit() {
    // first scroll to top on init
    window.scrollTo(0, 0);

    // loading the workarray
    this.http_.get('assets/data.json')
      .map(response => response.json())
      .subscribe(
        article => {
          // GET JSON Object --> Make ARRAY
          this.json = article;
          this.workArray = $.map(this.json, function (el) {
            return el;
          });
          this.setUpCurrentObject();
          // push into array
        },
        error => console.error(error));



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
  }

  // prev or next work
  // _direction can be 'prev' or 'next' String
  cycleWork(_direction) {

    switch (_direction) {
      case 'prev':
        if (this.edSer.cur_WorkNumber === 0) {
          this.edSer.cur_WorkNumber = this.workArray.length - 1;
          console.log(this.edSer.cur_WorkNumber);
        } else {
          this.edSer.cur_WorkNumber = this.edSer.cur_WorkNumber - 1;
        }

        this.setUpCurrentObject();

        break;
      case 'next':
        if (this.edSer.cur_WorkNumber === this.workArray.length - 1) {
          this.edSer.cur_WorkNumber = 0;
        } else {
          this.edSer.cur_WorkNumber = this.edSer.cur_WorkNumber + 1;
        }

        this.setUpCurrentObject();
        break;
    }

  }

  setUpCurrentObject() {
    console.log('setting up current object');
    this.galleryImages = [];
    this.currentWorkObject = this.workArray[this.edSer.cur_WorkNumber];
    // set content text
    switch (this.edSer.cur_Language) {
      case 'nl':
        this.workContentText = this.workArray[this.edSer.cur_WorkNumber].wysignl;
        break;
      case 'en':
        this.workContentText = this.workArray[this.edSer.cur_WorkNumber].wysigen;
        break;


    }

    this.currentWorkObject.images.forEach(element => {
      let imgobj = {
        small: element,
        medium: element,
        big: element
      };
      this.galleryImages.push(imgobj);
    });
  }

  ngOnDestroy() {

  }
}
