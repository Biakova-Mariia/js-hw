'use strict';

const credits = 23580;

const pricePerDroid = 3000;

let totalPrice;

const qualityOfDroid = prompt('Сколько дроидов хотите купить?');

if (qualityOfDroid === null) {
  console.log('Отменено пользователем!');
} else {
  if (Number.isNaN(Number(qualityOfDroid))) {
    alert('Введите число');
  } else {
    if ((totalPrice = qualityOfDroid * pricePerDroid > credits)) {
      console.log('Недостаточно средств на счету!');
    } else {
      if ((totalPrice = qualityOfDroid * pricePerDroid <= credits))
        console.log(
          `Вы купили ${qualityOfDroid} дроидов, на счету осталось ${credits -
            totalPrice} кредитов.`,
        );
    }
  }
}
