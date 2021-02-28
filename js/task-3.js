/*Задание 3
Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  // твой код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]*/

import { default as users } from "./users.js";

console.log('------------------task3 start-------------------');

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === 'male').map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


console.log('------------------task3 end---------------------');