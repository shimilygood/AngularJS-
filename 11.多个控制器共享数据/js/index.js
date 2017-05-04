
//自定义模块  格式：anglular.module(模块名,[所依赖的其他模块],配置文件);

//factory方法设置共享数据,可以返回任何数据类型，可以实现双向绑定。在引用类型数据下，一方修改，全改。
//然后通过Data进行数据注入


/**
 * 1.创建模块
 */
var myApp=angular.module('myApp',[]);

myApp.factory('pubData',function(){
	//共享数据方法二：推荐使用这种方法共享数据
	return{
		message:"这里是共享数据信息"
	};
})


/**
 * 2.创建模块中的控制器
 */

myApp.controller('row1Controller',function($scope,pubData){
	$scope.name = '张三';
	$scope.age = 22;
	$scope.pubdata = pubData;
});


myApp.controller('row2Controller',function($scope){
	$scope.name = '小明';
	$scope.age = 30;
	//共享数据方法一：这种方法不推荐使用
	$scope.data = {
		tel:12236566,
		adr:"上海市普陀区"
	}
	
});

myApp.controller('row3Controller',function($scope,pubData){   //自动注入通过factory声明的共享数据
	
	//获取上个节点
	$scope.name = $scope.$$prevSibling.name; 
	//引用类型数据，是可以跟着变化的
	$scope.data = $scope.$$prevSibling.data;
	
	
	$scope.pubdata = pubData;
	
});



