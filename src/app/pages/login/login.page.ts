import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser: string = "";
  loginPassword: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/home'],{state:{usuario:this.loginUser, contrasenia:this.loginPassword}});
  }

  recuperarContrasenia() {
    this.router.navigate(['/recuperar-contrasenia']);
}
}