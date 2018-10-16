;window.UserLocalInfo = window.UserLocalInfo || {};

let userData = {};

UserLocalInfo.SetUserData = function(key, val){
	cc.sys.localStorage.setItem(key, val);
}

UserLocalInfo.SaveUserData = function(){
	cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
}

UserLocalInfo.GetUserData = function(key){
	let userData = JSON.parse(cc.sys.localStorage.getItem('userData'));
	return userData[key];
}