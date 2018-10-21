/**
 * 游戏主逻辑
 */
require("../common/UserConst");

cc.Class({
    extends: cc.Component,

    properties: {
        lbl_score : cc.Label,
        pipeLayer : cc.Node,
        sheep : cc.Sprite,
        gameStart : cc.Node,
        gameOver : cc.Node,
        _state : {
            default : UserConst.GameState.Menu,
            type : UserConst.GameState,
            visible : false,
        },
        state : {
            set : function(val){
                this._state = val;
            },
            get : function(){
                return this._state;
            },
            type : UserConst.GameState,
        },
        scrollView : cc.ScrollView,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        D.GameManager = this;
        cc.director.getCollisionManager().enabled = true;        
        this.StartRun();
        this.gameStart.getComponent("GameStart").ShowGameStart();
    },

    GainScore : function(){
        this.score += 1;
        this.lbl_score.string = this.score;
    },

    StartRun : function(){
        this.score = 0;
        this.state = UserConst.GameState.Run;
        this.sheep.getComponent("Sheep").StartRun();
        this.pipeLayer.getComponent("PipeGroupManager").StartRun();
    },

    OverGame : function(){
        this.state = UserConst.GameState.OverGame;
        this.sheep.getComponent("Sheep").StopRun();
        this.pipeLayer.getComponent("PipeGroupManager").StopRun();
        this.gameOver.getComponent("GameOver").ShowGamaOver(this.score);
    },
});
