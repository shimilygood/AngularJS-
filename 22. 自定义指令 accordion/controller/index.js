//自定义模块
var myApp = angular.module('myApp',[],function($provide){
	
});



//自定义控制器
myApp.controller('rowController',['$scope','APIKEY','vension',function($scope,APIKEY,vension){
	
	$scope.name="张三";
	
	$scope.APIKEY = APIKEY;
	$scope.vension = vension;
	console.log($scope.vension);
}]);




























