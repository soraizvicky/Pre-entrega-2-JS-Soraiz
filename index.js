alert("Te damos la bienvenida a Cineapolis :)")
function VerificarEdad() {
    let edad = parseInt(prompt("Te recordamos que los menores de 10 años tienen prohibido el ingreso y los mayores de 60 años cuentan con descuentos"));

    while (isNaN(edad) || edad > 100 || edad <= 0) {
        alert("Ingresa tu edad, Por favor");
        edad = parseInt(prompt("Tu edad:"));
    }

    if (edad < 10) {
        alert("Los menores de 10 años no tienen permitido el ingreso");
    } else if (edad > 60) {
        alert("Los mayores de 60 años cuentan con un de descuento por jubilacion del 30%");
    } else {
        return edad;
    }
    return edad;
}

const peliculas = [
    { opcion: "1", titulo: "Buscando a Nemo",  precio: 1000 },
    { opcion: "2", titulo: "La Era de Hielo 3", precio: 1200 },
    { opcion: "3", titulo: "Cars 3",  precio: 1300 },
    { opcion: "4", titulo: "El Rey Leon",  precio: 1500 },
    { opcion: "5", titulo: "Monsters inc",  precio: 1100 },
    { opcion: "6", titulo: "Hercules",  precio: 1000 }
];

function seleccionarPelicula(arrayPeliculas) {
    const cartelera = arrayPeliculas.map(pelicula => `${pelicula.opcion}. ${pelicula.titulo}`).join('\n');

    while (true) {
        const opcionCartelera = prompt("Te presentamos nuetra cartelera de peliculas, selecciona la que deseas ver:\n" + cartelera);

        const peliculaElegida = arrayPeliculas.find(pelicula => pelicula.opcion === opcionCartelera);
        if (peliculaElegida) {
            return peliculaElegida;
        } else {
            alert("No disponible, Por favor seleccione una de las peliculas que se encuentran enumeradas en la cartelera");
        }
    }
}

function PrecioEntrada(edad, pelicula) {
    const descuento = 0.30;
    const iva = 0.21;
    const servicecharge = 30;

    let subtotal = pelicula.precio;

    if (edad >= 60) {
        subtotal = pelicula.precio - (pelicula.precio * descuento);
    }

    const total = subtotal + (subtotal * iva) + servicecharge;

    return total;
}

let edadUsuario = VerificarEdad();
if (edadUsuario >= 10) {
    const peliculaSeleccionada = seleccionarPelicula(peliculas);
    const precioTotal = PrecioEntrada(edadUsuario, peliculaSeleccionada);
    alert("El precio de la entrada para ver " + peliculaSeleccionada.titulo + " es de: $" + precioTotal.toFixed(2));
}