let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
document.write(friends);
if (friends.length >= 3) document.write(' => це великий масив<br>');
else document.write(' => це маленький масив<br>');

let num_1 = Math.floor(Math.random() * 50 - 25), num_2 = Math.floor(Math.random() * 50 - 25), num_3 = Math.floor(Math.random() * 50 - 25);
document.write(`число_1 = ${num_1}, число_2 = ${num_2}, число_3 = ${num_3}`);
if ((num_1 > num_2 && num_1 < num_3) || (num_1 > num_3 && num_1 < num_2)) document.write(' => Переше число середуще<br>');
else if ((num_2 > num_1 && num_2 < num_3) || (num_2 < num_1 && num_2 > num_3)) document.write(' => Друге число середуще<br>');
else if ((num_3 > num_2 && num_3 < num_1) || (num_3 < num_2 && num_3 > num_1)) document.write(' => Третє число середуще<br>');
else document.write(' => Якісь із чисел рівні за значенням<br>');

((num_1 > num_2 && num_1 < num_3) || (num_1 > num_3 && num_1 < num_2)) ? document.write('Переше число серед двох інших по номіналу<br>') : document.write('Уви, переше число не середуще<br>');

let result, a = 3, b = 2;
result = (a + b < 4) ? 'Мало' : 'Багато';
document.write('<br>')

let rand = Math.floor(Math.random() * 200 - 100);
rand > 0 ? document.write(`Число ${rand} більше від 0`) : rand < 0 ? document.write(`Число ${rand} менше від 0`) : document.write(`Число ${rand} рівне від 0`);


