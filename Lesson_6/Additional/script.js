// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
function cutString(str, numOFCut) {
    let tmp = [];
    for (let i = 0; i < str.length; i++) {
        if (i % numOFCut === 0) {
            tmp.push(str.slice(i, (i + numOFCut)));
        }
    }
    return tmp;
}

document.writeln(cutString('наслаждение', 3)) // [нас,лаж,ден,ие]

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
function emailValidator(str) {                                          // функція не досконала, але програму мінімум робить
    str.toLowerCase();                                                  // робим емеіл не чутливим до регістру
    if (str[0] === '.' || str[str.length - 1] === '.') return false;    // якщо десь по краях є крапка, емеіл не валідний
    let rememberSymbolPos = 0;                                          // створюєм запамятовувальну позицію спец символа (крапки або равлика)
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.' || str[i] === '@') {                          // перевіряєм чи елемент належить до спец символа
            if ((rememberSymbolPos + 1) === i) return false;            // якщо так, то відразу перевіряєм чи попередній символ також спец, якщо так, емеіл не валідний
            else rememberSymbolPos = i;                                 // інакше перезаписуєм позицію спец символа
        } else if (str[i] === ' ') return false;                          // і на останнє, якщо в емеіл є пробіл від зразу не валідний
    }
    return true;
}

console.log(emailValidator('someemail@gmail.com'));
console.log(emailValidator('someeMAIL@gmail.com'));
console.log(emailValidator('someeMAIL@i.ua'));
console.log(emailValidator('some.email@gmail.com'));
console.log(emailValidator('some.ema il@gmail.com'));       // пробіл => false
console.log(emailValidator('some.email@@gmail.com'));       // два равлика підряд => false
console.log(emailValidator('some..email@gmail.com'));       // дві крапки підряд => false

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
function count(str, stringSearch) {
    let i = 0, numOfSearch = 0;
    if (!stringSearch) return numOfSearch;
    while (true) {
        if (!str.includes(stringSearch, i)) return numOfSearch;
        i = str.indexOf(stringSearch, i);
        numOfSearch++;
        i += stringSearch.length;
    }
}

console.log(count('Lorem ipsum dolor sit amet.', 'o'));
console.log(count('sa sa sa sa sa', 'sa'));
console.log(count('sa sa sa sa sa', ''));


let symbol = "о", str = "Астрономия это наука о небесных объектах";
document.write('<br>');
document.writeln(count(str, symbol)); // 5

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
function cutString_(str, n){
    let newStr = '';
    str.split(' ').map((val, i) => {
        if (i < n) newStr += ` ${val}`;
    })
    return newStr;
}
str = "Сила тяжести приложена к центру масс тела";
document.write('<br>');
document.writeln(cutString_(str, 5)) // 'Сила тяжести приложена к центру'