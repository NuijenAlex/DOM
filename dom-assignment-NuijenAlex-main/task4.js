// На сторінці є форма з заголовком "Новий користувач", яка містить поля для введення даних користувача.
// Поля форми:+
// Ім'я користувача (userName)+
// Номер телефону (phone)+
// Дата народження (birthday)+
// Електронна пошта (email)+
// Реалізуйте функцію submitHandler, яка буде викликатись при натисканні кнопки Submit.
// При натисканні на кнопку відправки форми в консоль ма.ть вивестись введені дані з усіх полів.
const form = document.querySelector("userForm");
form.addEventListener("submit", submitHandler);
function submitHandler(event) {
    event.preventDefault();
    const userName = form.elements.userName.value;
    const phone = form.elements.phone.value;
    const birthday = form.elements.birthday.value;
    const email = form.elements.email.value;

    console.log("Ім'я користувача:", userName);
    console.log("Телефон:", phone);
    console.log("Дата народження:", birthday);
    console.log("Email:", email);
}

