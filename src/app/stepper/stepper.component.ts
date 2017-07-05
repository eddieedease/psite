import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<any>$('.stepper')).activateStepper();
  }


   anyThing() {
  setTimeout(function(){ (<any>$('.stepper')).nextStep(); }, 1500);
}


}
