// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

const arr = [
    new User(1, 'Vasia', 'Pupkin', 'vasia@gmail.com', '0661234567'),
    new User(22, 'Igor', 'Zuk', 'igor@gmail.com', '066154567'),
    new User(35, 'Maria', 'Radel', 'maria@gmail.com', '0661234545'),
    new User(41, 'Sasha', 'Babiy', 'sasha@gmail.com', '0981234567'),
    new User(16, 'Ivan', 'Kogyt', 'ivan@gmail.com', '0671254454'),
    new User(6, 'Olia', 'Ivanov', 'olia@gmail.com', '0981444567'),
    new User(71, 'Tanya', 'Sidorov', 'tanya@gmail.com', '0661255567'),
    new User(83, 'Oleg', 'Tsoy', 'oleg@gmail.com', '0661234444'),
    new User(9, 'Ivan', 'Dyda', 'ivan_d@gmail.com', '0661234557'),
    new User(12, 'Alina', 'korol', 'alina@gmail.com', '0660004567')
];
console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let new_arr = arr.filter(u => u.id % 2 === 0);
console.log(new_arr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

arr.sort((a, b) => a.id - b.id);
console.log(arr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
const clientArr = [
    new Client(1, 'Vasia', 'Pupkin', 'vasia@gmail.com', '0661234567', ['food', 'toy', 'car']),
    new Client(22, 'Igor', 'Zuk', 'igor@gmail.com', '066154567', ['food']),
    new Client(35, 'Maria', 'Radel', 'maria@gmail.com', '0661234545', ['magazine', 'toy', 'cheese', 'oil', 'gas']),
    new Client(41, 'Sasha', 'Babiy', 'sasha@gmail.com', '0981234567', []),
    new Client(16, 'Ivan', 'Kogyt', 'ivan@gmail.com', '0671254454', ['magazine', 'cheese', 'oil', 'gas']),
    new Client(6, 'Olia', 'Ivanov', 'olia@gmail.com', '0981444567', ['cheese', 'oil', 'gas']),
    new Client(71, 'Tanya', 'Sidorov', 'tanya@gmail.com', '0661255567', ['oil', 'gas']),
    new Client(83, 'Oleg', 'Tsoy', 'oleg@gmail.com', '0661234444', ['gas']),
    new Client(9, 'Ivan', 'Dyda', 'ivan_d@gmail.com', '0661234557', ['toy', 'cheese']),
    new Client(12, 'Alina', 'korol', 'alina@gmail.com', '0660004567', [])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clientArr.sort((a, b) => a.order.length - b.order.length);
console.log(clientArr);