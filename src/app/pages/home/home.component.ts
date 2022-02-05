import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  poios = [
    '/assets/images/pollo1.svg',
    '/assets/images/pollo2.svg',
    '/assets/images/pollo3.svg',
    '/assets/images/pollo4.svg',
]
  poio = this.poios[0]
  constructor() { }

  ngOnInit(): void {
    this.randomPoio();
  }


  randomPoio(){

    this.poio= this.poios[Math.floor(Math.random()*this.poios.length)]
    console.log("this.poio",this.poio)
  }
}
