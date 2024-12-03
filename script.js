   
/*   1) Imprimir mensajes en la consola con console.log(). */

console.log(`Hola mundo!`)

/*    2) Crea una variable nombre con tu nombre y úsala para imprimir un mensaje. */

let nombre = "Julián"
console.log(`Hola mi nombre es ${nombre}`)

/*   3) Declara y suma dos números, muestra el resultado en consola. */

let num1 = 15
let num2 = 33
let rta = num1 + num2

console.log(`La suma de ${num1} y ${num2} es ${rta}`)

/*   4) Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2. */

console.log(10 > 5 && 5 < 2);
console.log(10 > 5 || 5 < 2);


/* if(num3 > num4 && num5 < num6){
    console.log(`${num3} es MAYOR que ${num4} y ${num5} es MENOR que ${num6}`)
} else if(num3 > num4 && num5 > num6){
    console.log(`${num3} es MAYOR que ${num4} y ${num5} es MAYOR que ${num6}`)
} else if(num3 < num4 && num5 < num6){
    console.log(`${num3} es MENOR que ${num4} y ${num5} es MENOR que ${num6}`)
} else if(num3 < num4 && num5 > num6){
    console.log(`${num3} es MENOR que ${num4} y ${num5} es MAYOR que ${num6}`)
} else{
    console.log(`Debe de haber un error..`)
} */

/*  5) Declara variables con let y const y nota las diferencias al intentar cambiarlas. */

let edad = 20
const DNI = 45256891

console.log(`Mi edad es ${edad} y mi DNI es ${DNI}`)



/* 6) Escribe un comentario que explique qué hace tu código. */

let base = 3;
let altura = 5;

console.log("El área del rectángulo es " + base * altura);

/* 7) Declara una variable de tipo boolean y úsala en una operación lógica. */

let numero1 = false

console.log(`Es mayor ${numero1}` && `puede viajar`)

/* 8) Imprime el tipo de dato de una variable usando typeof. */

let valor = 30

console.log("El tipo de valor es: " + typeof valor)



/*  9) Usa una operación con % para encontrar el resto de 17 ÷ 3. */

/*   10) Declara una variable sin valor e imprime su valor inicial. */



let frutas = ["manzana", "pera", "banana", "naranja"];
console.log(frutas[0]);

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
  });




  let indice = 1
  let dia = ["Lunes" , "Martes" , "Miércoles" , "Otro día"];
  
  switch(indice){
    case 1: console.log(dia[0]); break;
    case 2: console.log(dia[1]); break;
    default: console.log(dia[3]);

  }