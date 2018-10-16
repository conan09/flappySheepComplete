let Http =  cc.Class({
    extends: cc.Component,

    properties: {
        url : "http://10.246.107.21/root/",//内网
        // url: "https://fbgame.gameabc2.com/root/",//外网facebook
    },

 
    ctor : function(){
    },
    
    _getURL : function(_cmd, _msg){
        let str = "";
        for(var key in data){
            if (str === ""){
                str += "?" + key + "=" + encodeURIComponent(data[key]);
            }
            else {
                str += "&" + key + "=" + encodeURIComponent(data[key]);
            }
        }
        return this.base_url + msgType + ".action" + str;
    },
    
    _sendMsg : function(_cmd, _msg, callback){
        var xhr = cc.loader.getXMLHttpRequest();
    
        ['loadstart', 'abort', 'error', 'load', 'loadend', 'timeout'].forEach(function (eventname) {
            xhr["on" + eventname] = function () {
                if (eventname === "timeout"){
                    cc.log("SERVER CONNECT TIME OUT!");
                }
            };
        });
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200) {
                if (callback) {
                    callback(JSON.parse(xhr.responseText));
                }
                ['loadstart', 'abort', 'error', 'load', 'loadend', 'timeout'].forEach(function (eventname) {
                    xhr["on" + eventname] = null;
                });
                xhr.onreadystatechange = null;
            }
        }
        //
        xhr.open("GET", this._getURL(_cmd, _msg), true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
        xhr.timeout = 5000;
        xhr.send();
    }, 
    /*
     * 网络请求之GET
     * url 请求的网络地址
     * callback 回调参数
     * */
/*
    getWithUrl : function(url,callback){
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.open("GET",url,true);
        xhr["onloadend"] = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                err = false;
            }else{
                err = true;
            }
            var response = xhr.responseText;
            callback(err,response);
        };
        xhr.send();
    },*/
 
    /*
     * 网络请求之POST
     * url 请求的网络地址
     * params  请求参数  ("id=1&id=2&id=3")
     * callback 回调参数
    ['loadstart', 'abort', 'error', 'load', 'loadend', 'timeout']
    * */
    /*sendWithUrl : function(url, params, callback){
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
        xhr["onloadend"] = function(){
            var sc = -1
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                sc = 0;
            }
            var json = JSON.parse(xhr.responseText)
            var rc = parseInt(json["code"])
            callback(sc, rc, json);
            if(sc == 0 && (rc != 0) && RETCODE[rc + ""])
            {
                Alert.getInst().show(RETCODE[rc + ""])
            }
            else if(sc != 0 || rc != 0 ){
                Alert.getInst().show("sc: " + sc + " rc: " + rc)
            }
        }
       xhr.send(params);
    },*/

    /**
     * 消息发送借口
     * @param {string} _cmd 消息ID
     * @param {*} data 需要发送的数据
     * @param {function} callback 回调函数
     */
    sendMsg : function(_cmd, _msg, callback) {
        this._sendMsg(_cmd, _msg, callback);
    },
});


/////////////////////////////////////////////////////////////////////////////////
 
;window.NetWork = window.NetWork || {    
    netHandler : null, //实例
}

//消息请求类型
NetWork.NET_STATE = {
    STATE_ERROR: 0,
    STATE_OK: 1,
    STATE_SERVER_ERROR: 2,
}

//获取网络实例
NetWork.GetInstance = function() {
    if (NetWork.netHandler == null) {
        NetWork.netHandler = new Http();
    }
    return NetWork.netHandler;
};
