//carrito de compras

const AGREGAR = 1;
const VACIAR = 2;
const VERTOTAL = 3;


let precio = 0;
let cantidad = 0;
let precioFinal = 0;
let total = 0;
let opciones = '';
let continuar = '';


function borrar(precio, cantidad, total){
    total = total - precio*cantidad;
    return total
}

alert('Bienvenido a nuestra tienda!')

do{
opciones = Number(prompt('QUE OPERACION TE GUSTARIA REALIZAR?\n 1- AGREGAR UN PRODUCTO \n 2- BORRAR UN PRODUCTO \n 3- VER TOTAL'))
switch (opciones) {
case AGREGAR:
    precio = +prompt("ingrese el precio del producto");
    cantidad = +prompt("Cuantos desea agregar?")
    total= total + precio*cantidad
    console.log("AGREGANDO PRODUCTO(S)...")
    break
case VACIAR:
    precio = +prompt("indique su precio")
    cantidad= +prompt("cuantos va a eliminar?")
    total= total - precio*cantidad;
    console.log("BORRANDO ITEM(S)...")
    break
case VERTOTAL:
alert("El total de tu compra es: $" + total)
default:
    total = 0;
}


console.log("Gracias por comprar con nosotros!")
continuar = prompt("Te gustaria realizar otra operacion?")
}while(continuar == "si")

