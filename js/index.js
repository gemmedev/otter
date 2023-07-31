/* var nombre = prompt('Escribe tu nombre');
var apellido = prompt('Escribe tu apellido');
var nombreCompleto = nombre + ' ' + apellido;
alert('tu nombre completo es ' + nombreCompleto); */

/* var num = parseInt(prompt('Ingrese un numero')); */

/* if (num <= 5) {
  alert('el numero es menor a 5');
} else if (num >= 5 && num <= 10) {
  alert('el numero esta entre 5 y 10');
} else {
  alert('el numero es mayor a 11');
} */

// parseInt(prompt('Teclea un  número'));

// ejercicio #1
/* var edad = parseInt(prompt('Digita tu edad'));

if (edad >= 18) {
  alert('Es mayor de edad');
} else {
  alert('La edad es incorrecta');
} */

/* var color = prompt('Digita un color');

if (color === 'rojo') {
  alert('Color valido');
} else if (color === 'azul') {
  alert('Color valido');
} else if (color === 'amarillo') {
  alert('Color valido');
} else if (color === 'verde') {
  alert('Color valido');
} else if (color === 'rosa') {
  alert('Color valido');
} else if (color === 'negro') {
  alert('Color valido');
} else {
  alert('El color no es valido');
} */

/* ejercicio #2
var color = prompt('Digita un color');

if (color === 'rojo' | color === 'azul'  | color === 'amarillo'  | color === 'verde'  | color === 'rosa'  | color === 'negro') {
  alert('Color valido');
}else {
  alert ('el color no es valido');
} */

// ejercicio #3

/* var num1 = parseInt(prompt('Escribe un número'));
var num2 = parseInt(prompt('Escribe otro número'));

if (num1 > num2) {
  alert(num1 + ' es el numero mayor');
} else if (num2 > num1) {
  alert(num2 + ' es el numero mayor');
} else {
  alert('Ambos numeros son iguales');
} */

/* var texto = prompt('Escriba algo');
var valor = parseInt(texto.charAt(0));
if (valor.toString() === 'NaN') {
  alert('Es una letra');
} else {
  alert('Es una numero');
} */

// alert(typeof parseInt(valor));
/* debugger;
var texto = prompt('Escriba algo');
var valor = texto.charAt(0);
if (isLetter(valor)) {
  alert('el texto empieza con una letra');
} else if (isNumber(valor)) {
  alert('el texto empieza con un numero');
} else {
  alert('caracter desconocido');
}
 */
/* 
var nMes, estacion;
nMes = parseInt(prompt('Indica el número del mes 1 al 12'));
switch (nMes) {
  case 12:
  case 1:
  case 2:
    estacion = 'Invierno';
    break;
  case 3:
  case 4:
  case 5:
    estacion = 'Primavera';
    break;
  case 6:
  case 7:
  case 8:
    estacion = 'Verano';
    break;
  case 9:
  case 10:
  case 11:
    estacion = 'Otoño';
    break;
  default:
    estacion = 'desconocida';
} */
// alert('La estación del año es ' + estacion);

/* var numero = 6.5;
var cadena = 'hola';
var objT = { 
  name: 'kevin' ,
  apellido: 'corrales',
  edad: 22,
  mascotas: ['perros', 'gatos'],
  otraCosa: {
    cosa1: 'mesa',
    cosa2: {

    }
  }
};

var arrayT = ['algo', 'algo2'];
console.log(typeof numero, typeof cadena, typeof objT, typeof arrayT);
 */

/// DO WHILE
/* let tecla = '';
do {
  tecla = prompt('Teclear letra mágica');
} while (tecla != 'A');
alert('Has acertado'); */

/* let opcion = '';
do {
  opcion = prompt('1.- Escribir\n 2.- Leer\n 3.- Salir\n Escoge una opción:');
  switch (opcion) {
    case '1':
      alert('Eliges Escribir');
      break;
    case '2':
      alert('Eliges Leer');
      break;
    case '3':
      alert('fin del programa');
      break;
    default:
      alert('debes elegir una de las opciones');
  }
} while (opcion != '3'); */

// CICLO WHILE

/* let min = 1,
  max = 5,
  numero = 0;
while (numero < 1 || numero > 5) {
  numero = parseInt(prompt('Teclee un número entre 1 y 5'));
} */

/* let clave,
  veces = 0,
  acceso = 'pasar',
  msg;
while (clave != acceso && veces < 3) {
  clave = prompt('Teclee su clave');
  if (clave == acceso) {
    alert('Acceso concedido');
  } else {
    alert('Acceso denegado');
    veces++;
  }
}
if (veces == 3) {
  alert('Alerta Intruso');
} */

// CICLO FOR

/* let contar,
  max,
  msg = '';
max = parseInt(prompt('Teclear un número entero'));
for (contar = 0; contar < max; contar++) {
  msg += contar + ', ';
}
msg += contar; //Evita la coma al final
alert(msg); */

/* let contar,
  max,
  par = 0,
  msg = '';
max = parseInt(prompt('Teclear un número entero'));
for (contar = 1; par < max; contar++) {
  msg += par + '\n';
  par = contar * 2;
}
alert(msg);
 */

/* var NumeroSecreto = Math.round(Math.random() * 100);
console.log(NumeroSecreto);
var num;
while (num != NumeroSecreto) {
  num = parseInt(prompt('Digita un numero'));
  if (num > NumeroSecreto) {
    alert('El numero es mayor');
  } else if (num === NumeroSecreto) {
    alert('Adivinaste el numero');
  } else {
    alert('El numero es menor');
  }
} */

var num = parseInt(prompt('Digita un numero del 1 al 100'));
for (var i = 0; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
