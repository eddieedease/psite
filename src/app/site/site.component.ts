import {
  Component,
  OnInit, ViewChild
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



import { WorkComponent } from '../work/work.component';
import {EdSerService} from '../ed-ser.service';

// Needed for Jquery
declare var $: any;

let thisComponent;


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})



export class SiteComponent implements OnInit {
  
  @ViewChild(WorkComponent) workComponent: WorkComponent;

  json;
  thisComponent = this;
  galloaded;
  workArray = [];
  public p = 1;

  // workitems
  itemsOnWork = 6;

  // boolean for showing more info
  moreInfo = false;

 

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private http_: Http, private sanitizer: DomSanitizer, private edSer: EdSerService) {
    http_.get('assets/portfolio/data.json')
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


     
        $('.parallax').parallax();
    



      $('.button-collapse').sideNav({
        menuWidth: 350, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );


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

  debugClick () {
    $('.tap-target').tapTarget('open');
  }

  
  toggleMoreInfo(){
    this.moreInfo = true;
    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
  }

  onPageChange(_event) {
    console.log(_event);
  }

  showWork(whichnum) {
    let calcprojnumber = (this.itemsOnWork * (this.p - 1)) + whichnum;
    this.edSer.serSetWorkNumber(calcprojnumber);
    this.workComponent.setUpCurrentObject();
    $('#modal1').modal('open');
  }


  imageGalUpdate(_event) {
    console.log(_event);
  }
}
