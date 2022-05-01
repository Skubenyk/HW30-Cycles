// *Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

for (let i = 2; i <= 9; i++) {
  for (let n = 1; n <= 10; n++) {
    console.log(i * n);
  }
}

//* Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let age,
  success = false;
do {
  age = +prompt("Скільки вам років?");
  succces = age && typeof age === "number" && !isNaN(age) && age >= 0;
  console.log(success);
} while (!success);
const people = {
  type:
    age <= 11
      ? "Дитина"
      : age <= 17
      ? "Підліток"
      : age <= 59
      ? "Дорослий"
      : "Пенсіонер",
};
console.log(people);

// *Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let numeric = +prompt("Введіть число від 0 до 9");

switch(numeric) {
  case 1:
    console.log('!');
    break;
  case 2:
    console.log('@');
    break;
  case 3:
    console.log('#');
    break;
  case 4:
    console.log('$');
    break;
  case 5:
    console.log('%');
    break;
  case 6:
    console.log('^');
    break;
  case 7:
    console.log('&');
    break;
  case 8:
    console.log('*');
    break;
  case 9:
    console.log('(');
    break;
  case 0:
    console.log(')');
    break;
  default:
    console.log('Неправильно! Ввести необхідно число від 0 до 9');
    break;
};

//* Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let calculationSum = (value1, value2, value3, value4, value5, value6, value7, value8, value9, value10)=> {
  return value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10 ;
}

let resultSum = calculationSum(1,2,3,4,5,6,7,8,9,0);
console.log(resultSum);

// *Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//* від 200 до 300 - знижка буде 3%;
//* від 300 до 500 - 5%;
//* від 500 і вище - 7%.

let sum = +prompt("Яка сума вашої покупки?", 0);
let resultSum;

  sum < 200
  ? (resultSum = 'Знижки не має!')
  : sum >= 200 && sum < 300
  ? (resultSum = sum - (3 * sum) /100)
  : sum >= 300 && sum < 500
  ? (resultSum = sum - (5 * sum) /100)
  : sum >= 500
  ? (resultSum = sum - (7 * sum) /100)
  : (resultSum = sum);

console.log(`Сума зі знижкою: ${resultSum}`);


