let arr = ['hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]; // загнав зразу все в масив, аби зручніше виводити

console.log(arr);                   // виводим про всяк випадок наш масив, подивимся чи все на місці :)

for (const variable of arr) {
    console.log(variable);          // лайфхак спрацював
    document.writeln(variable);     // використав writeln, так виглядає краще, а то все злипається
    // alert(variable);             // з міркувань збереження нервів -- закоментував :)
}

// змінюєм наші змінні, ну типу елементи масиву
for (const num in arr) {            // використовується трохи інший запис, бо так нада
    arr[num] += 10;                 // подивимся, що буде з елементами масиву коли додамо до них 10
}

console.log(arr);                   // виводим масив
document.writeln('<br>');           // аби розділити рядки

// хотів створити функцію аби не повторювати код, але рано ще.
for (const variable of arr) {
    console.log(variable);          // тут все очікувано, до стрінгів додалося '10', як стрінг
    document.writeln(variable);     // до number додавання, як в матиматиці, о от з boolean цікавіше
    // alert(variable);             // тут все, як раніше
}

console.log(typeof (arr[arr.length - 1])); // з цікавості дивимся на що перетворився наш boolean при додавання до нього 10

let firstName, middleName, lastName;
firstName = 'Oleksandr';
middleName = 'Sergiovich';
lastName = 'Hutsenko';

let person = firstName + ' ' + middleName + ' ' + lastName;  // конкактинуєм
console.log(person);

let first_name, middle_name, age;
first_name = prompt('Your FirstName', 'Semen');  // дефолтне значення, для тих кому леньки вводити в бравзері
middle_name = prompt('Your MiddleName', 'Semenovich');
age = prompt('Your Age', '99');

document.writeln('<br>');           // аби розділити рядки
document.writeln(`Вітаю ${first_name} ${middle_name}. Тобі ${age} років. :)`) // виконуєм інтерполяцію

let a, b, c;
a = 100;
b = '100';
c = true;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

console.log(5 < 6);         //-> true
console.log(5 > 6);         // -> false
console.log(5 === 6);       // -> false
console.log(5 >= 6);        // -> false
console.log(10 === 10);     // -> true
console.log(10 == 10);      // -> true
console.log(10 < 10);       // -> false
console.log(10 > 10);       // -> false
console.log(10 !== 10);     // -> false
console.log(123 === '123'); // -> false
console.log(123 == '123');  // -> true

let str = "20";
let num = 5;
document.writeln('<br>');
document.write(str + num + "<br/>");    // ну цей результат був очікуваним, конкантинація строк, якщо в доданках є хоть одна строка
document.write(str - a + "<br/>");      // наступні результати неочікувані, думаю, що коли інтерпритатор бачить матиматичну дію(крім додавання), то
document.write(str * "2" + "<br/>");    // перевіряє чи в цих діях беруть участь цифри, навіть, якщо це стрінгова цифра, то він її перетрорює
document.write(str / 2 + "<br/>");      // в намбер і виконує дію, в іншому випадку видає NaN




