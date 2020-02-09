import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  rate = 0;
  constructor() { }

  ngOnInit() {
  }

    //rate = document.getElementById("star5").value;

}
