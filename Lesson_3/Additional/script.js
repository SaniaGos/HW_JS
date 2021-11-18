console.log('1. Створити пустий масив та :');
console.log('a. заповнити його 50 парними числами за допомоги циклу.');
let i = 0, arr = [];
while (i < 50) {
    let num = Math.floor(Math.random() * 100);
    if (!(num % 2)) {
        arr[i] = num;
        i++;            // саме тут ми робим ітерацію, якщо її виконаєм за межами if, то масив наповниться повторювальними елементами
    }
}
console.log(arr);
console.log('b. заповнити його 50 непарними числами за допомоги циклу.');
i = 0;
while (i < 50) {
    let num = Math.floor(Math.random() * 100);
    if (num % 2) {
        arr[i] = num;
        i++;
    }
}
console.log(arr);
console.log('c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)');
console.log('видаляєм елеманти масиву');
arr.splice(0, arr.length);                  // видаляєм елеманти масиву
console.log(arr);                                // перевіряєм
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * 1000 - 500);
}
console.log(arr);

console.log('d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)');
console.log('видаляєм елеманти масиву');
arr.splice(0, arr.length);
console.log(arr);                                // перевіряєм
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * 724 + 8);
}
console.log(arr);

console.log('2. Вивести за допомогою console.log кожен третій елемен');
for (let i = 0; i < arr.length; i += 3) {
    console.log(arr[i]);
}
console.log('3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.');
for (let i = 0; i < arr.length; i += 3) {
    if (!(arr[i] % 2)) console.log(arr[i]);
}
console.log('4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив');
let new_arr = [];
for (let i = 0; i < arr.length; i += 3) {
    if (!(arr[i] % 2)) {
        console.log(arr[i]);
        new_arr.push(arr[i]);
    }
}
console.log(new_arr);
console.log('5. Вивести кожен елемент масиву, сусід справа якого є парним');
console.log('EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56');
console.log(arr);
for (let i = 0; i < arr.length - 1; i++) {               // виконуєм arr.length - 1, для того аби не вийти за межі масиву, бо будем перевіряти наступний елемент від ітерованого
    if (!(arr[i + 1] % 2)) console.log(arr[i]);
}

console.log('6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.');
console.log(arr = [100, 250, 50, 168, 120, 345, 188]);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(`середній чек ${Math.round(sum / arr.length * 100) / 100}`);

console.log('7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.');
let arr_source = [], arr_destination = [];
for (let i = 0; i < 10; i++) {
    arr_source[i] = Math.floor(Math.random() * 100);
}
arr_source.forEach((element, index) => {
    arr_destination[index] = element * 5
});  // ох і замудрив
console.log(arr_source);
console.log(arr_destination);


console.log('8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.');
let arr_sm = ['Lorem', 123, true, 'sit', 99, false, [11, 22], 'EW', 15.25, 'labore!'], arr_sm_num = [];
arr_sm.forEach((element) => {
    if (typeof (element) === 'number') arr_sm_num.push(element)
});
console.log(arr_sm);
console.log(arr_sm_num);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];

console.log(usersWithId);
for (let user of usersWithId){                          // завдання не просте, зробив всередині зразу оператор копіювання, бо обєкти не копіюються, копіюються ссилки
    for (let address of citiesWithId){
        if(user.id === address.user_id) {
            usersWithCities.push(
                {id: user.id, name: user.name, age: user.age, status: user.status,
                    address: {user_id: address.user_id, country: address.country, city: address.city} }
            )
        }
    }
}
console.log(usersWithCities);

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

//
console.log('- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.');
let arr_num = [];
for (let i = 0; i < 10; i++){
    arr_num[i] = Math.floor(Math.random() * 100);
}
console.log(arr_num);
arr_num.forEach(element => {if (!(element % 2)) console.log(element) });

//
console.log(' Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.');
let arr_num_destination = [];
arr_num.forEach(element => {arr_num_destination.push(element)});
console.log(arr_num_destination);

console.log(` - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.`);
let ch = [ 'a', 'b', 'c'], word = "";
for (let i = 0; i < ch.length; i++){
    word += ch[i];
}
console.log(word);

console.log(`- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.`);
word = "";
let n = 0;
while (n < ch.length){
    word += ch[n];
    n++;
}
console.log(word);

console.log(`- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.`);
word = "";
for (let char of ch){
    word += char;
}
console.log(word);



