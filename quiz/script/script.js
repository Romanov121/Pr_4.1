const btnOpenModal = document.querySelector('#btnOpenModal');
const modalBlock = document.querySelector('#modalBlock');
const closeModal = document.querySelector('#closeModal');
const formAnswers = document.querySelector('#formAnswers');

const burgerName = 'Стандарт';
const burgerImg = './image/burger.png';

const renderBurger = () => {
    formAnswers.innerHTML = `
        <div class="answers-item d-flex flex-column">
            <input type="radio" id="answerItem1" name="answer" class="d-none">
            <label for="answerItem1" class="d-flex flex-column justify-content-between">
                <img class="answerImg" src="${burgerImg}" alt="${burgerName}">
                <span>${burgerName}</span>
            </label>
        </div>
    `;
};

btnOpenModal.addEventListener('click', () => {
    modalBlock.classList.add('d-block');
    renderBurger();
});

closeModal.addEventListener('click', () => {
    modalBlock.classList.remove('d-block');
});
