//1.自定义模块
var myApp=angular.module('myApp',[]);

//2.自定义服务
myApp.service("productData",function(){
	return[
		{
			id:"021",
			name:"iPhone",
			price:"5322"
		},
		{
			id:"202",
			name:"Ipad",
			price:"2300"
		},
		{
			id:"003",
			name:"Mac",
			price:"8220"
		},
		{
			id:"305",
			name:"Ipad mini",
			price:"2220"
		},
		{
			id:"308",
			name:"Ipad mini2",
			price:"2220"
		},
		{
			id:"335",
			name:"魅族",
			price:"2220"
		},
		{
			id:"122",
			name:"小米",
			price:"2535"
		},
		{
			id:"3025",
			name:"小米2",
			price:"2535"
		}
	]
});

//3.自定义控制器
myApp.controller("productController",function($scope,productData){  //自动注入数据
	$scope.productData = productData;
	
	$scope.orderType = '';
	$scope.order = '-'; //降序
	
	//点击排序
	$scope.changOrder = function(type){
		$scope.orderType = type;
		if($scope.order ==''){
			$scope.order = '-';
		}else{
			$scope.order = '';
		}
	}
	
});



