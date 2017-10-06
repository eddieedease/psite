import { Injectable } from '@angular/core';

@Injectable()
export class EdSerService {

  // keeping track of the current Work item (when opening)
  currentWork;

  constructor() {
    console.log("Serice gekoppeld");
    // initital value
    // this.currentWork = 1;
  }

}
