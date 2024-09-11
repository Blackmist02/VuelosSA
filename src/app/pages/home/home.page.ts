import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  time: string;
  private intervalId: any;
  constructor() { 
    this.time = this.getTime();
  }

  ngOnInit() {
    // Your code here
    // Se actualiza cada segundo
    this.updateTime();

    this.intervalId = setInterval(() => {
      this.time = this.getTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  //funcion que devuelve la hora actual y que este se actualice cada segundo
  
  getTime() {
    return new Date().toLocaleTimeString();
  }

  updateTime() {
    this.time = this.getTime();
  }
}
