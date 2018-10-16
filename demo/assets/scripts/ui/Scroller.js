
cc.Class({
    extends: cc.Component,

    properties: {
        speed : 0,
        resetX : 0,
    },

    update (dt) {
        if(UserConst.GameState.Run == D.GameManager.state){
            this.node.x -= this.speed * dt;
            if(this.node.x < this.resetX){
                this.node.x -= this.resetX;
            }
        }
    },
});
