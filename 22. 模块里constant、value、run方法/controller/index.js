//自定义模块
var myApp = angular.module('myApp',[],function($provide){
	//$provide.factory
	//$provide.service
	//$provide.constant
});

//constant声明的可以注入到任何方法里面
//用来声明整个应用范围内的常量，并且让他们在所有配置（config方法里）和实例（controller，service等）方法中都可以用
myApp.constant('APIKEY','sdf');

//value声明的值，只能注入到controller、service、factory里面
myApp.value('vension','10.1.0');

myApp.config(function(APIKEY){
	console.log(APIKEY);
	//console.log(vension);
});

//run方法的运行，是在config之后，在controller等其他服务之前运行
myApp.run(function(){
	console.log("rrrrr")
});

//自定义控制器
myApp.controller('rowController',['$scope','APIKEY','vension',function($scope,APIKEY,vension){
	
	$scope.name="张三";
	
	$scope.APIKEY = APIKEY;
	$scope.vension = vension;
	console.log($scope.vension);
}]);




























