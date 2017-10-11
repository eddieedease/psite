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
  subjWorkNumber: Subject < any > = new Subject < any > ();

  constructor() {
    console.log('Service is linked');
  }

  serSetWorkNumber(_value) {
    this.cur_WorkNumber = _value;
    console.log('Service Var Worknumber = ' + this.cur_WorkNumber);
  }

  serGetWorkNumber() {
    console.log('Service GET number' + this.cur_WorkNumber);
    // for all the components who are subscribed to this little fellow
  this.subjWorkNumber.next(this.cur_WorkNumber);
  }

}
