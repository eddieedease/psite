import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  galloaded;

  constructor() { }

  ngOnInit() {
  }

  imageGalUpdate(_event) {
    console.log(_event);
  }

}
