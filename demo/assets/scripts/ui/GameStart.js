

cc.Class({
    extends: cc.Component,

    properties: {
        btn_start : cc.Button,
    },

    ShowGameStart : function(){
        this.node.active = true;
    },

    StartGame : function(){
        D.GameManager.StartRun();
        this.node.active = false;
    },
});
