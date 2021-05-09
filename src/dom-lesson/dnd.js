/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задавать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
    let element = document.createElement('div');

    element.classList.add('draggable-div');

    function randomGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let minValue = 14,
        maxValue = 330;

    let width = randomGenerate(minValue, maxValue),
        height = randomGenerate(minValue, maxValue),
        posX = randomGenerate(0, Math.floor(width / 3)),
        posY = randomGenerate(0, Math.floor(height / 2));

    element.style.position = 'absolute';
    element.style.width = width + 'px';
    element.style.height = height + 'px';
    element.style.top = posY + 'px';
    element.style.left = posX + 'px';
    element.style.backgroundColor = `rgb(${randomGenerate(0, 255)},
                                     ${randomGenerate(0, 255)},
                                     ${randomGenerate(0, 255)})`;

    return element;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {
    homeworkContainer.onmousedown = function (e) {
        let element = e.target.closest('.draggable-div');

        if (!element) {
            return;
        }

        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
            element.style.left = e.pageX - element.offsetWidth / 2 + 'px';
            element.style.top = e.pageY - element.offsetHeight / 2 + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        homeworkContainer.onmouseup(() => {
            document.removeEventListener('mousemove', onMouseMove);
            homeworkContainer.onmousedown = null;
        })

        homeworkContainer.ondragstart = () => {
            return false;
        }
    };
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
