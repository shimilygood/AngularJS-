//自定义模块
var myApp = angular.module('myApp',[],function($provide){
	//$provide.factory
	//$provide.service
	//$provide.constant
});



//自定义控制器
myApp.controller('rowController',['$scope',function($scope){
	
	$scope.name="张三";
	

}]);




























