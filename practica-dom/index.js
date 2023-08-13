function suma(val1, val2) {
  return val1 + val2;
}

var numero = 0;

function changeValue(valor) {
  numero = numero + valor;
  document.getElementById('prueba').innerHTML = numero;
}
