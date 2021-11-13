let time = Math.floor(Math.random() * 60);        // рандомно вираховуєм хвилину
document.writeln('Зараз ' + `${time}` + ' хвилина' + ' це ' + `${Math.trunc(time / 15.25 + 1)}` + ' чверть'); // відразу виводим результат, ділив на 15.25, аби 15, 30, 45 хвилини відносились до 1, 2, 3 чверті відповідно, а от з нульовою хвилиною, тут лажа
console.log(time);

let day = Math.floor(Math.random() * 31 + 1);    // Рандомно оприділяєм день від 1 до 31
let decade = Math.trunc((day - 1) / 10 + 1);     // Вичисляєм декаду місяця, можна замітити, що спершу додав одиницю до змінної day, а тут у формулі відняв, ну ми ж рахуєм по феншую, нульового дня небуває, а декада це 10 число включно, от і прийшлось відняти
decade = decade === 4 ? 3 : decade;                 // коригуєм декаду, якщо вона обрахувалася, як 4 (таке можливо в 31 день місяця), можливо такого робити не треба було, але я не найшов, чи існує 4 декада
//if (decade === 4) decade = 3;                       // це другий варіант зробити таке коригування
document.writeln('<br>' + 'Число місяця ' + `${day}` + ' відповідає ' + `${decade}` + ' декаді');  // виводим занчення
console.log(decade);

let test = false;
document.writeln(`<br> ${test} => `);
!test ? document.writeln('Вірно') : document.writeln('Неправильно');   // якщо не дорівнює true, 'Вірно', інакше 'Неправильно'.
test = true;
document.writeln(`<br> ${test} => `);
!test ? document.writeln('Вірно') : document.writeln('Неправильно');

let a = 0;
document.writeln(`<br> a = ${a} => `);
a !== 0 ? document.writeln('Вірно') : document.writeln('Невірно');
a = 1;
document.writeln(`<br> a = ${a} => `);
a !== 0 ? document.writeln('Вірно') : document.writeln('Невірно');
a = -3;
document.writeln(`<br> a = ${a} => `);
a !== 0 ? document.writeln('Вірно') : document.writeln('Невірно');
document.writeln(`<br>`);

let week_day = +prompt('Please enter the day number of the week');
switch (week_day) {
    case 1:
        document.write('У понеділок лекція на 19:45<br>')
        break;
    case 2:
        document.write('У вівторок практична на 20:00<br>')
        break;
    case 3:
        document.write('У середу лекція на 19:45<br>')
        break;
    case 4:
        document.write('У четвер практична на 20:00<br>')
        break;
    case 5:
        document.write('У пятницю лекція на 19:45<br>')
        break;
    case 6:
        document.write('У суботу English на 11:30<br>')
        break;
    case 7:
        document.write('У неділю халява<br>')
        break;
    default:
        document.write('Ви ввели якусь херню<br>')
        break;
}

let year = +prompt('Введіть рік');      // вводим рік
document.writeln(`<br>`);
let isLeapYear;                                 // нам потрібна буловська змінна для типу року
if (year % 4 === 0) {                           // не всі роки, які діляться на 4 є високосними, перевіряєм дальше
    if (year % 100 === 0) {                     // перевіряєм, чи він ще ділиться на 100
        isLeapYear = year % 400 === 0;          // якщо він ще й ділиться на 400 то він високосний, інакше звичайний
    } else isLeapYear = true;                   // всі інші роки, які діляться на 4 високосні
} else isLeapYear = false;                      // а решта років звичайні

document.writeln(`<br> Рік ${year} ${isLeapYear ? 'високосний' : 'звичайний'}<br>`);


let nameJS = prompt('Яка «офіційна» назва JavaScript?');
if (nameJS === 'ECMAScript') document.writeln('Правильно!');
else document.writeln('Не знаєте? ECMAScript!')

