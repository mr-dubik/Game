import * as _ from "lodash";

window.application = {
    blocks: {},
    screens: {},
    step: {},
    difficulty: {},
    renderScreen: function (screenName) {
        if (!window.application.blocks[screenName]) {
            console.log("Такого экрана нет");
        } else {
            this.blocks[screenName];
        }
    },
    renderBlock: function (blockName: string, container: string) {
        if (!window.application.blocks[blockName]) {
            console.log("Такого блока нет");
        } else {
            this.blocks[blockName](container);
        }
    },
    timers: [],
    cardDeck: [],
};
