// Espera a que el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona los elementos del formulario
    let form = document.querySelector('form');
    let username = document.querySelector('input[type="text"]');
    let password = document.querySelector('input[type="password"]');
    let checkbox = document.querySelector('input[type="checkbox"]');
    let submit = document.querySelector('input[type="submit"]');

    // Función para validar el nombre de usuario
    function validateUsername() {
        // Expresión regular que permite solo letras y espacios en blanco, con un máximo de 20 caracteres
        let regex = /^[a-zA-Z\s]{1,20}$/;
        return regex.test(username.value);
    }

    // Función para validar la contraseña
    function validatePassword() {
        // Expresión regular que requiere al menos un dígito, una letra mayúscula, una letra minúscula y un tamaño mínimo de 6 caracteres
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return regex.test(password.value);
    }

    // Función para validar el formulario completo
    function validateForm() {
        // Si el nombre de usuario es válido, se pinta el borde del input de verde. Si no, se pinta de rojo.
        if (validateUsername()) {
            username.style.borderColor = 'green';
        } else {
            username.style.borderColor = 'red';
        }

        // Si la contraseña es válida, se pinta el borde del input de verde. Si no, se pinta de rojo.
        if (validatePassword()) {
            password.style.borderColor = 'green';
        } else {
            password.style.borderColor = 'red';
        }

        // Si todos los campos son válidos y la casilla está marcada, se habilita el botón de envío. Si no, se deshabilita.
        if (validateUsername() && validatePassword() && checkbox.checked) {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    }

    // Se añaden eventos para validar el formulario cuando se pierde el foco en los inputs o se cambia el estado del checkbox
    username.addEventListener('blur', validateForm);
    password.addEventListener('blur', validateForm);
    checkbox.addEventListener('change', validateForm);

});