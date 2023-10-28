$(document).ready(function () {
    $("#form-contact").on('submit', e => {
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
                equalTo: "#password"
            },
            tyc: {
                required: true
            }
        },
        messages: {
            name: {
                required: "El nombre es requerido",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },
            phone: {
                minlength: "El teléfono debe tener 9 dígitos",
                maxlength: "El teléfono debe tener 9 dígitos"
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
            tyc: {
                required: ""
            }
        },
        errorPlacement: function (error, element) {
            error.addClass("error-text");
            error.insertAfter(element);
        },
        submitHandler: (form) => {
            const data = Object.fromEntries(new FormData(form));
            console.log('Validado');
            console.log(data);
            form.reset();
            Swal.fire({
                icon: 'success',
                title: 'Envío exitoso',
                text: 'El formulario se ha enviado correctamente.',
            });
        }
    });
  });