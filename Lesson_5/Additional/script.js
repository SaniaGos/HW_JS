// - Дано натуральное число n. Выведите все числа от 1 до n.
const showNaturalNum = (n) => {
    if (!(typeof (n) === 'number')) return;
    for (let i = 0; i < n; i++) {
        document.write(`${i + 1}, `);
        console.log(i + 1);
    }
    document.write('<br>');
}
showNaturalNum(10);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const showNumberBetween = (A, B) => {
    const showNum = (i) => {
        document.write(`${i}, `);
        console.log(i);
    }
    if (A < B) for (let i = A; i <= B; i++) showNum(i);
    else if (A > B) for (let i = A; i >= B; i--) showNum(i);
    else showNum(A);
    document.write('<br>');
}
showNumberBetween(5, 10);
showNumberBetween(5, -10);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
const arrSwap = (arr, num) => {
    if (!Array.isArray(arr) || arr.length < num) return;
    let tmp = arr[num + 1];
    arr[num + 1] = arr[num];
    arr[num] = tmp;
}
let arr = [9, 8, 0, 4];
arrSwap(arr, 0);
console.log(arr);
arr = [9, 8, 0, 4];
arrSwap(arr, 1);
console.log(arr);
arr = [9, 8, 0, 4];
arrSwap(arr, 2);
console.log(arr);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const arrZeroReplace = (arr) => {       // цей варіант виглядає красиво, але дуже затратний по ресурсам
    if (!Array.isArray(arr)) return;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);   // видаляєм елемент з масиву;
            arr.push(0);        // поміщаєм його в кінець
            length--;           // вкорочуєм ітерацію, для чого нам перевіряти елементи, які і так нульові;
            i--;                // так як внас масив зсунувся, то нам треба перевірити щераз ту саму позицію
        }
    }
}
arr = [1,0,6,0,4,0,0,3];
arrZeroReplace(arr);
console.log(arr)

const arrZeroReplaceV2 = (arr) => {         // цей варіант набагато економніший до ресурсів
    if (!Array.isArray(arr)) return;
    let tmpArr = new Array(arr.length);     // створюємо новий масив довжиною входящого
    let i = 0;                              // запускаєм ітератор для цього масиву
    arr.forEach(el => {
        if (el !== 0){                      // всі елементи відмінні від нуля записуємо в новий масив по порядку
            tmpArr[i] = el;
            i++;                            // не забуваєм при цьому зробити інкрементацію
        }
    })
    for ( ; i < tmpArr.length; i++) {       // і останнє, решта елементів заповняємо нулями
        tmpArr[i] = 0;
    }
    for (let i in tmpArr) {                 // а не остайнє, це перезаписуєм вхідний масив
        arr[i] = tmpArr[i];                 // на жаль запис arr = tmpArr на працює, бо у нас в функції копія ссилки, зміна якої нам нічого не дасть
    }
}
arr = [1,0,6,0,4,0,0,3];
arrZeroReplaceV2(arr);
console.log(arr)
