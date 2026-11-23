const btnOpenModal = document.querySelector('#btnOpenModal');
const modalBlock = document.querySelector('#modalBlock');
const closeModal = document.querySelector('#closeModal');
const formAnswers = document.querySelector('#formAnswers');
const questionTitle = document.querySelector('#question');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

const questions = [
    {
        question: "Якого кольору бургер?",
        answers: [
            { title: 'Стандарт', url: './image/burger.png' },
            { title: 'Чорний', url: './image/burgerBlack.png' }
        ],
        type: 'radio'
    },
    {
        question: "З якого м'яса котлета?",
        answers: [
            { title: 'Курка', url: './image/chickenMeat.png' },
            { title: 'Яловичина', url: './image/beefMeat.png' },
            { title: 'Свинина', url: './image/porkMeat.png' }
        ],
        type: 'radio'
    },
    {
        question: "Додаткові інгредієнти ?",
        answers: [
            { title: 'Помідор', url: './image/tomato.png' },
            { title: 'Огірок', url: './image/cucumber.png' },
            { title: 'Салат', url: './image/salad.png' },
            { title: 'Цибуля', url: './image/onion.png' }
        ],
        type: 'checkbox'
    },
    {
        question: "Додати соус?",
        answers: [
            { title: 'Часниковий', url: './image/sauce1.png' },
            { title: 'Томатний', url: './image/sauce2.png' },
            { title: 'Гірчичний', url: './image/sauce3.png' }
        ],
        type: 'radio'
    }
];

let numberQuestion = 0;

const renderAnswers = (index) => {
    formAnswers.innerHTML = '';
    questions[index].answers.forEach((answer, i) => {
        formAnswers.innerHTML += `
            <div class="answers-item d-flex flex-column">
                <input type="${questions[index].type}" id="answerItem${i}" name="answer" class="d-none" value="${answer.title}">
                <label for="answerItem${i}" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${answer.url}" alt="${answer.title}">
                    <span>${answer.title}</span>
                </label>
            </div>
        `;
    });
};

const renderQuestions = (index) => {
    questionTitle.textContent = questions[index].question;
    renderAnswers(index);

    switch (numberQuestion) {
        case 0:
            prevButton.classList.add('d-none');
            nextButton.classList.remove('d-none');
            break;
        case questions.length - 1:
            prevButton.classList.remove('d-none');
            nextButton.classList.add('d-none');
            break;
        default:
            prevButton.classList.remove('d-none');
            nextButton.classList.remove('d-none');
    }
};

btnOpenModal.addEventListener('click', () => {
    modalBlock.classList.add('d-block');
    numberQuestion = 0;
    renderQuestions(numberQuestion);
});

closeModal.addEventListener('click', () => {
    modalBlock.classList.remove('d-block');
});

nextButton.addEventListener('click', () => {
    numberQuestion++;
    renderQuestions(numberQuestion);
});

prevButton.addEventListener('click', () => {
    numberQuestion--;
    renderQuestions(numberQuestion);
});
