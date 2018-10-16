/**
 * 游戏中用到的常量
 */

 ;window.UserConst = window.UserConst || {};

 /////////////////////////////////////////////////////////////////////////////////

/*
* 游戏场景枚举 与UserConst.SceneName一一对应，配合使用
*/ 
UserConst.SceneEnum = cc.Enum({
    None : 0,
});

UserConst.SceneName = [
    "None",
];

/////////////////////////////////////////////////////////////////////////////////

UserConst.GameState = cc.Enum({
    Menu : -1,
    Run : -1,
    Over : -1,
})

/////////////////////////////////////////////////////////////////////////////////

 UserConst.SCENE_ENUM = {
 };

 UserConst.PREFAB_ENUM = {
 };

 UserConst.PREFAB_CTRL_ENUM = {
 }

 /////////////////////////////////////////////////////////////////////////////////

 UserConst.CLOUD_STATUS = {
     CLUSTER : 0,   // 云聚集
     SPREAD  : 1,   // 云散开
 }


 // ui音效
 UserConst.UISOUND = {
     TOUCH_SFX : "ding",
 }

 /////////////////////////////////////////////////////////////////////////////////

 UserConst.PRELOADLIST = {};
 UserConst.PRELOADLIST[UserConst.SCENE_ENUM.INIT_SCENE] = [
 ];

 UserConst.PRELOADLIST[UserConst.SCENE_ENUM.LOTTERY_MAIN] = [
 ];

 UserConst.PRELOADLIST[UserConst.SCENE_ENUM.VILLAGE_MAIN] = [
 ];