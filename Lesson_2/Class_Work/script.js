let num_1 = prompt('Введіть перше число') || NaN;              // невеликий захист від дурака, пусту стрінгу перетрорюєм на NaN
let num_2 = prompt('Введіть друге число') || NaN;
num_1 = +num_1;                                                        // прирівнюєм до number
num_2 = +num_2;
if (num_1 > num_2) alert(`Число ${num_1} більше за ${num_2}`);
else if (num_2 > num_1) alert(`Число ${num_2} більше за ${num_1}`);
else if (num_1 === num_2) alert(`Числа ${num_1} і ${num_2} рівні`);
else alert(`Ви ввели невірні дані`);                                    // також захист від дурака, вдруг введуть не числа


let apartment_num = +prompt('Введіть номер квартири') || NaN;
if (apartment_num >= 1 && apartment_num <= 20) alert(`Ваша квартира у першому підїзді`);
else if (apartment_num > 20 && apartment_num <= 48) alert(`Ваша квартира у другому підїзді`);
else if (apartment_num > 48 && apartment_num <= 90) alert(`Ваша квартира у третьому підїзді`);
else alert(`Чото пішло не так, даної квартири не існує`);


let number;
do {
    number = +prompt(`Введіть число "10" і тільки його!!!`);
    number !== 10 ? alert('НЕВІРНО. Ця гра буде до безкінечності') : alert('ВІРНО');
} while (number !== 10);


let variable = undefined;
if (typeof (variable) === 'number') document.write('Ви ввели число');
else if (typeof (variable) === 'string') document.write('Ви ввели строку');
else if (typeof (variable) === 'boolean') document.write('Ви ввели булове значення');
else if (typeof (variable) === 'object') document.write(`Ви ввели якийсь об'єкт`);
else document.write('Чорт його знає, що ви ввели');

let temperature = prompt('Введіть температуру за бортом') || NaN;
temperature = +temperature;
if (temperature >= 10 && temperature <= 22) alert('Ми йдемо ВЧИТИСЯ')
else if (temperature < 10 || temperature > 22) alert('Сидіть вдома і вчіться ОНЛАЙН')
else alert(`Ви ввели невірні дані`);

let game_num;
switch (game_num = +prompt('Ведіть чило від 1 до 5') || NaN) {
    case 1:
        alert('Ви виграли машину');
        break;
    case 2:
        alert('Ви виграли мотоцикл');
        break;
    case 3:
        alert('Ви виграли телефон');
        break;
    case 4:
        alert('Ви виграли електроскутер');
        break;
    case 5:
        alert('Ви виграли поїздку на Мальдиви');
        break;
    default:
        alert('Вот невезуха, а виграш тю-тю');
        break;
}