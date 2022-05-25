const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const numeroId = document.getElementById("numero-id");
const botonBuscar = document.getElementById("buscar");


let impares = [];
let precioMenor = [];
let nombresPizzas = [];
let precioPizzas = [];
let precioDetallado = [];

let pizzas = [
    {
        id: 1,
        nombre: "Muzza",
        ingredientes: ["Salsa", "Queso muzza", "Oregano"],
        precio: 500
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes: ["Salsa", "Queso muzza", "Tomate", "Oregano"],
        precio: 599
    }
    ,
    {
        id: 3,
        nombre: "Marinera",
        ingredientes: ["Salsa", "Queso muzza", "Oregano", "Aceite de Oliva", "Albahaca"],
        precio: 650
    },
    {
        id: 4,
        nombre: "Fugazzeta",
        ingredientes: ["Salsa", "Queso muzza", "Cebolla"],
        precio: 550
    },
    {
        id: 5,
        nombre: "Cuatro Quesos",
        ingredientes: ["Salsa","Muzza", "Gorgonzola","Parmesano", "Fontina"],
        precio: 700
    },
    {
        id: 6,
        nombre: "Hawaiana",
        ingredientes: ["Salsa","Queso muzza","Ananá","Jamon","Tomate"],
        precio: 650
    },
    {
        id: 7,
        nombre: "Vegetariana",
        ingredientes: ["Salsa","Calabacin", "Espinacas", "Berenjena"],
        precio: 650
    },
    {
        id: 8,
        nombre: "Pizza con Pollo",
        ingredientes: ["Salsa","Queso muzza","Pollo","Aceitunas","Champiñones", "Oregano"],
        precio: 650
    }
]

const mostrarPrecio = id=>{
    console.log(`El precio de la ${pizzas[id].nombre} es $${pizzas[id].precio}`)
}


for(let i=0;i<pizzas.length;i++){
    if(pizzas[i].id%2!==0){
        impares.push(pizzas[i].nombre);
    }
    if(pizzas[i].precio<600){
        precioMenor.push(pizzas[i].nombre); 
    }

    nombresPizzas.push(pizzas[i].nombre)
    

    precioPizzas.push("$"+pizzas[i].precio);
   
    mostrarPrecio(i);
}

console.log("Las pizzas con id impar son: "+impares);
console.log(`Las pizzas ${precioMenor} cuestan menos de $600`);
console.log(`Los nombres de todas las pizzas son: ${nombresPizzas}`);
console.log(`Los precios de las pizzas son: ${precioPizzas}`)


//EJERCICIO JS3 EDUFLOW

botonBuscar.addEventListener("click",()=>{
    let numeroIngresado = numeroId.value;
    for(let pizza in pizzas){
        if(pizzas[pizza].id == numeroIngresado){
            nombre.innerHTML = pizzas[pizza].nombre;
            precio.innerHTML = pizzas[pizza].precio;
            nombre.style.color="black";
            return;
        } else {
            nombre.innerHTML = "Pizza no encontrada";
            nombre.style.color="red";
            precio.innerHTML = "";
        }
    }
    
})