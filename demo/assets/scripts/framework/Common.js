require("./Global");
require("./UserConst");
require("./UIKit");
require("./NetWork");
require("./EventMgr");
require("./AudioMgr");
require("./SceneBase");


//////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 加载替换单独的贴图资源
 * @param {string} url 相对于resouces目录路径
 */
cc.Sprite.prototype.SetImage = function(url){
    if(url){
        UIKit.LoadRes(url, cc.SpriteFrame, (err, frame) => {
            this.spriteFrame = frame;
        });
    }
}

/**
 * 
 * @param {atlasFile} atlasFile 图集资源（相对于resources目录）
 * @param {image} image 图片名
 */
cc.Sprite.prototype.SetImageInfo = function(atlasFile, image){
    if(atlasFile && image){
        UIKit.LoadRes(atlasFile, cc.SpriteAtlas, (err, atlas) => {
            let frame = atlas.getSpriteFrame(image);
            this.spriteFrame = frame;
        });
    }
}