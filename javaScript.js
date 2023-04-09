// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const wallet = prompt("Введіть суму грошей в гаманці:");
const price = prompt("Введіть ціну однієї шоколадки:");

const numChocolates = Math.floor(wallet / price);
const change = wallet % price;

alert(`Ви можете купити ${numChocolates} шоколадок і у вас залишиться ${change} грн здачі.`);


// Запитай у користувача тризначне число і виведи його задом наперед.
//  Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const number = prompt("Введіть 3 - значне число");
const ones = number % 10; 

const tens = Math.floor(number / 10) % 10; 
const hundreds = Math.floor(number / 100); 

const reversedNumber = ones * 100 + tens * 10 + hundreds; 
alert("Ваше число навпаки " + reversedNumber);

// Користувач вказує обсяг флешки в Гб. 
// Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const flashMemory = prompt("Твій обсяг пам'яті флешки в Гб?");
const weigthFile = 820;
const numberOfFiles = Math.floor(flashMemory * 1024 / weigthFile);

alert("На твою флешку запишетья " + numberOfFiles + " файл/файлів");

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
// Вивести суму нарахованих відсотків.

const deposit = prompt("Cума вкладу на 2 місяці?");
const months = 2;
const percentages = 0.05; 

const totalOnDeposit = Math.floor(deposit * percentages * months / 12);

alert("Cума нарохування за 2 місяці " + totalOnDeposit + " грн");






