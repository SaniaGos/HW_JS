// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.color = 'red';
block.style.backgroundColor = 'blue';
block.style.fontSize = '16px';
document.body.appendChild(block);
let block2 = block.cloneNode(true);
document.body.appendChild(block2);
block.textContent = 'Some text';
block2.textContent = 'Hello Okten';


// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementsByClassName('menu');


for (let item of menu) {
    item.style.display = 'flex';
    item.style.justifyContent = 'space-evenly';
    item.style.listStyleType = 'none';
    for (const el of arr) {
        let tmp = document.createElement('li')
        tmp.textContent = el.toString();
        item.appendChild(tmp);
    }
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const el of coursesAndDurationArray) {
    let myDiv = document.createElement('div');
    myDiv.style.display = 'flex';
    myDiv.appendChild(document.createElement('p')).textContent = 'title => ' + el.title;
    myDiv.appendChild(document.createElement('p')).textContent = ', monthDuration => ' + el.monthDuration;
    document.body.appendChild(myDiv);
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const el of coursesAndDurationArray) {
    let myDiv = document.createElement('div');
    myDiv.classList.add('item');

    let title = document.createElement('h1');
    title.classList.add('heading');
    title.textContent = el.title;

    let description = document.createElement('p');
    description.classList.add('description');
    description.textContent = el.monthDuration;

    myDiv.appendChild(title);
    myDiv.appendChild(description);
    document.body.appendChild(myDiv);
}
