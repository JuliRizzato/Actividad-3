  
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

let edad2 = 20
const DNI = 45256891

console.log(`Mi edad es ${edad2} y mi DNI es ${DNI}`)



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
  let dia = ["Lunes" , "Martes" , "Miércoles" , "Jueves" , "Viernes" , "Sábado" , "Domingo"];
  
  switch(indice){
    case 1: console.log(dia[0]); break;
    case 2: console.log(dia[1]); break;
    default: console.log(dia[3]);
  }


  let i = 2;
  while(i <= 5){
    console.log(i);
    i++;
  }


/* 1)Escribe un programa que verifique si un número es positivo o negativo. */

let num10 = 0;
if(num10 > 0){
    console.log(`${num10} es un número positivo`);
} else if(num10 < 0){
    console.log(`${num10} es un número negativo`);
} else{
    console.log(`${num10} no es ni positivo ni negativo`);
}

/* 2)Usa switch para imprimir el día de la semana según un número del 1 al 7. */

let dias = ["Lunes" , "Martes" , "Miércoles" , "Jueves" , "Viernes" , "Sábado" , "Domingo"];
let diasemana = 3

switch(diasemana){
    case 1: console.log(dias[0]); break;
    case 2: console.log(dias[1]); break;
    case 3: console.log(dias[2]); break;
    case 4: console.log(dias[3]); break;
    case 5: console.log(dias[4]); break;
    case 6: console.log(dias[5]); break;
    case 7: console.log(dias[6]); break;
    default: console.log("Es necesario un número del 1 al 7"); break;
}

/* 3)Haz un bucle for que imprima los números del 1 al 10. */

for(let i = 5; i < 10; i++){
    console.log(i)
}

/* 4)Crea un programa que calcule el factorial de un número usando while. */

let factorial = parseInt(prompt("Ingrese un número para calcular su factorial:"));
let contadorfactorial = factorial;
let resultado = 0;
while(contadorfactorial >= 1){
    resultado = factorial * contadorfactorial;
    contadorfactorial--;
    alert(resultado);
}

/* 5)Escribe un condicional que determine si una persona puede votar según su edad. */

let edad = parseInt(prompt("Ingrese su edad"));
if(edad < 16){
    alert(`Tiene ${edad} años, no puede votar`);
} else{
    alert(`Tiene ${edad} años, puede votar`);
}

/* 6)Imprime los números pares entre 1 y 20 con un bucle for. */



/* 7)Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F). */



/* 8)Haz un programa que pida dos números y los sume si ambos son positivos. */



/* 9)Escribe un bucle while que cuente de 10 a 1 en orden descendente. */

let a = 10;
while(a >= 1){
    console.log(a);
    a--;
}


/* 10)Crea una calculadora básica que permita sumar o restar según el operador ingresado. */



