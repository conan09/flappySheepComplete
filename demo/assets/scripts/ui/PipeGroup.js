

cc.Class({
    extends: cc.Component,

    properties: {
        speed : 0,
        up : cc.Sprite,
        down : cc.Sprite,
    },
    
    InitPipeGroup : function(){
        this.down.node.y = Utils.getRandomArbitrary(330, 800);
        this.up.node.y = this.down.node.y + Utils.getRandomArbitrary(250, 400);
    },

    update (dt) {
        if(UserConst.GameState.Run == D.GameManager.state){
            if(this.node.x <= -this.node.width){
                D.PipeGroupManager.Return(this.node);
            }else{
                this.node.x -= this.speed * dt;
            }
        }
    },
});
