function renderBlocksSecondPageEasy() {
    const app = document.querySelector(".app");
    app.textContent = "";

    const head = document.createElement("div");
    head.classList = "second-page__head";

    const timeConteiner = document.createElement("div");
    timeConteiner.classList = "second-page__head_time";

    const timeMin = document.createElement("div");
    timeMin.classList = "second-page__head_time-min row1";
    timeMin.textContent = "Min";

    const timeSek = document.createElement("div");
    timeSek.classList = "second-page__head_time-sek row1";
    timeSek.textContent = "Sek";

    const timeGame = document.createElement("div");
    timeGame.classList = "second-page__head_time-game row2";
    timeGame.textContent = "00.00";

    const btnRestart = document.createElement("button");
    btnRestart.classList = "second-page__head_restart first-page__button";
    btnRestart.textContent = "Начать заново";

    const cardDeck = document.createElement("div");
    cardDeck.classList = "second-page__card-deck";

    function addCard() {
        const cardShirt = document.createElement("img");
        cardShirt.src = "./cardDeck/cardShirt.jpg";

        cardDeck.appendChild(cardShirt);
    }

    app.appendChild(head);
    app.appendChild(head);
    head.appendChild(timeConteiner);
    timeConteiner.appendChild(timeMin);
    timeConteiner.appendChild(timeSek);
    timeConteiner.appendChild(timeGame);
    head.appendChild(btnRestart);
    app.appendChild(cardDeck);

    for (let i = 0; i < 6; i++) {
        addCard();
    }
}

window.application.blocks["SecondPageEasy"] = renderBlocksSecondPageEasy;

function renderBlocksSecondPageMedium() {
    const app = document.querySelector(".app");
    app.textContent = "";

    const head = document.createElement("div");
    head.classList = "second-page__head";

    const timeConteiner = document.createElement("div");
    timeConteiner.classList = "second-page__head_time";

    const timeMin = document.createElement("div");
    timeMin.classList = "second-page__head_time-min row1";
    timeMin.textContent = "Min";

    const timeSek = document.createElement("div");
    timeSek.classList = "second-page__head_time-sek row1";
    timeSek.textContent = "Sek";

    const timeGame = document.createElement("div");
    timeGame.classList = "second-page__head_time-game row2";
    timeGame.textContent = "00.00";

    const btnRestart = document.createElement("button");
    btnRestart.classList = "second-page__head_restart first-page__button";
    btnRestart.textContent = "Начать заново";

    const cardDeck = document.createElement("div");
    cardDeck.classList = "second-page__card-deck";

    function addCard() {
        const cardShirt = document.createElement("img");
        cardShirt.src = "./cardDeck/cardShirt.jpg";

        cardDeck.appendChild(cardShirt);
    }

    app.appendChild(head);
    app.appendChild(head);
    head.appendChild(timeConteiner);
    timeConteiner.appendChild(timeMin);
    timeConteiner.appendChild(timeSek);
    timeConteiner.appendChild(timeGame);
    head.appendChild(btnRestart);
    app.appendChild(cardDeck);

    for (let i = 0; i < 18; i++) {
        addCard();
    }
}

window.application.blocks["SecondPageMedium"] = renderBlocksSecondPageMedium;

function renderBlocksSecondPageHard() {
    const app = document.querySelector(".app");
    app.textContent = "";

    const head = document.createElement("div");
    head.classList = "second-page__head";

    const timeConteiner = document.createElement("div");
    timeConteiner.classList = "second-page__head_time";

    const timeMin = document.createElement("div");
    timeMin.classList = "second-page__head_time-min row1";
    timeMin.textContent = "Min";

    const timeSek = document.createElement("div");
    timeSek.classList = "second-page__head_time-sek row1";
    timeSek.textContent = "Sek";

    const timeGame = document.createElement("div");
    timeGame.classList = "second-page__head_time-game row2";
    timeGame.textContent = "00.00";

    const btnRestart = document.createElement("button");
    btnRestart.classList = "second-page__head_restart first-page__button";
    btnRestart.textContent = "Начать заново";

    const cardDeck = document.createElement("div");
    cardDeck.classList = "second-page__card-deck";

    function addCard() {
        const cardShirt = document.createElement("img");
        cardShirt.src = "./cardDeck/cardShirt.jpg";

        cardDeck.appendChild(cardShirt);
    }

    app.appendChild(head);
    app.appendChild(head);
    head.appendChild(timeConteiner);
    timeConteiner.appendChild(timeMin);
    timeConteiner.appendChild(timeSek);
    timeConteiner.appendChild(timeGame);
    head.appendChild(btnRestart);
    app.appendChild(cardDeck);

    for (let i = 0; i < 36; i++) {
        addCard();
    }
}

window.application.blocks["SecondPageHard"] = renderBlocksSecondPageHard;
