// Простилізуйте елементи, як показано на зображенні task2.png.+
// - Фон заголовка має бути "lightgreen".+
// - Шрифт першого параграфа — жирний (font-weight: 700).+
// - Колір другого параграфа — "red".+
// - Третій параграф має бути підкреслений (underline).+
// - Четвертий параграф має бути курсивним (italic).+
// - Список має бути без маркерів і відображатися в одну лінію за допомогою flex.+
// - На сторінці є елемент <span>, який потрібно приховати, встановивши властивість display: none. +

const tit = document.querySelector("#title");
tit.style.backgroundColor = "lightgreen";

const pargraffirst = document.querySelector("#fpr");
pargraffirst.style.fontWeight = "700";

const pargafsecond = document.querySelector("#fsc");
pargafsecond.style.color = "red";

const pargrafthird = document.querySelector("#fthird");
pargrafthird.style.textDecoration = "underline";

const parafgarfroutrh = document.querySelector("#ffourth");
parafgarfroutrh.style.fontStyle = "italic";

const myList = document.querySelector("#myList");
myList.style.display ="flex";
myList.style.listStyle ="none";
myList.style.paddingleft = "0";
myList.style.margin= "0";
myList.style.gap= "10px";

const inv = document.querySelector("#invisible");
inv.style.display = "none";
