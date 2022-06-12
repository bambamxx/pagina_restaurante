//Boton menu celulares------------------------------------>

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})



//Carrusel------------------------------------------------>

const bigContainer = document.querySelector(".big-container");
const point = document.querySelectorAll(".point");

// Cuando CLICK en punto
// Saber la posición de ese punto
// Aplicar un transform translateX al grande
// QUITAR la clase activo de TODOS puntos
// AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
point.forEach((eachPoint, i) => {
    // Asignamos un CLICK a cadaPunto
    point[i].addEventListener("click", () => {

        // Guardar la posición de ese PUNTO
        let position = i;
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operation = position * -50;

        // MOVEMOS el bigContanier
        bigContainer.style.transform = `translateX(${operation}%)`

        // Recorremos TODOS los punto
        point.forEach((eachPoint, i) => {
            // Quitamos la clase ACTIVO a TODOS los punto
            point[i].classList.remove('active')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        point[i].classList.add('active')

    })
})



//Formulario registro
function register() {
    const user = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("passwordConfirmation").value;

//4
    if (user == "" && email == "" && password == "" && passwordConfirmation == "") {
        alert("Favor de ingresar usuario, correo, la contraseña y su confirmación");
    }
//3
    else if (email == "" && password == "" && passwordConfirmation == "") {
        alert("Favor de ingresar correo, la contraseña y su confirmación");
    }

    else if (user == "" && password == "" && passwordConfirmation == "") {
        alert("Favor de ingresar usuario, la contraseña y su confirmación");
    }

    else if (user == "" && email == "" && passwordConfirmation == "") {
        alert("Favor de ingresar usuario, correo y confirmar la contraseña");
    }

    else if (user == "" && email == "" && password == "") {
        alert("Favor de ingresar usuario, correo y contraseña");
    }

//2
    else if (user == "" && email == "") {
        alert("Favor de ingresar usuario y correo");
    }

    else if (user == "" && password == "") {
        alert("Favor de ingresar usuario y contraseña");
    }

    else if (user == "" && passwordConfirmation == "") {
        alert("Favor de ingresar usuario y la confirmación de la contraseña");
    }

    else if (email == "" && password == "") {
        alert("Favor de ingresar correo y contraseña");
    }

    else if (email == "" && passwordConfirmation == "") {
        alert("Favor de ingresar correo y la confirmación de la contraseña");
    }
//1
    else if (user == "" ) {
        alert("Usuario vacio");
    }

    else if (email == "") {
        alert("Correo vacio");
    }

    else if (password == "") {
        alert("Contraseña vacia");
    }

    else if (password.length < 6) {
        alert("La contraseña debe contener al menos 6 caracteres"); 
    }

    else if (password.length >= 6) {

        if (passwordConfirmation == "") {
            alert("Favor de confirmar la contraseña");
        }   
        
        else if (passwordConfirmation === password && user != "" && email != ""){
            alert("Registro exitoso");
        }
        else {
            alert("Las contraseñas no coinciden")
        }
    }
}