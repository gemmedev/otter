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
  alert('Es un numero');
} */

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
  num = parseInt(prompt('Digita un numero del 1 al 100 hasta adivinar el secreto'));
  if (num > NumeroSecreto) {
    alert('El numero es mayor');
  } else if (num === NumeroSecreto) {
    alert('Adivinaste el numero');
  } else {
    alert('El numero es menor');
  }
} */

/* var num = parseInt(prompt('Digita un numero del 1 al 100'));
for (var i = 0; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} */

/* 
EJERCICIO #1
var num = parseInt(prompt('Digita un número'));
var suma = 0;
for (var i = 0; i <= num; i++) {
  suma = suma + i;
}
alert ('El resultado de la suma es igual a ' + suma); */

/* 
EJERCICIO #2
var num = parseInt(prompt('Digita un numero entre 1 al 100 y mostrare los impares'))
for (var i = 1; i <= num; i+=2) {
  alert('Estos son los numeros impares ' + i)
} */

/* 
OTRA SOLUCIÓN EJERCICIO #2
var num = parseInt(prompt('Digita un numero entre 1 al 100 y mostrare los impares'))
for (var i = 0; i <= num; i++) {
  if (i % 2 === 1) {
    alert('Estos son los numeros impares ' + i)
  }
}
 */

/* var num = parseInt(prompt('Digita un numero entre 1 al 100 y mostrare los impares'))
var i = 0
while (i <= num) {
  if (i % 2 === 1) {
    alert('Estos son los numeros impares ' + i)
  }
  i++
} */

/* 
SOLUCIÓN EJERCICIO #3
var color = prompt('Escriba un color');
while (color != 'verde') { 
    alert ('Sigue intentando');
    color = prompt('Escribe de nuevo');
}
if (color === 'verde') {
  alert('adivinaste el color!!!');
} */

/* OTRA POSIBLE SOLUCIÓN EJERCICIO #3
var color = '';
do {
  color = prompt('Escribe un color');
  if (color != 'verde') {
    alert ('ERROR')
  }
} while (color != 'verde');
alert('Has acertado');
 */

/* ciclo de animales
var numAnimales = parseInt(prompt('¿Cuantos animales?'));
var arrayAnimales = ['Calamar','Foca','Delfín','Pez león','León Marino','Cachalote','Ballena franca','Ancistrus común','Ballena azul','Anguila eléctrica','Medusa','Ballena gris','Pepino de mar','Sepia','Tiburón ballena','Sardinas','Gamba','Calderón común','Manatí','Trucha común','Cíclico nacarado','Pulpo','Pulpo de anillos azules','Tetra de Aleta Sangrante','Pez arquero','Pez cola de espada','Caracol de mar','Pez sapo peludo','Pez luna','Tiburón blanco','Arenques','Cíclido cebra','Dragón de mar','Carpas','Pez espada','Tortuga marina','Tetra cavernícola','Pez globo','Pez mariposa','Langosta','Carpa dorada','Pez loro','Atún','Cerdo marino','Salmón','Almeja','Coral','Rodaballo','Tortuga','Mojarrita','Pez óscar','Piraña','Marsopa','Pez volador','Boca de fuego','Tintorera','Pingüino','Bacalao','Nécora','Acara azul','Caballito de mar','Mejillón','Salmones','Estrella de mar','Orca','Pez telescopio','Pez oso','Erizo de mar','Surubí'];

for(var i = 0; i < numAnimales; i++) {
  var animal = arrayAnimales[i];
  console.log(animal);
}
console.log('FIN'); */

/* var almuerzo = '';
for(var i = 0; i <= 4; i++) {
  var ingrediente = prompt('Digita el ingrediente');
  if(i == 0){
    almuerzo = almuerzo + ingrediente
  }else{
    almuerzo = almuerzo + ', ' + ingrediente;
  }
}
console.log('Este es tu almuerzo: ' + almuerzo); */

function suma(val1, val2) {
  // var element = document.getElementById('unico');
  // element.style.background = 'green';
  return console.log(val1 + val2);
}

var element = document.getElementById('unico');

function test() {
  alert('pasaste el mouse');
}

function problema(etiqueta, color) {
  var nombreEtiqueta = document.getElementsByTagName(etiqueta);
  for (i = 0; i < nombreEtiqueta.length; i++) {
    nombreEtiqueta[i].style.color = color;
  }
}
