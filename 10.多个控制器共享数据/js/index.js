
//自定义模块  格式：anglular.module(模块名,[所依赖的其他模块],配置文件);

//factory方法设置共享数据,可以返回任何数据类型，可以实现双向绑定。在引用类型数据下，一方修改，全改。
//然后通过Data进行数据注入



var myApp=angular.module('myApp',[]);

myApp.factory('Data',function(){


	return{
		message:"这里是共享数据111"
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
	$scope.Data=Data;

})


// //创建自定义模块下面的局部控制器
// myApp.controller('twoController',function($scope){ 
// 	//局部控制器调用的时候，要先知道其所在的模块
// 	$scope.name=$scope.$$prevSibling.name;   //字符串类型，是不会跟随上一个值发生变化的
// 	$scope.age=$scope.$$prevSibling.age;	
// })


//创建自定义模块下面的局部控制器
myApp.controller('threeController',function($scope,Data){    //此处要进行数据注入
	//局部控制器调用的时候，要先知道其所在的模块
	$scope.data=$scope.$$prevSibling.data;

	$scope.Data=Data;

	//console.log(Data)
})



