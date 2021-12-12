// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function classListOfDocument(obj, emptyList = []) {         // оно работає !!!, передаємо звідки хочемо рахувати класи
    //debugger;
    if (obj.classList) {                                          // тут ми перевіряємо батька і листаємо його класи
        for (const elClass of obj.classList) {
            emptyList.push(elClass);
        }
    }
    if(obj.children){                                             // а тут ми перевіряємо дітей і потім листаєм їх класи в рекурсії
        for (const child of obj.children) {
            classListOfDocument(child, emptyList);                // тут саме запуск рекурсії
        }
    }
    //return emptyList;                                             // вертаєм готовий список, є одна лажа, це повторювані класи, можна створити ще одну функцію, яка відфільтрує повторювальні елементи, але мені влом :)
    return emptyList.filter((element, index, array) => array.indexOf(element) === index);       // не, всетаки зробив фільтрацію дублікатів
}

let list = classListOfDocument(document.body);

console.log(list);