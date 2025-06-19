// На HTML-сторінці є ненумерований список з id="list", який містить 5 елементів <li> +
// Використовуючи засоби DOM, отримай доступ до всіх елементів списку та виведи їх вміст в консоль (console.log) в такому порядку: +
// перший елемент → останній елемент → другий елемент → третій елемент → четвертий елемент +
// *Додатково: кількість елементів може бути довільною і невідомою наперед +
// *Додатково: на сторінці можуть бути інші списки, всередині потрібного списку можуть бути інші елементи, крім <li>. +
// Вважайте, що скрипт підключено в кінці body, тести не генерують подію `DOMContentLoaded`. +

console.log(document.querySelector("#list").children[0].textContent);
console.log(document.querySelector("#list").children[4].textContent);
console.log(document.querySelector("#list").children[1].textContent);
console.log(document.querySelector("#list").children[2].textContent);
console.log(document.querySelector("#list").children[3].textContent);
