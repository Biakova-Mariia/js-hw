'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

let enterPassword = prompt('Введите пароль');

if (enterPassword === null) {
  console.log((message = 'Отменено пользователем!'));
} else {
  if (enterPassword === ADMIN_PASSWORD) {
    console.log((message = 'Добро пожаловать!'));
  } else {
    console.log((message = 'Доступ запрещен, неверный пароль!'));
  }
}
alert(message);
