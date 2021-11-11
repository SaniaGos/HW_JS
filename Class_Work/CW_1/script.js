let arr = [];                                               // ініціалізуєм масив
for (let num = 0; num < 10; num++) {                        // заповнюєм масив через цикл
    arr.push(Math.floor(Math.random() * 100 - 50));      // рандомно присвоюєм знасення
}
console.log(arr);                                           // виводим масив

let result = 0;                                             // ініціалізуєм результат
for (const num of arr) {
    result += num;                                          // сумуєм елементи масиву
}
console.log(result);                                        // виводим суму

let book_1 = {name: null, pages: null, genre: null};
let book_2 = {name: null, pages: null, genre: null, authors: []};

let books = [{name: 'Story', pages: 109, genre: 'stories', authors: ['some authors', ' another authors']},
    {name: 'Harry Potter', pages: 339, genre: 'novel', authors: ['J.K. Rowling']}];

for (const book of books) {
    console.log(book);
    document.writeln(`Book name: <b>${book.name}</b><br>`);
    document.writeln(`Book pages: <b>${book.pages}</b><br>`);
    document.writeln(`Book genre: <b>${book.genre}</b><br>`);
    document.writeln(`Book authors: <b>${book.authors}</b><br><br>`);
}

let height = 23, width = 10, s;
console.log(s = height * width);

let heightC = 10, dC = 4, v;
console.log(v = Math.PI * dC ** 2 / 4 * heightC);

let n = 3, m = 4, k;
console.log(k = Math.sqrt(n ** 2 + m ** 2));            // таким трикутником завжди на будовах шукають прямий кут, сторони мають відповідати (3x, 4x, 5x)