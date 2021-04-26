const productos = [
    {
        nombre: "Harina",
        precio: 35
    },
    {
        nombre: "Pan",
        precio: 25
    },
    {
        nombre: "Papa",
        precio: 52
    },
    {
        nombre: "Palta",
        precio: 55
    },
    {
        nombre: "Fideos",
        precio: 85
    },
    {
        nombre: "Aceite",
        precio: 350
    },
    {
        nombre: "Sopa",
        precio: 86
    },
    {
        nombre: "Mermelada",
        precio: 108
    },
    {
        nombre: "Porotos",
        precio: 69
    },
    {
        nombre: "Lentejas",
        precio: 85
    },
    {
        nombre: "Mandarina",
        precio: 43
    },
    {
        nombre: "Banana",
        precio: 79
    },
    {
        nombre: "Leche de almendras",
        precio: 145
    },
    {
        nombre: "Papel higiénico",
        precio: 147
    },
    {
        nombre: "Lavandina",
        precio: 55
    },
    {
        nombre: "Alcohol en gel",
        precio: 123
    },
    {
        nombre: "Shampoo",
        precio: 400
    },
    {
        nombre: "Arroz",
        precio: 66
    },
    {
        nombre: "Harina dos",
        precio: 35
    },
    {
        nombre: "Salsa de tomate",
        precio: 35
    }
]

let carrito = [];
const tablacarrito = document.querySelector('#tablaCarrito');
const totalcompra = document.getElementById('totalcompra');


function crearArticulo(producto){
    var tr = document.createElement('tr');
    tr.id = "crearProducto";

    var tdNombre = document.createElement('td');
    var tdNombretexto = document.createTextNode(producto.nombre);
    tdNombre.appendChild(tdNombretexto);

    var tdPrecio = document.createElement('td');
    var tdPreciotexto = document.createTextNode(producto.precio);
    tdPrecio.appendChild(tdPreciotexto);

    var tdBoton = document.createElement('td');
    var boton = document.createElement('button');
    var nombreBoton = document.createTextNode("eliminar");
    boton.appendChild(nombreBoton);
    boton.onclick = function eliminarProducto() { tr.parentNode.removeChild(tr); quitarProductoCarrito(tdNombre); }; //elimina productos

    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(boton);

    return tr;
}

function quitarProductoCarrito(productoNombre){
    console.log(carrito);
   //index = buscarProducto(productoNombre, carrito)
    let carritoaux = [];
    let otro = 0;
   for (let i = 0; i < carrito.length; i++) {
       if (carrito[i].nombre != productoNombre.innerHTML) {
           carritoaux[otro] = carrito[i];
           otro++;
       }     
   }
   carrito = carritoaux;
   console.log(carrito);
}

function ingresaraCarrito(e){
        
    if (e.target.checked == true ) {
           
            const index = buscarProducto(e.target.name, productos);
            carrito.push(productos[index]);

            const tr = crearArticulo(productos[index]);
            tablacarrito.appendChild(tr);
            e.target.disabled = true;
    }

}

function buscarProducto(nombreProducto, buscarArray){
    
    let index = null;
    for (let i = 0; i < buscarArray.length; i++) {
        if (nombreProducto == buscarArray[i].nombre ) {
            index = i;
        }  
    }
    return index;
}

function cerrarCompra(){
    let total=0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;         
    }
    console.log(carrito);
    totalcompra.innerHTML =  "Total de la Compra: "+total;
}






 