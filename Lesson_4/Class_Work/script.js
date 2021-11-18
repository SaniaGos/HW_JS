// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(num_1, num_2, num_3) {
    let min;
    if (num_1 < num_2 && num_1 < num_3) min = num_1;
    else if (num_2 < num_1 && num_2 < num_3) min = num_2;
    else min = num_3;
    console.log(min);
    document.writeln(min);
}

min(9, 55, 8,)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(num_1, num_2, num_3) {
    let max;
    if (num_1 > num_2 && num_1 > num_3) max = num_1;
    else if (num_2 > num_1 && num_2 > num_3) max = num_2;
    else max = num_3;
    console.log(max);
    document.writeln(max);
}

max(9, 55, 8,)

// - створити функцію яка повертає найбільше число з масиву
function arrMax(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    if (Array.isArray(arr)) {
        arr.forEach(element => {
            if (max < element) max = element
        });
    }
    return max;
}

console.log(arrMax([5, 11, 45, 9]));

// - створити функцію яка повертає найменьше число з масиву
function arrMin(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    if (Array.isArray(arr)) {
        arr.forEach(element => {
            if (min > element) min = element
        });
    }
    return min;
}

console.log(arrMin([50, 11, -45, 91]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function arrSum(arr) {
    let sum = 0;
    if (Array.isArray(arr)) {
        arr.forEach(element => {
            sum += element
        });
    }
    return sum;
}

console.log(arrSum([50, 11, 45, 91]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrMean(arr) {
    let sum = 0;
    if (Array.isArray(arr)) {
        arr.forEach(element => {
            sum += element
        });
    }
    return Math.round(sum / arr.length * 100) / 100;
}

console.log(arrMean([50, 11, 45, 91]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMaxNum(num) {
    console.log(arrMax([...arguments]));        // функціїї мін і мах приймають масиви, отже аргумент перетворюєм на масив (перший варіант)
    return arrMin(Array.from(arguments));           // другий варіант
}

console.log(minMaxNum(50, 11, -45, 91));

// - створити функцію яка заповнює масив рандомними числами
function arrRand(arr, numOfElements, limitMin = 0, limitMax = 100) {            // написав універсальну фу-ю для ранд
    limitMax++;
    if (Array.isArray(arr)) {
        for (let i = 0; i < numOfElements; i++) {
            arr.push(Math.floor(Math.random() * (limitMax + limitMin * -1) - limitMin * -1));
        }
    }
    return arr;
}
console.log(arrRand([], 10));
console.log(arrRand([], 10, -25, 50));
console.log(arrRand([], 10, 30, 50));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function arrReverse(arr){
    let tmp = [];
    if (Array.isArray(arr)) {
        for (let el of arr) {
            tmp.unshift(el);
        }
    }
    return tmp;
}
console.log(arrReverse([10,20,30,40,50]));