// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
((...str) => {
    str.forEach(el => {
        console.log(el.length);
        document.write(`${el.length}<br>`);
    })
})('hello world', 'lorem ipsum', 'javascript is cool');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
((...str) => {
    str.forEach(el => {
        console.log(el.toUpperCase());
        document.write(`${el.toUpperCase()}<br>`);
    })
})('hello world', 'lorem ipsum', 'javascript is cool');

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
((...str) => {
    str.forEach(el => {
        console.log(el.toLowerCase());
        document.write(`${el.toLowerCase()}<br>`);
    })
})('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
((str) => {
    str = str.replace(/ +/g, ' ').trim();
    console.log(str);
    document.write(`${str}<br>`);
})(' dirty     string   ');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать где сидит фазан';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
function stringToArray(str) {
    let arr = str.split(' ');
    console.log(arr);
    document.write(`${arr}<br>`);
}

stringToArray('Каждый охотник желает знать где сидит фазан');


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
function delete_characters(str, length) {
    return str.slice(0, length);
}
console.log(delete_characters('Каждый охотник желает знать', 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
function  insert_dash(str){
    return str.toUpperCase().replaceAll(' ', '-');
}
console.log(insert_dash("HTML JavaScript PHP"));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function toUpperFirstSymbol(str){
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(toUpperFirstSymbol('яка приймає рядок як аргумент'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
function capitalize(str){
    return str.split(' ').map(el => toUpperFirstSymbol(el)).join(' ');
}
console.log(capitalize('яка приймає рядок як аргумент'));