
/**
 * 
 *
 *
 */


//自定义模块  格式：anglular.module(模块名,[所依赖的其他模块],配置文件);

var myApp=angular.module('myApp',[]);   

myApp.factory('Data',function(){

	return{
		message:"我是可以共享的数据哦！！！Shimily"
	};
})



myApp.controller('oneController',function($scope,Data){    //此处要进行数据注入
	//局部控制器调用的时候，要先知道其所在的模块
	$scope.name="张三";
	$scope.age="23";
	$scope.data={
		name:"王五",
		age:"50"
	};

	$scope.Data=Data;   //通过自动注入方式，共享数据

	$scope.today=new Date;


})



