import {
  Component,
  OnInit,
} from '@angular/core';

import {
  DomSanitizer
} from '@angular/platform-browser';

import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Http
} from '@angular/http';
import 'rxjs/add/operator/map';

import {EdSerService} from '../ed-ser.service';

// Needed for Jquery
// declare var $: any;

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
  providers: [EdSerService]
})

export class SiteComponent implements OnInit {
  
  json;
  galloaded;
  workArray = [];
  

  public p;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private http_: Http, private sanitizer: DomSanitizer, private edSer: EdSerService) {
    http_.get('assets/data.json')
      .map(response => response.json())
      .subscribe(
        article => {
          // GET JSON Object --> change to array
          this.json = article;
          
          console.log(this.json);
          this.workArray = $.map(this.json, function (el) {
            return el;
          });
        },
        error => console.error(error));
  }


  ngOnInit() {

    

    $(document).ready(function () {
      $('.button-collapse').sideNav();
      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 200
      });
      $('.scrollspy').scrollSpy();
      $('.modal').modal({
        startingTop: '80%',
        endingTop: '2%',
      });
      $('.collapsible').collapsible();
      $('.slider').slider({
        indicators: false,
        height: 300
      });
      this.galloaded = true;
    });

  
  }

  //taptarget test
  debugClick () {
    $('.tap-target').tapTarget('open');
  }



  showWork(_workNumber) {
    this.edSer.currentWork = _workNumber;
    console.log('workitem =  ' + _workNumber);
    // open up the modal
    this.router.navigate(['/work']);

 
  }

  imageGalUpdate(_event) {
    console.log(_event);
  }

  

}
