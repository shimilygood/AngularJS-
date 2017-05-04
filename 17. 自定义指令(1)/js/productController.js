//自定义指令
var myApp=angular.module('myApp',[]);


myApp.directive('customtags',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		template:'<div>这是标签内的内容！</div>',
		//templateUrl:'a.html',
		replace:true   //替换当前标签
	}
	
});

myApp.directive('ctags',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		templateUrl:'a.html',
		replace:true   //替换当前标签
	}
	
});

myApp.directive('mtags',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		templateUrl:'mtags-con'
		
	}
	
});

myApp.controller('row2',function($scope){
	$scope.name = "张三";
});




