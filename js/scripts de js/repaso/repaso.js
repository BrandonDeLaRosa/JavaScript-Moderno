let nombre 
nombre = 'brandon';
console.log(nombre);

let number = 50;
console.log(number);

let booleano = true;
console.log(booleano);




//  TIPOS DE CONCATENACION

let oracion = `Mi nombre es ${nombre}, tengo ${number} años, y esta oracion es ${booleano}`
console.log(oracion);

let oracion2 =  "Mi nombre es " + nombre + " y tengo " + number + " años, esta oracion es: " + booleano; 
console.log(oracion2);

let espacios = ' hola soy brandon  ';
// console.log(espacios.trimStart());
// console.log(espacios.trimEnd());
console.log(espacios.trim());
console.log(espacios.trimStart().trimEnd());   // <-- metodos en chaining

let asigSimple = -100.223;
console.log(Number.parseFloat(asigSimple));

let comparar = -100 == 100
console.log(comparar);



// Ejercicios de suma/resta/div/multip de asignacion

// Ejercicos de mayo que o menor que 