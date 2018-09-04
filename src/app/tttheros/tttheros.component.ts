import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tttheros',
  templateUrl: './tttheros.component.html',
  styleUrls: ['./tttheros.component.css']
})
export class TttherosComponent implements OnInit {
  testmsg: string;

  constructor() { }

  ngOnInit() {
    this.testmsg="222222222";
  }


}
