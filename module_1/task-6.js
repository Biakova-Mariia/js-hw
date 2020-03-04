'use strict';
let input;
let total = 0;
do {
  input = prompt('Введите чило');

  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    alert((total += Number(input)));
  }
} while (input !== null);
{
  alert(`Общая сумма чисел равна ${total}`);
}
