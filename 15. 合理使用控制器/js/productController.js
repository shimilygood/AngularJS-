//1.自定义模块
//自定义过滤器
var myApp=angular.module('myApp',[],function(){})

myApp.factory('Custom',function($window){
	console.log($window)
});

//隐式的依赖注入
myApp.controller('row1',function($scope,Custom){
	
	
})

//显式的依赖注入
myApp.controller('row2',['$scope','$filter',function(a,b){
	console.log(a);
	var fn1=b('json')([1,2,3,4,5]);
	console.log(fn1);
}])





