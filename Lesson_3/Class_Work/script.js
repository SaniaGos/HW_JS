// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr_num = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let i = 0;
while (i < arr_num.length) {
    console.log(arr_num[i]);
    i++;
}
// 2. перебрати його циклом for
for (let i = 0; i < arr_num.length; i++) {
    console.log(arr_num[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr_num.length) {
    if (i % 2 && typeof (arr_num[i]) === 'number') console.log(arr_num[i]);
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arr_num.length; i++) {
    if (i % 2 && typeof (arr_num[i]) === 'number') console.log(arr_num[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr_num.length) {
    if (!(arr_num[i] % 2) && typeof (arr_num[i]) === 'number') console.log(arr_num[i]);
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr_num.length; i++) {
    if (!(arr_num[i] % 2) && typeof (arr_num[i]) === 'number') console.log(arr_num[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i in arr_num) {
    if (!(arr_num[i] % 3) && typeof (arr_num[i]) === 'number') arr_num[i] = 'okten';
}
console.log(arr_num);

// 8. вивести масив в зворотньому порядку.
for (let i = arr_num.length - 1; i >= 0; i--) {
    console.log(arr_num[i]);
}


console.log('всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)')
let arr_num_1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arr_num_1);

console.log('перебрати його циклом while (с заду на перед)');
i = arr_num.length - 1;
while (i >= 0) {
    console.log(arr_num_1[i]);
    i--;
}

console.log('перебрати його циклом for (с заду на перед)');
for (let i = arr_num_1.length - 1; i >= 0; i--) {
    console.log(arr_num_1[i]);
}

console.log('перебрати циклом while та вивести  числа тільки з непарним індексом (с заду на перед)');
i = arr_num.length - 1;
while (i >= 0) {
    if (i % 2  && typeof (arr_num_1[i]) === 'number') console.log(arr_num_1[i]);
    i--;
}

console.log('перебрати циклом for та вивести  числа тільки з непарним індексом (с заду на перед)');
for (let i = arr_num_1.length - 1; i >= 0; i--) {
    if (i % 2  && typeof (arr_num_1[i]) === 'number') console.log(arr_num_1[i]);
}

console.log('перебрати циклом while та вивести  числа тільки парні  значення (с заду на перед)');
i = arr_num.length - 1;
while (i >= 0) {
    if (!(arr_num_1[i] % 2) && typeof (arr_num_1[i]) === 'number') console.log(arr_num_1[i]);
    i--;
}

console.log('перебрати циклом for та вивести  числа тільки парні  значення (с заду на перед)');
for (let i = arr_num_1.length - 1; i >= 0; i--) {
    if (!(arr_num_1[i] % 2)  && typeof (arr_num_1[i]) === 'number') console.log(arr_num_1[i]);
}

console.log('замінити кожне число кратне 3 на слово "okten" (с заду на перед)');
console.log('before');
console.log(arr_num_1);
for (let i = arr_num_1.length - 1; i >= 0; i--) {
    if (!(arr_num[i] % 3)) arr_num_1[i] = 'okten';
}
console.log('after');
console.log(arr_num_1);