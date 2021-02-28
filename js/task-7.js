/*Задание 7
Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  // твой код
};

console.log(calculateTotalBalance(users)); // 20916 */

import { default as users } from "./users.js";

console.log('------------------task7 start-------------------');

const calculateTotalBalance = users => {
  return users.reduce((accum, user) => accum + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

console.log('------------------task7 end---------------------');