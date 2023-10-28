import { Component, OnInit } from '@angular/core';
declare var $: any; 
import 'jquery-validation';
// import { MatDialog } from '@angular/material/dialog'; // Asegúrate de importar MatDialog
import { SuccessDialogComponent } from 'src/app/components/success-dialog/success-dialog.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    // public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('#form-contact').on('submit', (e: Event) => {
        e.preventDefault();
      }).validate({
        rules: {
          name: {
            required: true,
            minlength: 3
          },
          phone: {
            required: false,
            minlength: 9,
            maxlength: 9
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
            equalTo: '#password'
          },
          tyc: {
            required: true
          }
        },
        messages: {
          name: {
            required: 'El nombre es requerido',
            minlength: 'El nombre debe tener al menos 3 caracteres'
          },
          phone: {
            minlength: 'El teléfono debe tener 9 dígitos',
            maxlength: 'El teléfono debe tener 9 dígitos'
          },
          email: {
            required: 'El email es requerido',
            email: 'Debe ingresar un email válido'
          },
          password: {
            required: 'La contraseña es requerida',
            minlength: 'La contraseña debe tener al menos 8 caracteres'
          },
          password2: {
            required: 'La contraseña es requerida',
            minlength: 'La contraseña debe tener al menos 8 caracteres',
            equalTo: 'Las contraseñas deben coincidir'
          },
          tyc: {
            required: ''
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
          // this.openDialog(); 
        }
      });
    });
  }
  
  // openDialog() {
  //   const dialogRef = this.dialog.open(SuccessDialogComponent, {
  //     width: '250px',
  //     data: 'El formulario se ha enviado correctamente.'
  //   });
  // }

  

}
