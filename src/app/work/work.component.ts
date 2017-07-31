import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

   
 galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];



  constructor() { }

  ngOnInit() {




    this.galleryOptions = [
            {
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

        this.galleryImages = [
            {
                small: 'assets/contact.png',
                medium: 'assets/contact.png',
                big: 'assets/contact.png',
                description: 'asdasdsad'
            },
            {
                small: 'assets/colpick1.png',
                medium: 'assets/colpick1.png',
                big: 'assets/colpick1.png'
            },
            {
                small: 'assets/contact.png',
                medium: 'assets/contact.png',
                big: 'assets/contact.png'
            },
              {
                small: 'assets/contact.png',
                medium: 'assets/contact.png',
                big: 'assets/contact.png',
                description: 'asdasdsad'
            },
            {
                small: 'assets/colpick1.png',
                medium: 'assets/colpick1.png',
                big: 'assets/colpick1.png'
            },
            {
                small: 'assets/contact.png',
                medium: 'assets/contact.png',
                big: 'assets/contact.png'
            }
        ];








  }

 

}
