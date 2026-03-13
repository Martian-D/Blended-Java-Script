// 1/з.д

// let userImput = prompt("Введите число");
// let number = Number(userImput);
// if (number === 10) {
//     alert("верно");
// } else {
//     alert("не верно");
// }

// 2/з.д

// const min = Math.floor(Math.random() * 59);
// if (min >= 0 && min <= 14) {
//     alert(min + " входить в першу чверть")
// } else if (min >= 15 && min <= 29) {
//     alert(min + " входить в другу чверть")
// } else if (min >= 30 && min <= 44) {
//     alert(min + " входить в третю чверть")
// } else if (min >= 45 && min <= 59) {
//     alert(min + " входить в четверту чверть")
// }

// 3/з.д

// let num = prompt("Введіть число від 1 до 4");
// let result;
// switch (num) {
//     case "1":
//         result = "зима";
//         break;
//     case "2":
//         result = "весна";
//         break;
//     case "3":
//         result = "літо";
//         break;
//     case "4":
//         result = "осінь";
//         break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// console.log(result);

// 4/з.д

// const totalMinutes = prompt("кількість хвилин");
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const time = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

// console.log(time);

// 5/з.д

// const login = prompt('Введите логин');
// console.log(login);
// if (login === 'Адмін') {
//   const passwort = prompt('Ввидить пороль');
//   if (passwort === 'Я головний') {
//     alert('Добрий день!');
//   } else {
//     alert('Невірний пароль!');
//   }
// } else if (login === '' || login === null) {
//   alert('Скасовано');
// } else {
//   alert('Я вас не знаю');
// }

// 6/з.д

// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// 7/з.д

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getNumbers(1, 50));

// 8/з.д

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//   }
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min('mam'));

// 9/з.д

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   }
//   return confirm('Ты совершеннолетний ?');
// }
// console.log(isAdult(17));

// 10/з.д

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);
