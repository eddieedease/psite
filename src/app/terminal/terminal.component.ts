import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

    commands = [{
    name: "clear",
    function: clearConsole
}];

 cursor = $('#cursor');
 terminal = $('#terminal');
 text = ["GLaDOS v1.09 (c) 1982 Aperture Science, Inc.\nWARN: This site is under construction\n$> ", ""];
 commandHistrory = [];
 lineY = 1;
 index = 0;
 historyIndex = 0;

  constructor() { }

  ngOnInit() {
    window.setInterval(function () {
    this.cursor.toggleClass('invisible');
  }, 500);
  }



 

  

 clearConsole() {
    this.text = [];
    this.lineY = 0;
}

 printConsole(txt) {
    this.cursor.remove();
    this.terminal.html(text);
    this.terminal.append('<span id="cursor"></span>');
    this.cursor = $('#cursor');
}

processCommand(rawData) {
    let args = rawData.split(" ");
    let command = args[0];
    this.commandHistrory[historyIndex] += rawData;
    this.args.shift();
    let unknownComand = true;
    for (let i = 0; i < this.commands.length; i++) {
        if (command === this.commands[i].name) {
            this.commands[i].function(args);
            unknownComand = false;
            break;
        }
    }
    if (unknownComand == true) {
        this.lineY++;
        this.text[lineY] = "\nsystem: command not found";
    }
    this.historyIndex++;
}

nextLine() {
    processCommand(this.text[this.lineY]);
    if (this.lineY != 0) {
        this.lineY++;
        this.text[this.lineY] = "\n";
    }
    else
        this.text[this.lineY] = "";

    this.text[this.lineY] += "$> ";
    this.lineY++;
    this.text[this.lineY] = "";
    printConsole(this.text);
}

erase(n) {
    this.text[this.lineY] = this.text[this.lineY].slice(0, -n);
    this.index--;
    printConsole(this.text);
}

// tslint:disable-next-line:one-line
$(document).ready(function () {
    printConsole(this.text);
});

// tslint:disable-next-line:member-ordering
$('html'; ).on('keydown', function (e) {
    e = e || window.event;
    let keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    // Backspace? Erase!
    if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
        e.preventDefault();
        if (index != 0)
            erase(1);
    }
});

$(document).keypress(function (e) {
    // Make sure we get the right event
    e = e || window.event;
    var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    // Which key was pressed?
    switch (keyCode) {
        // ENTER
        case 13:
        {
            nextLine();
            break;
        }
        default:
        {
            var data = String.fromCharCode(keyCode);
            if (data != undefined) {
                var length = text[lineY].length;
                text[lineY] += data;
                index = index + (text[lineY].length - length);
                printConsole(text);
            }
          break;
        }
    }
});
  




}
