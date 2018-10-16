/**
 * pipe缓存池
 */
cc.Class({
    extends: cc.Component,

    properties: {
        pipeGroup : cc.Prefab,
        spawnDuration : 0,
        initCount : 0,
        initPipePosX : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        D.PipeGroupManager = this;
        this.pipePool = new cc.NodePool();
        for(let i = 1; i <= this.initCount; i++){
            let pipe = cc.instantiate(this.pipeGroup);
            this.pipePool.put(pipe);
        }
    },

    StartRun : function(){
        let cnt = this.node.children.length;
        for(var i = this.node.children.length-1; i >= 0; --i){
            this.Return(this.node.children[i]);
        }
        this.schedule(this.Borrow, this.spawnDuration);
        this.Borrow()
    },

    StopRun : function(){
        this.unschedule(this.Borrow);
    },
    
    Borrow : function(){
        let pipe = null;
        if(this.pipePool.size() > 0){
            pipe = this.pipePool.get();
        }else{
            pipe = cc.instantiate(this.pipeGroup);
        }
        pipe.x = this.initPipePosX;
        pipe.parent = this.node;
        pipe.getComponent("PipeGroup").InitPipeGroup();
    },

    Return : function(pipe){
        this.pipePool.put(pipe);
    },
});
