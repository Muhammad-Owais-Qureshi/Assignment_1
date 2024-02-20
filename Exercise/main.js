"use strict";
// Task 14 Guest List:
let Guest = ['Farooq', 'Mudabbir', 'Owais'];
console.log('Salam', "", Guest[0], ' i invite tonight dinner with me');
console.log('Salam', "", Guest[1], ' i invite tonight dinner with me');
console.log('Salam', "", Guest[2], ' i invite tonight dinner with me');
console.log(Guest.pop(), '"Sorry you can`t make it"');
// Total Guest invition
for (let i = 0; i < Guest.length; i++) {
    console.log(Guest[i], 'you invite tonight dinner with me');
}
