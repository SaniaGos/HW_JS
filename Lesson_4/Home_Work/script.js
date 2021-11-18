// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareRound(r) {
    return Math.PI * r ** 2
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylinder(h, r) {
    return squareRound(r) * 2 + (2 * Math.PI * r * h);  // взяв в дужки для зрозумілості
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function logArray(arr) {
    for (let element of arr) {
        document.writeln(element);
        console.log(element);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl3Li(text) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl(text, numOfLi) {
    document.write('<ul>');
    for (let i = 0; i < numOfLi; i++) document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createUlFromArr(arr) {
    document.write('<ul>');
    if (Array.isArray(arr)) arr.forEach(element => {                // перевіряєм чи вхідні дані є масивом
        document.write(`<li>${element}</li>`)
    })
    document.write('</ul>');
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function writeObjectFromArr(arrOfObject) {
    if (Array.isArray(arrOfObject)) arrOfObject.forEach(element => {
    document.write('<div>');
        document.write(`<p>Id: <b>${element.id}</b> </p>`);
        document.write(`<p>Name: <b>${element.name}</b> </p>`);
        document.write(`<p>Age: <b>${element.age}</b> </p>`);
    document.write('</div>');
    })
}

writeObjectFromArr(
    [{id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}]
);