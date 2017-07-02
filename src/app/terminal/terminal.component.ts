import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  text: any;
  selff;

  timer;

  constructor() {}

  ngOnInit() {
    this.text = $('.test').data('text');
    this.selff = this;

    //this.typeWriter(this.text, 0);
    this.typeWriter(this.text, 0);
  }



  typeWriter(_text, n) {
    if (n < (_text.length)) {
      $('.test').html(_text.substring(0, n + 1));
      n++;

      this.timer = setTimeout(() => this.selff.typeWriter(_text, n), 200);
    } else {
      console.log('finished with typing');
    }
  }












}
