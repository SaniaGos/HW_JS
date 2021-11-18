// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function concatEveryone() {
    return Array.from(arguments).join(', ');
}

console.log(concatEveryone(12, true, 'hello', {age: 15, name: 'Sasa'}));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function sumElementArr(arr_1, arr_2) {
    let tmp = [];
    if (Array.isArray(arr_1) && Array.isArray(arr_2)) {
        let size = arr_1.length > arr_2.length ? arr_1.length : arr_2.length;
        for (let i = 0; i < size; i++) {
            tmp.push((arr_1[i] ||= 0) + (arr_2[i] ||= 0));          // тут виконана хитра перевірка на наявність елементу в масиві
        }
    }
    return tmp;
}

console.log(sumElementArr([1, 2, 3, 4], [2, 3, 4, 5]));              // виконує поставлене завдання
console.log(sumElementArr([1, 2, 3, 4], [2, 3, 4, 5, 10, 12]));        // працює навіть з масивами різної довжини
console.log(sumElementArr(['Hello', undefined, 3, 4], [' okten', 3, 4, true, 10, 'some text']));      // а тут взагалі треш і воно працює, як треба

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function objectKeys(objectArr) {
    let tmp = [];
    if (Array.isArray(objectArr)) {
        objectArr.forEach(element => {
            Object.keys(element).forEach(el => {
                tmp.push(el)
            });
        })
    }
    return tmp;
}
console.log(objectKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function objectValues(objectArr) {
    let tmp = [];
    if (Array.isArray(objectArr)) {
        objectArr.forEach(element => {
            Object.values(element).forEach(el => {
                tmp.push(el)
            });
        })
    }
    return tmp;
}
console.log(objectValues([{name: 'Dima', age: 13}, {model: 'Camry'}]))
