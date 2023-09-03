class Producto {
    constructor(nombre, id, peso, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.peso = peso;
        this.precio = precio;
        this.stock = stock;
    }

};

const alimentos = [
    { nombre: "Dog Chow",id: "1",peso: "20kg",precio: 450,stock: 100},
    { nombre: "Pedigree", id: "2", peso: "15kg", precio: 210, stock: 100 },
    { nombre: "Tiernitos", id: "3", peso: "15kg", precio: 370, stock: 100 },
    { nombre: "Royal Canin mini adulto", id: "4", peso: "7,5kg", precio: 4530, stock: 100 }
]