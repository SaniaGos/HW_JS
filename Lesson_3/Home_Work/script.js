// --створити масив з:
// - з 5 числових значень
let arr_num = [45.5, 5454, 154, 781, 56];
console.log(arr_num);

// - з 5 стічкових значень
let arr_str = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
console.log(arr_str);

// - з 5 значень стрічкового, числового та булевого типу
let arr_sb = [true, 'lorem', false, 'dolor', 'sit', true];
console.log(arr_sb);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [];
arr[4] = true;
arr[2] = 'lorem';
arr[1] = 100;
console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Some text</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Some text ${i + 1}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<h1>Other text</h1>`);
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;
while (i < 20) {
    document.write(`<h1>Other text ${i + 1}</h1>`);
    i++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr_num_2 = [45.5, 5454, 154, 781, 56, 75, 15, 666, 123, 1.5];
for (const num of arr_num_2) {
    console.log(num);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr_str_2 = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipisicing', 'elit.', 'Blanditiis,', 'labore!'];
for (const num of arr_str_2) {
    console.log(num);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr_sm_2 = ['Lorem', 123, true, 'sit', 'amet,', false, [11, 22], 'EW', 15.25, 'labore!'];
for (const num of arr_sm_2) {
    console.log(num);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const num of arr_sm_2) {
    if (typeof (num) === 'boolean') console.log(num);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const num of arr_sm_2) {
    if (typeof (num) === 'number') console.log(num);
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const num of arr_sm_2) {
    if (typeof (num) === 'string') console.log(num);
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr_empty = [];
arr_empty[0] = 'lorem';
arr_empty[1] = 4545;
arr_empty[3] = '4545';
arr_empty[4] = true;
arr_empty[5] = 112.58;
arr_empty[6] = false;
arr_empty[7] = [true, 15];
arr_empty[8] = 'amet';
arr_empty[9] = 555;

for (const element of arr_empty) {
    console.log(element);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.writeln(i.toString());
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write('<br>');
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.writeln(i.toString());
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write('<br>');
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.writeln(i.toString());
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write('<br>');
for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        console.log(i);
        document.writeln(i.toString());
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write('<br>');
for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i);
        document.writeln(i.toString());
    }
}