// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let main_header = document.getElementById('main_header');
main_header.classList.add('main_header');
// b) робить шириниу елементу ul 400px
main_header.style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
for (const listElement2Element of listElement2) {
    console.log(listElement2Element.textContent);
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
let elLi = document.getElementsByTagName('li');
for (const elLiElement of elLi) {
    elLiElement.style.backgroundColor = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let elA = document.getElementsByTagName('a');
for (const elAElement of elA) {
    elAElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const elAElement of elA) {
    if (elAElement.textContent === 'link3') elAElement.style.fontSize = '40px';
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const elAElement of elA) {
    elAElement.classList.add('element_' + elAElement.textContent);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub_header = document.getElementsByClassName('sub-header');
for (const subHeaderElement of sub_header) {
    subHeaderElement.style.backgroundColor = prompt('Enter background color: (red, green, blue ...)');
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const subHeaderElement of sub_header) {
    if (subHeaderElement.textContent === 'content 2 segment') subHeaderElement.style.color = prompt('Enter text color: (red, green, blue ...)');
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName('content_1');
for (const content1Element of content_1) {
    content1Element.textContent = prompt('Please enter some text');
}
// l) отримати елементи p та змінити їм padding на 20px
let elP = document.getElementsByTagName('p');
for (const elPElement of elP) {
    elPElement.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (const text2Element of text2) {
    text2Element.textContent = 'sep-2021';
}