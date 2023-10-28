$(document).ready(function () {
    $("#login-form").on('submit', e => {
      e.preventDefault();
    }).validate({
        rules: {
            user: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
            }
        },
        messages: {
            user: {
                required: "El usuario es requerido",
                minlength: "El usuario debe tener al menos 3 caracteres"
            },
            password: {
                required: "La contraseña es requerida",
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
        }
    });
  });