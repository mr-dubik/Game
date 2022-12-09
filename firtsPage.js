const app = document.querySelector('.app');

function renderBlocksFirstPage() {
    const container = document.createElement('div');
    container.classList = 'first-page__container';

    const title = document.createElement('h1');
    title.classList = 'first-page__title';
    title.textContent = 'Выбери сложность';

    const containerNumbers = document.createElement('div');
    containerNumbers.classList = 'first-page__container_numbers';

    const numberOne = document.createElement('div');
    numberOne.classList = 'first-page__numbers';
    numberOne.textContent =  '1';

    const numbersTwo = document.createElement('div');
    numbersTwo.classList = 'first-page__numbers';
    numbersTwo.textContent =  '2';

    const numberThree = document.createElement('div');
    numberThree.classList= 'first-page__numbers';
    numberThree.textContent =  '3';

    const button = document.createElement('button');
    button.classList = 'first-page__button';
    button.textContent = 'Старт';

    app.appendChild(container);
    container.appendChild(title);
    container.appendChild(containerNumbers);
    containerNumbers.appendChild(numberOne);
    containerNumbers.appendChild(numbersTwo);
    containerNumbers.appendChild(numberThree);
    container.appendChild(button);
};


window.application.blocks['FirstPage'] = renderBlocksFirstPage;