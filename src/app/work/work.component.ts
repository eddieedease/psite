import {
  Component,
  OnInit
} from '@angular/core';
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
  styleUrls: ['./work.component.css'],
  providers: [EdSerService]
})
export class WorkComponent implements OnInit {
  json;
  galloaded;
  workArray = [];
  currentWorkObject;

  public p;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];



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
        // Get the right value (var from service)
        this.currentWorkObject = this.workArray[this.edSer.currentWork];
        console.log(this.edSer.currentWork);
        console.log(this.currentWorkObject);
      },
      error => console.error(error));
  }

  ngOnInit() {
    // start empty
    this.galleryImages = [];
    // Get the right worknumber

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



}
