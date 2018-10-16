
cc.Class({
    extends: cc.Component,

    properties: {
        lbl_score : cc.Label,
        btn_play : cc.Button,
    },

    ShowGamaOver : function(score){
        this.lbl_score.string = score;
        this.node.active = true;
    },

    Replay : function(){
        this.node.active = false;
        D.GameManager.StartRun();
    },
});
