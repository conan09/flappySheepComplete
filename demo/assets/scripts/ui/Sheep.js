/**
 * 玩家类
 */

let State = cc.Enum({
    None : -1,
    Run : -1,
    Jump : -1,
    Drop : -1,
    Dead : -1,
})

cc.Class({
    extends: cc.Component,

    properties: {
        jumpSpeed : 0,
        jumpHeight : 0,
        gravity : 0,
        groundY : 0,
        _state : {            
            default : State.None,
            type : State,
            visible : false,
        },
        state : {
            set : function(val){
                this._state = val;
                if(this._state == State.None){
                    this.node.getComponent(cc.Sprite).SetImageInfo("atlas/actors", "sheep_run_02");
                }else if(this._state == State.Run){
                    this.node.getComponent(cc.Animation).play("Run");
                }else if(this._state == State.Jump){
                    this.node.getComponent(cc.Animation).play("Jump");
                }else if(this._state == State.Drop){
                    this.node.getComponent(cc.Animation).play("Drop");
                }else if(this._state == State.Dead){
                    this.node.getComponent(cc.Sprite).SetImageInfo("atlas/actors", "sheep_touch_01");
                }
            },
            get : function(){
                return this._state;
            },
            type : State,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {
    },

    update (dt) {
        switch(this.state){
            case State.None:
                break;
            case State.Run:
                break;
            case State.Jump:
                this.currentJumpSpeed -= this.gravity * dt;
                this.node.y += this.currentJumpSpeed * dt;
                if(this.currentJumpSpeed <= 0){
                    this.state = State.Drop;
                }
                break;
            case State.Drop:
                this.currentJumpSpeed -= this.gravity * dt;
                this.node.y += this.currentJumpSpeed * dt;
                if(this.node.y <= this.groundY){
                    this.node.y = this.groundY;
                    this.state = State.Run;
                }
                break;
            case State.Dead:
                break;
        }
    },

    StartRun : function(){
        this.AddUserInput();
        this.node.y = this.groundY;
        this.state = State.Run;
    },

    StopRun : function(){
        this.state = State.Dead;
        this.RemoveUserInput();
    },

    AddUserInput : function(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.OnKeyDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, ()=>{
            this.Jump()
        });
    },

    RemoveUserInput : function(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.OnKeyDown, this);
    },

    OnKeyDown : function(event){
        switch(event.keyCode){
            case cc.macro.KEY.up:
                this.Jump();
                break;
        }
    },

    Jump : function(){
        this.currentJumpSpeed = this.jumpSpeed;
        this.state = State.Jump;
    },
    
    onCollisionEnter : function(other, self){
        if(other.node.group == "Obstacle"){
            D.GameManager.OverGame();
        }else if(other.node.group == "NextPipe"){
            EventMgr.Dispatch("GainScore", other.node.group);
            D.GameManager.GainScore();
        }

    },

    onCollisionStay : function(other, self){

    },

    onCollisionExit : function(other, self){

    },
});