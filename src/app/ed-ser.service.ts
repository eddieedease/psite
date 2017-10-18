import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  Subject
} from 'rxjs/Subject';


@Injectable()
export class EdSerService {

  cur_WorkNumber = '';

  constructor() {
    console.log('Service is linked');
  }

  serSetWorkNumber(_value) {
    this.cur_WorkNumber = _value;
  }

 

}
