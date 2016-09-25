angular.module('app', ['YgNotification'])

.controller('MainCtrl', function(YgNotify){
	setTimeout(function(){
		YgNotify.alert('warning','hololo',5000);
		YgNotify.alert('danger','hahaha',1000);
	}, 5000);
})
