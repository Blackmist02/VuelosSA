import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonAlert } from '@ionic/angular';


@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.page.html',
  styleUrls: ['./recuperar-contrasenia.page.scss'],
})
export class RecuperarContraseniaPage implements OnInit {

  loginusuario: string = '';
  logincontrasenia: string = '';
  loginVerificarContrasenia: string = '';
  alertController: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  //funcion que carga los usuarios
  cargarUsuarios() {
    //importar datos.js
    this.http.get('assets/datos.json').subscribe(data => { this.usuarios = data.usuarios; });
  }
  //
  //cambiar la contraseña
  cambiarContrasenia() {
    if 
  }
}
