import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http
} from '@angular/http';
import 'rxjs/add/operator/map';

// Needed for Jquery
declare var $: any;

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  
  json;
  galloaded;
  workArray = [];
  public p;

  constructor(http_: Http) {
    http_.get('assets/data.json')
      .map(response => response.json())
      .subscribe(
        article => {
          // GET JSON Object
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



  showWork() {
    // open up the modal
    $('#modal1').modal('open');
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      duration: 200
    });

    //setInterval(function () {
    //  $('.carousel').carousel('next');
    //}, 5000); // every 2 seconds
  }

  imageGalUpdate(_event) {
    console.log(_event);
  }

  

}
