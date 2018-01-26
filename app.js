var isValidCard = function() { // funcion que valida el campo insertado y si el numero de tarjeta es valido segun el algoritmo de Luhn
  var userInput = '';
  var letras = /\D/;
  var result = 0;

  do { // loop para asegurar que el usuario entre un string de numeros, que no sea vacio y que no contenga letras
    userInput = prompt('Indique numero de tarjeta.');
    if (userInput === '') {
      alert('Debes escribir algo, no lo dejes en blanco.');
    } else if (letras.test(userInput)) {
      alert('No puedes usar letras.');
    }
  } while (userInput === '' || letras.test(userInput));

  var arrInv = [];
  for (var i = 0; i < userInput.length; i++) { // itera por cada caracter del string, los invierte de posicion en un nuevo array, y los convierte a numeros enteros para poder operar con ellos mas adelante
    arrInv.unshift(parseInt(userInput[i]));
  }
  arrInv.unshift('N°');// añade un caracter en la posiion 0 del string para asi tener los numeros en el orden que se necesitan y poder ignorar la posicion 0
  console.log(arrInv);
  for (var j = 1; j < arrInv.length; j++) {
    if ((j % 2) !== 0) { // si la posicion no es par, se suma a la variable resultado
      result += arrInv[j];
    } else {
      if ((arrInv[j] * 2) >= 10) { // si la poscion del caracter es par y multiplicado por 2 es mayor a 10
        var num = (arrInv[j] * 2).toString();
        result += parseInt(num[0]) + parseInt(num[1]); // se le suma a resultado es la suma de lso dos caracteres que componen la multiplicacion por 2
      } else {
        result += (arrInv[j] * 2); // si la multiplicacion por 2 es menor a 10, se suma ese numero a resultado
      }
    }
  }

  if ((result % 10) === 0) { // si el resultado modulo de 10 es 0, es una tarjeta valida
    alert('Tarjeta valida');
  } else { // si el resultado modulo de 10 es 0, es una tarjeta invalida
    alert('Tarjeta Invalida');
  }
};
isValidCard();
