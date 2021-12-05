// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
let rules = document.getElementById('rules');

console.log(content.textContent);

// -- отримує текст з блоку з id "rules"
console.log(rules.textContent);

// -- замініть текст параграфа з id 'content' на будь-який інший
content.textContent = 'some text';
console.log(content.textContent);

// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.textContent = 'other text';
console.log(rules.textContent);

// -- змініть кожному елементу колір фону на червоний
content.style.setProperty('background', 'red');
rules.style.setProperty('background', 'red');

// -- змініть кожному елементу колір тексту на синій
content.style.color = 'blue';
rules.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const obj of document.getElementsByClassName('fc_rules')) {
    obj.style.color = 'red';
}