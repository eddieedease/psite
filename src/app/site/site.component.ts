import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http
} from '@angular/http';
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  json;

  workArray = [];

  constructor(private http_: Http) {
    http_.get('assets/data.json')
      .map(response => response.json())
      .subscribe(
        article => {
          // GET JSON Object
          this.json = article;
          console.log(this.json);
          this.workArray = $.map(this.json, function(el) { return el; });


        },
        error => console.error(error));
  }





  ngOnInit() {
    $(document).ready(function () {
      $('.button-collapse').sideNav();
      $('.scrollspy').scrollSpy();
      $('.modal').modal();
      $('.collapsible').collapsible();
      $('.slider').slider({indicators: false});
    });

  }



  showWork() {
    // open up the modal
    $('#modal1').modal('open');
  }


}
