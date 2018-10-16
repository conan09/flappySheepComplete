;window.EventMgr = window.EventMgr || {};

let nameHandlerMap = {}

let _getHandlerMap = function(eventName){
    let list = nameHandlerMap[eventName];
    if(list){
        list = {};
        nameHandlerMap[eventName] = list;
    }
    return list;
}

EventMgr.HasListener = function(eventName, handler){
    return _getHandlerMap(eventName)[handler];
}

EventMgr.AddListener = function(eventName, handler, self){
    _getHandlerMap(eventName)[handler] = self || true;
}

EventMgr.RemoveListener = function(eventName, handler){
    _getHandlerMap(eventName)[handler] = null
}

EventMgr.Dispatch = function(eventName, data){
    let list = _getHandlerMap(eventName)
    for(var k in list){
        if(list[k] == true){
            k(data, eventName);
        }else{
            k(list[k], data, eventName);
        }
    }
}

EventMgr.AddList = function(list, self){
    for(var k in list){
        EventMgr.AddListener(k, list[k], self);
    }
}

EventMgr.RemoveList = function(list){
    for(var k in list){
        EventMgr.RemoveListener(k, list[k]);
    }
}