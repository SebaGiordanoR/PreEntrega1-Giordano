//carrito de compras

const AGREGAR = 1;
const VACIAR = 2;
const VERTOTAL = 3;

let precio = 0;
let cantidad = 0;
let total = 0;
let opciones = '';
let continuar = '';


alert('Bienvenido a nuestra tienda!')
do{
    opciones = Number(prompt('¿Que te gustaria hacer? \n 1-Agregar un producto \n 2-Vaciar el carrito \n 3-Ver el total'))


    switch(opciones){
        case AGREGAR:
        precio = Number(prompt('Ingresa el valor del producto'))
        cantidad = Number(prompt('¿Cuantos deseas agregar?'))
        console.log('agregando producto...')
        alert('El valor de tu producto es: ' + precio*cantidad)
        break
        case VACIAR:
        total = 0
        console.log('vaciando el carrito...')
        alert('tu carrito fue vaciado correctamente')
        break
        case VERTOTAL:
    }

    continuar = prompt('¿Te gustaria realizar otra accion? si/no')
}while (continuar == 'si')

