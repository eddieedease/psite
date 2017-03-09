import {
  Component,
  OnInit
} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    $(document).ready(function () {
      $('.button-collapse').sideNav();
      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false,
        noWrap: true
      });

      // autoplay()

      // function autoplay() {
      //   $('.carousel.carousel-slider').carousel('next');
      //   setTimeout(autoplay, 7000);
      // }

      $('.scrollspy').scrollSpy();
      $('.parallax').parallax();
      $('.modal').modal();
    });
  }

  showWork() {
    // open up the modal
    $('#modal1').modal('open');
  }
}
