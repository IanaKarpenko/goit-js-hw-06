/*Задание 10
Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть 
отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  // твой код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 
'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

*/

import { default as users } from "./users.js";

console.log('------------------task10 start-------------------');

const getSortedUniqueSkills = users => {
  return users.reduce((accum, user) =>
    [...accum, ...user.skills.filter(skill => typeof (accum.find(ac => ac === skill)) === 'undefined')], []).sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 
//'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


console.log('------------------task10 end---------------------');