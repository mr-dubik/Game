import * as _ from "lodash";

let cards = [
    "./cardDeck/6_cross.jpg",
    "./cardDeck/6_heart.jpg",
    "./cardDeck/6_spades.jpg",
    "./cardDeck/6_tambourine.jpg",
    "./cardDeck/7_cross.jpg",
    "./cardDeck/7_heart.jpg",
    "./cardDeck/7_spades.jpg",
    "./cardDeck/7_tambourine.jpg",
    "./cardDeck/8_cross.jpg",
    "./cardDeck/8_heart.jpg",
    "./cardDeck/8_spades.jpg",
    "./cardDeck/8_tambourine.jpg",
    "./cardDeck/9_cross.jpg",
    "./cardDeck/9_heart.jpg",
    "./cardDeck/9_spades.jpg",
    "./cardDeck/9_tambourine.jpg",
    "./cardDeck/10_cross.jpg",
    "./cardDeck/10_heart.jpg",
    "./cardDeck/10_spades.jpg",
    "./cardDeck/10_tambourine.jpg",
    "./cardDeck/j_cross.jpg",
    "./cardDeck/j_heart.jpg",
    "./cardDeck/j_spades.jpg",
    "./cardDeck/j_tambourine.jpg",
    "./cardDeck/q_cross.jpg",
    "./cardDeck/q_heart.jpg",
    "./cardDeck/q_spades.jpg",
    "./cardDeck/q_tambourine.jpg",
    "./cardDeck/k_cross.jpg",
    "./cardDeck/k_heart.jpg",
    "./cardDeck/k_spades.jpg",
    "./cardDeck/k_tambourine.jpg",
    "./cardDeck/a_cross.jpg",
    "./cardDeck/a_heart.jpg",
    "./cardDeck/a_spades.jpg",
    "./cardDeck/a_tambourine.jpg",
];

function renderBlocksSecondPageEasy() {
    const app = document.querySelector(".app");
    app!.textContent = "";

    const head = document.createElement("div");
    head.classList.add("second-page__head");

    const timeConteiner = document.createElement("div");
    timeConteiner.classList.add("second-page__head_time");

    const timeMin = document.createElement("div");
    timeMin.classList.add("second-page__head_time-min row1");
    timeMin.textContent = "Min";

    const timeSek = document.createElement("div");
    timeSek.classList.add("second-page__head_time-sek row1");
    timeSek.textContent = "Sek";

    const timeGame = document.createElement("div");
    timeGame.classList.add("second-page__head_time-game row2");
    timeGame.textContent = "00.00";

    const btnRestart = document.createElement("button");
    btnRestart.classList.add("second-page__head_restart first-page__button");
    btnRestart.textContent = "Начать заново";

    const cardDeck = document.createElement("div");
    cardDeck.classList.add("second-page__card-deck");

    function shuffle(array: []) {
        let currentIndex = array.length,
            randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]!] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    shuffle(cards);

    let cardsEasy: Element[] = [];
    function addCard() {
        cardsEasy.push(cards[0], cards[1], cards[2]);
    }

    for (let i = 0; i < 2; i++) {
        addCard();
    }

    shuffle(cardsEasy);

    addCardTable();

    function addCardTable() {
        const card1 = document.createElement("img");
        card1.src = cardsEasy[0];
        card1.classList.add("card1 click");

        const card2 = document.createElement("img");
        card2.src = cardsEasy[1];
        card2.classList.add("card2 click");

        const card3 = document.createElement("img");
        card3.src = cardsEasy[2];
        card3.classList.add("card3 click");

        const card4 = document.createElement("img");
        card4.src = cardsEasy[3];
        card4.classList.add("card4 click");

        const card5 = document.createElement("img");
        card5.src = cardsEasy[4];
        card5.classList.add("card5 click");

        const card6 = document.createElement("img");
        card6.src = cardsEasy[5];
        card6.classList.add("card6 click");

        cardDeck.appendChild(card1);
        cardDeck.appendChild(card2);
        cardDeck.appendChild(card3);
        cardDeck.appendChild(card4);
        cardDeck.appendChild(card5);
        cardDeck.appendChild(card6);
    }

    app!.appendChild(head);
    app!.appendChild(head);
    head.appendChild(timeConteiner);
    timeConteiner.appendChild(timeMin);
    timeConteiner.appendChild(timeSek);
    timeConteiner.appendChild(timeGame);
    head.appendChild(btnRestart);
    app!.appendChild(cardDeck);

    setTimeout(cardsShirt, 5000);

    function cardsShirt() {
        let flipping1: HTMLImageElement | null =
            document.querySelector(".card1");
        flipping1!.src = "./cardDeck/cardShirt.jpg";

        let flipping2: HTMLImageElement | null =
            document.querySelector(".card2");
        flipping2!.src = "./cardDeck/cardShirt.jpg";

        let flipping3: HTMLImageElement | null =
            document.querySelector(".card3");
        flipping3!.src = "./cardDeck/cardShirt.jpg";

        let flipping4: HTMLImageElement | null =
            document.querySelector(".card4");
        flipping4!.src = "./cardDeck/cardShirt.jpg";

        let flipping5: HTMLImageElement | null =
            document.querySelector(".card5");
        flipping5!.src = "./cardDeck/cardShirt.jpg";

        let flipping6: HTMLImageElement | null =
            document.querySelector(".card6");
        flipping6!.src = "./cardDeck/cardShirt.jpg";
    }

    let choiceCards: [] = [];

    let clicks = document.querySelector(".second-page__card-deck");
    if (choiceCards.length < 2) {
        clicks!.addEventListener("click", function (event) {
            if (
                (event.target instanceof HTMLElement).classList[0] === "card1"
            ) {
                (event.target instanceof HTMLElement).src = cardsEasy[0];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card2") {
                event.target.src = cardsEasy[1];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card3") {
                event.target.src = cardsEasy[2];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card4") {
                event.target.src = cardsEasy[3];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card5") {
                event.target.src = cardsEasy[4];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else {
                event.target.src = cardsEasy[5];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            }
        });
    } else {
        if (choiceCards[0] === choiceCards[1]) {
            alert("Вы победили");
        } else {
            alert("Вы проиграли");
        }
    }
}

window.application.blocks["SecondPageEasy"] = renderBlocksSecondPageEasy;

function renderBlocksSecondPageMedium() {
    const app = document.querySelector(".app");
    app!.textContent = "";

    const head = document.createElement("div");
    head.classList.add("second-page__head");

    const timeConteiner = document.createElement("div");
    timeConteiner.classList.add("second-page__head_time");

    const timeMin = document.createElement("div");
    timeMin.classList.add("second-page__head_time-min row1");
    timeMin.textContent = "Min";

    const timeSek = document.createElement("div");
    timeSek.classList.add("second-page__head_time-sek row1");
    timeSek.textContent = "Sek";

    const timeGame = document.createElement("div");
    timeGame.classList.add("second-page__head_time-game row2");
    timeGame.textContent = "00.00";

    const btnRestart = document.createElement("button");
    btnRestart.classList.add("second-page__head_restart first-page__button");
    btnRestart.textContent = "Начать заново";

    const cardDeck = document.createElement("div");
    cardDeck.classList.add("second-page__card-deck");

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    shuffle(cards);

    let cardsEasy = [];
    function addCard() {
        cardsEasy.push(
            cards[0],
            cards[1],
            cards[2],
            cards[3],
            cards[4],
            cards[5]
        );
    }

    for (let i = 0; i < 2; i++) {
        addCard();
    }

    shuffle(cardsEasy);

    addCardTable();

    function addCardTable() {
        const card1 = document.createElement("img");
        card1.src = cardsEasy[0];
        card1.classList.add("card1 click");

        const card2 = document.createElement("img");
        card2.src = cardsEasy[1];
        card2.classList.add("card2 click");

        const card3 = document.createElement("img");
        card3.src = cardsEasy[2];
        card3.classList.add("card3 click");

        const card4 = document.createElement("img");
        card4.src = cardsEasy[3];
        card4.classList.add("card4 click");

        const card5 = document.createElement("img");
        card5.src = cardsEasy[4];
        card5.classList.add("card5 click");

        const card6 = document.createElement("img");
        card6.src = cardsEasy[5];
        card6.classList.add("card6 click");

        const card7 = document.createElement("img");
        card7.src = cardsEasy[6];
        card7.classList.add("card7 click");

        const card8 = document.createElement("img");
        card8.src = cardsEasy[7];
        card8.classList.add("card8 click");

        const card9 = document.createElement("img");
        card9.src = cardsEasy[8];
        card9.classList.add("card9 click");

        const card10 = document.createElement("img");
        card10.src = cardsEasy[9];
        card10.classList.add("card10 click");

        const card11 = document.createElement("img");
        card11.src = cardsEasy[10];
        card11.classList.add("card11 click");

        const card12 = document.createElement("img");
        card12.src = cardsEasy[11];
        card12.classList.add("card12 click");

        cardDeck.appendChild(card1);
        cardDeck.appendChild(card2);
        cardDeck.appendChild(card3);
        cardDeck.appendChild(card4);
        cardDeck.appendChild(card5);
        cardDeck.appendChild(card6);
        cardDeck.appendChild(card7);
        cardDeck.appendChild(card8);
        cardDeck.appendChild(card9);
        cardDeck.appendChild(card10);
        cardDeck.appendChild(card11);
        cardDeck.appendChild(card12);
    }

    app!.appendChild(head);
    app!.appendChild(head);
    head.appendChild(timeConteiner);
    timeConteiner.appendChild(timeMin);
    timeConteiner.appendChild(timeSek);
    timeConteiner.appendChild(timeGame);
    head.appendChild(btnRestart);
    app!.appendChild(cardDeck);

    setTimeout(cardsShirt, 5000);

    function cardsShirt() {
        let flipping1 = document.querySelector(".card1");
        flipping1.src = "./cardDeck/cardShirt.jpg";

        let flipping2 = document.querySelector(".card2");
        flipping2!.src = "./cardDeck/cardShirt.jpg";

        let flipping3 = document.querySelector(".card3");
        flipping3!.src = "./cardDeck/cardShirt.jpg";

        let flipping4 = document.querySelector(".card4");
        flipping4!.src = "./cardDeck/cardShirt.jpg";

        let flipping5 = document.querySelector(".card5");
        flipping5!.src = "./cardDeck/cardShirt.jpg";

        let flipping6 = document.querySelector(".card6");
        flipping6!.src = "./cardDeck/cardShirt.jpg";

        let flipping7 = document.querySelector(".card7");
        flipping7!.src = "./cardDeck/cardShirt.jpg";

        let flipping8 = document.querySelector(".card8");
        flipping8!.src = "./cardDeck/cardShirt.jpg";

        let flipping9 = document.querySelector(".card9");
        flipping9!.src = "./cardDeck/cardShirt.jpg";

        let flipping10 = document.querySelector(".card10");
        flipping10!.src = "./cardDeck/cardShirt.jpg";

        let flipping11 = document.querySelector(".card11");
        flipping11!.src = "./cardDeck/cardShirt.jpg";

        let flipping12 = document.querySelector(".card12");
        flipping12!.src = "./cardDeck/cardShirt.jpg";
    }

    let choiceCards = [];

    let clicks = document.querySelector(".second-page__card-deck");
    if (choiceCards.length < 2) {
        clicks.addEventListener("click", function (event) {
            if (event.target.classList[0] === "card1") {
                event.target.src = cardsEasy[0];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card2") {
                event.target.src = cardsEasy[1];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card3") {
                event.target.src = cardsEasy[2];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card4") {
                event.target.src = cardsEasy[3];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card5") {
                event.target.src = cardsEasy[4];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card6") {
                event.target.src = cardsEasy[5];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card7") {
                event.target.src = cardsEasy[6];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card8") {
                event.target.src = cardsEasy[7];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card9") {
                event.target.src = cardsEasy[8];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card10") {
                event.target.src = cardsEasy[9];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card11") {
                event.target.src = cardsEasy[10];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else {
                event.target.src = cardsEasy[11];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            }
        });
    } else {
        if (choiceCards[0] === choiceCards[1]) {
            alert("Вы победили");
        } else {
            alert("Вы проиграли");
        }
    }
}

window.application.blocks["SecondPageMedium"] = renderBlocksSecondPageMedium;

function renderBlocksSecondPageHard() {
    const app = document.querySelector(".app");
    app!.textContent = "";

    const head = document.createElement("div");
    head.classList.add("second-page__head");

    const timeConteiner = document.createElement("div");
    timeConteiner.classList.add("second-page__head_time");

    const timeMin = document.createElement("div");
    timeMin.classList.add("second-page__head_time-min row1");
    timeMin.textContent = "Min";

    const timeSek = document.createElement("div");
    timeSek.classList.add("second-page__head_time-sek row1");
    timeSek.textContent = "Sek";

    const timeGame = document.createElement("div");
    timeGame.classList.add("second-page__head_time-game row2");
    timeGame.textContent = "00.00";

    const btnRestart = document.createElement("button");
    btnRestart.classList.add("second-page__head_restart first-page__button");
    btnRestart.textContent = "Начать заново";

    const cardDeck = document.createElement("div");
    cardDeck.classList.add("second-page__card-deck");

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    shuffle(cards);

    let cardsEasy = [];
    function addCard() {
        cardsEasy.push(
            cards[0],
            cards[1],
            cards[2],
            cards[3],
            cards[4],
            cards[5],
            cards[6],
            cards[7],
            cards[8],
            cards[9],
            cards[10],
            cards[11],
            cards[12],
            cards[13],
            cards[14],
            cards[15],
            cards[16],
            cards[17]
        );
    }

    for (let i = 0; i < 2; i++) {
        addCard();
    }

    shuffle(cardsEasy);

    addCardTable();

    function addCardTable() {
        const card1 = document.createElement("img");
        card1.src = cardsEasy[0];
        card1.classList.add("card1 click");

        const card2 = document.createElement("img");
        card2.src = cardsEasy[1];
        card2.classList.add("card2 click");

        const card3 = document.createElement("img");
        card3.src = cardsEasy[2];
        card3.classList.add("card3 click");

        const card4 = document.createElement("img");
        card4.src = cardsEasy[3];
        card4.classList.add("card4 click");

        const card5 = document.createElement("img");
        card5.src = cardsEasy[4];
        card5.classList.add("card5 click");

        const card6 = document.createElement("img");
        card6.src = cardsEasy[5];
        card6.classList.add("card6 click");

        const card7 = document.createElement("img");
        card7.src = cardsEasy[6];
        card7.classList.add("card7 click");

        const card8 = document.createElement("img");
        card8.src = cardsEasy[7];
        card8.classList.add("card8 click");

        const card9 = document.createElement("img");
        card9.src = cardsEasy[8];
        card9.classList.add("card9 click");

        const card10 = document.createElement("img");
        card10.src = cardsEasy[9];
        card10.classList.add("card10 click");

        const card11 = document.createElement("img");
        card11.src = cardsEasy[10];
        card11.classList.add("card11 click");

        const card12 = document.createElement("img");
        card12.src = cardsEasy[11];
        card12.classList.add("card12 click");

        const card13 = document.createElement("img");
        card13.src = cardsEasy[12];
        card13.classList.add("card13 click");

        const card14 = document.createElement("img");
        card14.src = cardsEasy[13];
        card14.classList.add("card14 click");

        const card15 = document.createElement("img");
        card15.src = cardsEasy[14];
        card15.classList.add("card15 click");

        const card16 = document.createElement("img");
        card16.src = cardsEasy[15];
        card16.classList.add("card16 click");

        const card17 = document.createElement("img");
        card17.src = cardsEasy[16];
        card17.classList.add("card17 click");

        const card18 = document.createElement("img");
        card18.src = cardsEasy[17];
        card18.classList.add("card18 click");

        cardDeck.appendChild(card1);
        cardDeck.appendChild(card2);
        cardDeck.appendChild(card3);
        cardDeck.appendChild(card4);
        cardDeck.appendChild(card5);
        cardDeck.appendChild(card6);
        cardDeck.appendChild(card7);
        cardDeck.appendChild(card8);
        cardDeck.appendChild(card9);
        cardDeck.appendChild(card10);
        cardDeck.appendChild(card11);
        cardDeck.appendChild(card12);
        cardDeck.appendChild(card13);
        cardDeck.appendChild(card14);
        cardDeck.appendChild(card15);
        cardDeck.appendChild(card16);
        cardDeck.appendChild(card17);
        cardDeck.appendChild(card18);
    }

    app!.appendChild(head);
    app!.appendChild(head);
    head.appendChild(timeConteiner);
    timeConteiner.appendChild(timeMin);
    timeConteiner.appendChild(timeSek);
    timeConteiner.appendChild(timeGame);
    head.appendChild(btnRestart);
    app!.appendChild(cardDeck);

    setTimeout(cardsShirt, 5000);

    function cardsShirt() {
        let flipping1 = document.querySelector(".card1");
        flipping1!.src = "./cardDeck/cardShirt.jpg";

        let flipping2 = document.querySelector(".card2");
        flipping2!.src = "./cardDeck/cardShirt.jpg";

        let flipping3 = document.querySelector(".card3");
        flipping3!.src = "./cardDeck/cardShirt.jpg";

        let flipping4 = document.querySelector(".card4");
        flipping4!.src = "./cardDeck/cardShirt.jpg";

        let flipping5 = document.querySelector(".card5");
        flipping5!.src = "./cardDeck/cardShirt.jpg";

        let flipping6 = document.querySelector(".card6");
        flipping6!.src = "./cardDeck/cardShirt.jpg";

        let flipping7 = document.querySelector(".card7");
        flipping7!.src = "./cardDeck/cardShirt.jpg";

        let flipping8 = document.querySelector(".card8");
        flipping8!.src = "./cardDeck/cardShirt.jpg";

        let flipping9 = document.querySelector(".card9");
        flipping9!.src = "./cardDeck/cardShirt.jpg";

        let flipping10 = document.querySelector(".card10");
        flipping10!.src = "./cardDeck/cardShirt.jpg";

        let flipping11 = document.querySelector(".card11");
        flipping11!.src = "./cardDeck/cardShirt.jpg";

        let flipping12 = document.querySelector(".card12");
        flipping12!.src = "./cardDeck/cardShirt.jpg";

        let flipping13 = document.querySelector(".card13");
        flipping13!.src = "./cardDeck/cardShirt.jpg";

        let flipping14 = document.querySelector(".card14");
        flipping14!.src = "./cardDeck/cardShirt.jpg";

        let flipping15 = document.querySelector(".card15");
        flipping15!.src = "./cardDeck/cardShirt.jpg";

        let flipping16 = document.querySelector(".card16");
        flipping16!.src = "./cardDeck/cardShirt.jpg";

        let flipping17 = document.querySelector(".card17");
        flipping17!.src = "./cardDeck/cardShirt.jpg";

        let flipping18 = document.querySelector(".card18");
        flipping18!.src = "./cardDeck/cardShirt.jpg";
    }

    let choiceCards = [];

    let clicks = document.querySelector(".second-page__card-deck");
    if (choiceCards.length < 2) {
        clicks.addEventListener("click", function (event) {
            if (event.target.classList[0] === "card1") {
                event.target.src = cardsEasy[0];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card2") {
                event.target.src = cardsEasy[1];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card3") {
                event.target.src = cardsEasy[2];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card4") {
                event.target.src = cardsEasy[3];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card5") {
                event.target.src = cardsEasy[4];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card6") {
                event.target.src = cardsEasy[5];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card7") {
                event.target.src = cardsEasy[6];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card8") {
                event.target.src = cardsEasy[7];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card9") {
                event.target.src = cardsEasy[8];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card10") {
                event.target.src = cardsEasy[9];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card11") {
                event.target.src = cardsEasy[10];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card12") {
                event.target.src = cardsEasy[11];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card13") {
                event.target.src = cardsEasy[12];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card14") {
                event.target.src = cardsEasy[13];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card15") {
                event.target.src = cardsEasy[14];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card16") {
                event.target.src = cardsEasy[15];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card17") {
                event.target.src = cardsEasy[16];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            } else if (event.target.classList[0] === "card18") {
                event.target.src = cardsEasy[17];
                choiceCards.push(event.target.src);
                if (choiceCards.length < 2) {
                    return;
                } else {
                    if (choiceCards[0] === choiceCards[1]) {
                        alert("Вы победили");
                    } else {
                        alert("Вы проиграли");
                    }
                }
            }
        });
    } else {
        if (choiceCards[0] === choiceCards[1]) {
            alert("Вы победили");
        } else {
            alert("Вы проиграли");
        }
    }
}

window.application.blocks["SecondPageHard"] = renderBlocksSecondPageHard;
