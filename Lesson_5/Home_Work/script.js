// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
const areaRectangle = (a, b) => a * b;

let a = 5;
let b = 4;
console.log("Площа прямокутнику з сторонами " + a + " і " + b + " = " + areaRectangle(a, b));
document.write("Площа прямокутнику з сторонами " + a + " і " + b + " = " + areaRectangle(a, b) + '<br>');

// - створити функцію яка обчислює та повертає площу кола
const areaCircle = (r) => Math.round(Math.PI * r ** 2 * 100) / 100;

let r = 2;
console.log("Площа кола з радіусом " + r + " = " + areaCircle(r));
document.write("Площа кола з радіусом " + r + " = " + areaCircle(r) + '<br>');

// - створити функцію яка обчислює та повертає площу циліндру
const areaCylinder = (r, h) => areaCircle(r) * h;

let h = 5;
console.log("Площа кола з радіусом " + r + " і висотою " + h + " = " + areaCylinder(r, h));
document.write("Площа кола з радіусом " + r + ' і висотою ' + h + " = " + areaCylinder(r, h) + '<br>');

// - створити функцію яка приймає масив та виводить кожен його елемент
const arrWrite = (arr) => {
    if (Array.isArray(arr)) {
        arr.forEach(el => {
            console.log(el);
            document.write(el + '<br>');
        })
    }
}
arrWrite([5, 'hello', true, 456]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const textInTeg_p = (...text) => {
    text.forEach(text => {
        document.write(`<p>${text}</p>`)
    });
}
textInTeg_p('Hello', 'okten', 555);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const textInTeg_li = (text) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${i + 1} ${text}</li>`)
    }
    document.write('</ul>');
}
textInTeg_li('List')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const textInTeg_liDynamic = (text, nulOfLi = 0) => {
    document.write('<ul>');
    for (let i = 0; i < nulOfLi; i++) {
        document.write(`<li>${i + 1} ${text}</li>`)
    }
    document.write('</ul>');
}
textInTeg_liDynamic('List', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const primitivesInTeg_li = (arrOfPrimitives) => {
    if (!Array.isArray(arrOfPrimitives)) return;
    document.write('<ul>');
    arrOfPrimitives.forEach( primitive => document.write(`<li>${primitive}</li>`))
    document.write('</ul>');
}
primitivesInTeg_li(['Hello', 555, true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const showObject = (arrayOfObject) => {
    if (!Array.isArray(arrayOfObject)) return;
    arrayOfObject.forEach( obj => {
        document.write(`<div><b>id</b> - ${obj.id}, <b>ім'я</b> - ${obj.name}, <b>вік</b> - ${obj.age} </div>`)
    })
}
showObject([{id: 1, name: 'Oleksandr', age: 33},{id: 2, name: 'Vita', age: 25},{id: 3, name: 'Oleh', age: 30}]);