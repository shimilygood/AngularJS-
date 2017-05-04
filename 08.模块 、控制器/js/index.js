
//自定义模块  格式：anglular.module(模块名,[所依赖的其他模块],配置文件);

var myApp=angular.module('myApp',[]);



//自定义控制器
//全局控制器
var firstController=function($scope){//全局控制器，任何模块都可以调用它。

	$scope.name="张三";

}




//创建自定义模块下面的局部控制器
myApp.controller('twoController',function($scope){ 
	//局部控制器调用的时候，要先知道其所在的模块
	$scope.name="李四";
	
})


