window.application = {
    blocks: {},
    screens: {},
    step: {},
    difficulty: {},
    renderScreen: function () {},
    renderBlock: function (blockName: any, container: any) {
        if (!window.application.blocks[blockName]) {
            console.log("Такого блока нет");
        } else {
            this.blocks[blockName](container);
        }
    },
    timers: [],
    cardDeck: [],
};