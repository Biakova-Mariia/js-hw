'use strict';

const credits = 23580;

const pricePerDroid = 3000;

const qualityOfDroid = prompt('Сколько дроидов хотите купить?');

if (qualityOfDroid === null) {
  console.log('Отменено пользователем!');
} else {
  if (Number.isNaN(Number(qualityOfDroid))) {
    alert('Введите число');
  } else {
    let totalPrice = qualityOfDroid * pricePerDroid;
    if (totalPrice > credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      console.log(
        `Вы купили ${qualityOfDroid} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`,
      );
    }
  }
}
