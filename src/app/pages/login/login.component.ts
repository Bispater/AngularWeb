import { Component, OnInit } from '@angular/core';
declare var $: any; // Declaración de jQuery para TypeScript
import 'jquery-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
          form.reset();
        }
      });
    });
  }
}


