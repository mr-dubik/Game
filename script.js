window.application = {
    blocks: {},
    screens: {},
    step: {},
    renderScreen: function () {},
    renderBlock: function (blockName, container) {
        if (!window.application.blocks[blockName]) {
            console.log("Такого блока нет");
        } else {
            this.blocks[blockName](container);
        }
    },
    timers: [],
};
