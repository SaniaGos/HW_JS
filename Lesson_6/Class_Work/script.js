// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
function nameNormalize(str) {
    return str.replace(/[\s\-_.=+]+/g, ' ').trim();
}

console.log(nameNormalize('...Harry.....Potter    '));
console.log(nameNormalize('____Harry==      ==Potter  ...'));
console.log(nameNormalize('++++++Harry_____Potter======'));
console.log(nameNormalize('----Harry-----+++===....+---Potter-----'));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function fillArrRand(numOfElements, limitMin = 0, limitMax = 100) {            // написав універсальну фу-ю для ранд
    let arr = [];
    limitMax++;
    for (let i = 0; i < numOfElements; i++) {
        arr.push(Math.floor(Math.random() * (limitMax + limitMin * -1) - limitMin * -1));
    }
    return arr;
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(fillArrRand(20).sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let arr = fillArrRand(20);
console.log(arr);
console.log(arr.filter(a => a % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
arr = fillArrRand(20);
console.log(arr);
console.log(arr.map(a => a.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
function mySort(arr, direction = 'asc') {
    return direction.includes('desc') ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b);
}
arr = fillArrRand(20);
console.log(arr);
console.log(mySort(arr));
console.log(mySort(arr, 'desc'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((a) => a.monthDuration > 5));
