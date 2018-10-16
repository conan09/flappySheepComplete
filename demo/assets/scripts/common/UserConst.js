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
    InitScene : 1,
    LotteryScene : 2,
});

UserConst.SceneName = [
    "None",
    "InitScene",
    "lottery_main",
];

/////////////////////////////////////////////////////////////////////////////////

UserConst.GameState = cc.Enum({
    Menu : -1,
    Run : -1,
    Over : -1,
})

/////////////////////////////////////////////////////////////////////////////////

 UserConst.SCENE_ENUM = {
     INIT_SCENE     : "InitScene",
     LOTTERY_MAIN   : "lottery_main",
     VILLAGE_MAIN   : "village_main",
     VILLAGE_BUILD  : "village_build",
 };

 UserConst.PREFAB_ENUM = {
     CLOUD_NODE         : "prefabs/pre_cloud_node",
     TIPS_NODE          : "prefabs/pre_tips_node",
     VILLAGE_BUILD_NODE : "prefabs/pre_village_build",
     MSG_BOX            : "prefabs/messageBox",
 };

 UserConst.PREFAB_CTRL_ENUM = {
     CLOUD_NODE_CTRL: "CloudItem",
     TIPS_NODE_CTRL: "ctrl_tips_node",
     VILLAGE_BUILD_NODE_CTRL: "ctrl_village_build_node"
 }

 UserConst.BGM_ENUM = {
    [UserConst.SCENE_ENUM.INIT_SCENE]    : "bgm_mainScene",
    [UserConst.SCENE_ENUM.LOTTERY_MAIN]  : "bgm_mainScene",
    [UserConst.SCENE_ENUM.VILLAGE_MAIN]  : "bgm_mainScene",
    [UserConst.SCENE_ENUM.VILLAGE_BUILD] : "bgm_mainScene",
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
    UserConst.PREFAB_ENUM.CLOUD_NODE,
    UserConst.PREFAB_ENUM.TIPS_NODE,
    UserConst.PREFAB_ENUM.VILLAGE_BUILD_NODE,

    //scene
    // UserConst.SCENE_TYPE.LOGO_SHOW,
    UserConst.SCENE_ENUM.LOTTERY_MAIN,
    UserConst.SCENE_ENUM.VILLAGE_MAIN,
 ];

 UserConst.PRELOADLIST[UserConst.SCENE_ENUM.LOTTERY_MAIN] = [
 ];

 UserConst.PRELOADLIST[UserConst.SCENE_ENUM.VILLAGE_MAIN] = [
 ];