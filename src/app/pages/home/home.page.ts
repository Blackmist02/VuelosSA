import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Your code here
  }

  //funcion que devuelve la hora actual y que este se actualice cada segundo
  
  getTime() {
    return new Date().toLocaleTimeString();
  }

}
