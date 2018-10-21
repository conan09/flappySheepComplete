
let ScrollBase = require("../framework/ScrollBase");

cc.Class({
    extends: ScrollBase,

    properties: {
        btn_close: cc.Button,
    },

    start(){
        this.node.getComponent("Rank").init([1,2,3,4,5,6,7,8,9,10,11,12,14,123,124,42,4,5,6,7,8,9,10,11,12,14,123,124,42,4,5,6,7,8,9,10,11,12,14,123,124,42,4,5,6,7,8,9,10,11,12,14,123,124,42]);
    },

    closeRankView: function(){
        this.node.active = false;
    },
});
