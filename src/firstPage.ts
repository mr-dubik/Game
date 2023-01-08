import * as _ from "lodash";

const app = document.querySelector(".app");
function renderBlocksFirstPage() {
    const container = document.createElement("div");
    container.classList.add("first-page__container");

    const title = document.createElement("h1");
    title.classList.add("first-page__title");
    title.textContent = "Выбери сложность";

    const containerNumbers = document.createElement("div");
    containerNumbers.classList.add("first-page__container_numbers");

    const numberOne = document.createElement("div");
    numberOne.classList.add("first-page__numbers");
    const easy = document.createElement("input");
    easy.type = "radio";
    easy.name = "radio";
    easy.value = "1";
    easy.id = "radio-1";
    easy.classList.add("radio");
    const labelOne = document.createElement("label");
    labelOne.textContent = "1";
    labelOne.htmlFor = "radio-1";
    // numberOne.textContent =  '1';

    const numbersTwo = document.createElement("div");
    numbersTwo.classList.add("first-page__numbers");
    const medium = document.createElement("input");
    medium.type = "radio";
    medium.name = "radio";
    medium.value = "2";
    medium.id = "radio-2";
    medium.classList.add("radio");
    const labelTwo = document.createElement("label");
    labelTwo.textContent = "2";
    labelTwo.htmlFor = "radio-2";
    // numbersTwo.textContent =  '2';

    const numberThree = document.createElement("div");
    numberThree.classList.add("first-page__numbers");
    const hard = document.createElement("input");
    hard.type = "radio";
    hard.name = "radio";
    hard.value = "3";
    hard.id = "radio-3";
    hard.classList.add("radio");
    const labelThree = document.createElement("label");
    labelThree.textContent = "3";
    labelThree.htmlFor = "radio-3";
    // numberThree.textContent =  '3';

    const button = document.createElement("button");
    button.classList.add("first-page__button");
    button.textContent = "Старт";

    app!.appendChild(container);
    container.appendChild(title);
    container.appendChild(containerNumbers);
    containerNumbers.appendChild(numberOne);
    numberOne.appendChild(easy);
    numberOne.appendChild(labelOne);
    containerNumbers.appendChild(numbersTwo);
    numbersTwo.appendChild(medium);
    numbersTwo.appendChild(labelTwo);
    containerNumbers.appendChild(numberThree);
    numberThree.appendChild(hard);
    numberThree.appendChild(labelThree);
    container.appendChild(button);

    const btn = document.querySelector(".first-page__button");
    const radios = document.querySelectorAll(".radio");
    // const labels = document.querySelectorAll('label');

    btn!.addEventListener("click", () => {
        if (radios[0].checked === true) {
            window.application.blocks.SecondPageEasy();
            window.application.difficulty["easyLevel"] = "easy";
        } else if (radios[1].checked === true) {
            window.application.difficulty["mediumLevel"] = "medium";
            window.application.blocks.SecondPageMedium();
        } else if (radios[2].checked === true) {
            window.application.difficulty["hardLevel"] = "hard";
            window.application.blocks.SecondPageHard();
        } else {
            alert("Выберите уровень сложности");
        }
    });
}

window.application.blocks["FirstPage"] = renderBlocksFirstPage;
