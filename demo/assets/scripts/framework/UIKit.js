;window.UIKit = window.UIKit || {};

UIKit.LoadRes = function(url, type, callback){
    cc.loader.loadRes(url, type, function(err, ret){
        if(err){
            cc.log("load --[[ %s ]]-- fail -- [[ %s ]]--", url, err);
        }else{
            if(callback){
                callback(err, ret);
            }
        }
    })
}

/**
 * @param {Array} preLoadList 预加载列表
 * @param {function} prodFunc 当前完成的进度
 * @param {function} completeFunc 预加载结束回调
 */
UIKit.PreLoadRes = function(preLoadList, prodFunc, completeFunc){
    cc.loader.loadResArray(preLoadList, (completedCount, totalCount, resList) => {
       if(prodFunc){
           prodFunc(completedCount, totalCount, resList);
       }
    }, (err, resList) => {
       if(completeFunc){
           completeFunc(err, resList);
       }
    })
}