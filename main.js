// PRODUCTOS
const productos = [

    {
        id: "alimento-perro-01",
        titulo: "Dog Chow",
        imagen: "./images/dogchow.webp",
        categoria: {
            nombre: "Perros",
            id: "perros"
        },
        precio: 2000
    },
    {
        id: "alimento-perro-02",
        titulo: "Pedigree",
        imagen: "./images/pedigree.webp",
        categoria: {
            nombre: "Perros",
            id: "perros"
        },
        precio: 2000
    },
    {
        id: "alimento-perro-03",
        titulo: "Tiernitos",
        imagen: "./images/tiernitos.webp",
        categoria: {
            nombre: "Perros",
            id: "perros"
        },
        precio: 2000
    },
    {
        id: "alimento-perro-04",
        titulo: "Royal Canin mini ad",
        imagen: "./images/mini.jpeg",
        categoria: {
            nombre: "Perros",
            id: "perros"
        },
        precio: 2000
    },
    {
        id: "alimento-gato-01",
        titulo: "Whiscas",
        imagen: "./images/whiscas2.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 1500
    },
    {
        id: "alimento-gato-02",
        titulo: "Raza Gatos",
        imagen: "./images/raza.webp",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 1500
    },
    {
        id: "alimento-gato-03",
        titulo: "Cat Chow gatitos",
        imagen: "./images/catchowgatitos.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 1500
    },
    {
        id: "alimento-gato-04",
        titulo: "Gati",
        imagen: "./images/gati.webp",
        categoria: {
            nombre: "Gatos",
            id: "gatos"
        },
        precio: 1500
    }

];
// traemos elementos del DOM mediante ID o CLASE
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {

// creamos elementos en el DOM 
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
           <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
           <div class="producto-detalles">
               <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
               <button class="producto-agregar" id="${producto.id}">Agregar</button>
              </div>

       `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    
}

cargarProductos(productos);
// seleccionamos los productos por categorias mediante boton 
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(productos => productos.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })

});


// agregamos los productos al carrito 
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    })

}


const productosEnCarrito = [];

function agregarAlCarrito() {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    productosEnCarrito.push(productoAgregado);

}