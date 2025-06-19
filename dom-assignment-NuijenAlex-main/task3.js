// Напишіть скрипт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.+
//
//   <main class="mainClass check item">+
//      <div id="myDiv">+
//          <p>First paragraph</p>+
//      </div>+
//  </main>+
//
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"+
// Спробуйте не використовувати рядок HTML-коду для вставки (`innerHTML`).+
// Використовуйте методи DOM: `createElement()`, `appendChild()`, `setAttribute()`, `classList.add()` тощо.+



const contar = document.querySelector(".create_elements");

const main = document.createElement("main");
main.classList.add("mainClass","check","item");

const div = document.createElement("div");
div.setAttribute("id","myDiv");

const parag = document.createElement("p");
parag.textContent = "first paragraph";

div.appendChild(parag);
main.appendChild(div);
contar.appendChild(main);