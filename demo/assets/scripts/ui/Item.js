cc.Class({
    extends: cc.Component,

    properties: {
        lbl_content: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    updateItem: function(data){
        this.lbl_content.string = data;
    },
});
