import { Component, OnInit } from '@angular/core';
declare var $: any; // Declaración de jQuery para TypeScript
import 'jquery-validation';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {

    $(document).ready(() => {
      $("#form-signup").on('submit', (e: Event) => {
        e.preventDefault();
      }).validate({
        rules: {
          name: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            minlength: 8
          },
          password2: {
            required: true,
            minlength: 8,
            equalTo: "#password"
          },
          user: {
            required: true
          },
        },
        messages: {
          name: {
            required: "El nombre es requerido",
            minlength: "El nombre debe tener al menos 3 caracteres"
          },
          email: {
            required: "El email es requerido",
            email: "Debe ingresar un email válido"
          },
          password: {
            required: "La contraseña es requerida",
            minlength: "La contraseña debe tener al menos 8 caracteres"
          },
          password2: {
            required: "La contraseña es requerida",
            minlength: "La contraseña debe tener al menos 8 caracteres",
            equalTo: "Las contraseñas deben coincidir"
          },
          user: {
            required: "El usuario es requerido"
          },
        },
        errorPlacement: function (error: any, element: any) {
          error.addClass("error-text");
          error.insertAfter(element);
        },
        submitHandler: (form: HTMLFormElement) => {
          const formData = new FormData(form);
          const data = formDataToObject(formData);
          console.log('Validado');
          console.log(data);
          form.reset();
        }
      });
    });

    function formDataToObject(formData: FormData): { [key: string]: any } {
      const object: { [key: string]: any } = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      return object;
    }

  }



}
