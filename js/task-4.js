/*Задание 4
Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  // твой код
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]*/

import { default as users } from "./users.js";

console.log('------------------task4 start-------------------');

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log('------------------task4 end---------------------');