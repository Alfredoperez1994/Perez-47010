//saludo bienvenida
let saludo = "hola";
let nombre = prompt("ingrese su nombre");
let saludoCompleto = saludo + nombre;
alert(`${saludo} ${nombre}`);

// cantidad a definir compra mayorista o minorista

let cantidad = parseInt(prompt("cantidad a comprar"));

if (cantidad >= 10) {
    alert("su precio es mayorista")
} else {
    alert("su precio es minorista")
}

// tipo de alimento a comprar 

let mascota = prompt("que mascota tiene?")

switch (mascota) {
    case "gato":
        alert("alimento de gato");
        break;

    case "perro":
        alert("no contamos con stock momentaneamente")
        break;

    default:
        alert("no contamos con lo que estas buscando")
        break;

}

class Alimento {
    constructor(nombre, tamaño, precio){
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.precio = precio;
        this.vendido = false;
    }

    vender(){
        this.vender = true;
    }

}

const alimentosGato = [];

alimentosGato.push(new Alimento("gato1","5kg", 450));
alimentosGato.push(new Alimento("gato2","7.5kg", 800));
alimentosGato.push(new Alimento("gato3","5kg", 300));
alimentosGato.push(new Alimento("gato4","7.5kg", 500));



let precio = parseInt(prompt("cuanto desea gastar?"))
let filtrados = Alimento.filter((item) => item.precio === precio);

filtrados.forEach((item) => {
let mensaje = `
Nombre: ${item.nombre}
Tamaño: ${item.tamaño}
Precio: $${item.precio}
`;

alert (mensaje);


});
