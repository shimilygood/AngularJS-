//1.自定义模块
//自定义过滤器
var myApp=angular.module('myApp',[],function($provide,$filterProvider,$controllerProvider){
	$provide.service("Data",function(){
		return[
			{name:"张三",
			 age:20,
			 city:"上海"
			},
			{name:"张小小",
			 age:23,
			 city:"上海"
			},
			{name:"李四",
			 age:26,
			 city:"北京"
			},
			{name:"王五",
			 age:36,
			 city:"南京"
			}
		];
	});
	//过滤方法一：
	$filterProvider.register('filterAge',function(){
		return function(obj){
			//return obj
			var newObj = [];
			angular.forEach(obj,function(o){
				//过滤年龄
				if(o.age > 30){
					newObj.push(o)
				}
			});
			return newObj;
		}
	});
	
	$controllerProvider.register('fistController',function($scope,Data){
		$scope.data = Data;
		console.log($scope.data);
	});

})
//过滤方法二：
.filter('filterCity',function(){
	return function(obj){
		var newObj = [];
		angular.forEach(obj,function(o){
			//过滤年龄
			if(o.city =="上海"){
				newObj.push(o)
			}
		});
		return newObj;
	}
});

