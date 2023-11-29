import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any; // Declaración de jQuery para TypeScript
import 'jquery-validation';
import { ApiService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private apiservice : ApiService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('#login-form').on('submit', (e: Event) => {
        e.preventDefault();
      }).validate({
        rules: {
          user: {
            required: true,
            minlength: 3
          },
          password: {
            required: true
          }
        },
        messages: {
          user: {
            required: 'El usuario es requerido',
            minlength: 'El usuario debe tener al menos 3 caracteres'
          },
          password: {
            required: 'La contraseña es requerida'
          }
        },
        errorPlacement: (error: any, element: any) => {
          $(error).addClass('error-text');
          $(error).insertAfter($(element));
        },
        submitHandler: (form: any) => {
          const formData = new FormData(form);
          const data: { [key: string]: any } = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });
          console.log('Validado');
          console.log(data);
          this.loginForm(data);
          form.reset();
        }
      });
    });

    this.apiservice.getUsers().subscribe(
      data => {
        console.log("users -> ", data);
      }
    )
    
  }

  loginForm(data: any){
    let params: any = {
      user : data.user,
      pass : data.password
    }
    this.apiservice.loginUser(params).subscribe(
      data => {
        if(data.length > 0){
          let user = data[0].correo_electronico;
          localStorage.setItem('currentUser', JSON.stringify(user));
          location.reload();
        } else {
          alert('Usuario no encontrado');
        }
      }
    )
  }
}


