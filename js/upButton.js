//Получаем узел body и внедряем элемент кнопки
var bodyElement = document.body || document.querySelector('.body') [0];
bodyElement.insertAdjacentHTML('beforeend', '<button onclick = "topFunction()" class="upButton" title="Наверх">НАВЕРХ</button>');
document.querySelector(".upButton").setAttribute("style", "display: none; position: fixed; bottom: 18px; right: 18px; z-index: 1000; cursor: pointer; color: #390B44; box-shadow: 2px 2px 2px #390B44; border-radius: 10px; font-weight: bold; font-size: 1.5em; background: #DAACE5;");
//Обработчик события прокрутки страницы
window.onscroll = function() {scrollFunction()};
//Функция, вызываемая в момент прокрутки страницы
function scrollFunction() {
//Выбираем из DOM нашу кнопку
let button = document.querySelector(".upButton");
//условия координат скрола
if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
    button.style.display = "block";
} else {
    button.style.display = "none";
}
}
//Когда пользователь кликает по кнопке, то возвращаем его в самое начало страницы
function topFunction() { 
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}