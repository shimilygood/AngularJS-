/*
 * 模块：
 * 自定义模块  格式：anglular.module(模块名,[所依赖的其他模块],配置文件);
 */

var myApp=angular.module('myApp',[],function($provide){
	//模块配置
	//自定义服务
	$provide.provider('arctile',function(){
		this.$get = function(){
			return {
				message:"文章模块",
				time:"2015-09-14"
			}
		}
	});
	
	//自定义工厂[可以返回任何数据类型]
	$provide.factory('artFactory',function(){
		//可以返回任何数据类型
		return [1,2,1,3,5,62];
	});
	
	//自定义服务[返回的数据必须是引用类型，不能是基本类型的数据，比如字符串、数字]
	$provide.service("artService",function(){
		return ['上海','北京']
	});
});


/**
 * 快捷方法的使用
 */
myApp.factory("fact1",function(){
	return ['上海','北京','深圳']
});

myApp.service();



/*
 * 模块的控制器：
 * 依赖注入模块中配置的服务里的内容
 */
myApp.controller("firstController",function(arctile,artFactory,artService,fact1,$scope){   //arctile参数实现依赖注入模块中的自定义服务arctile
	$scope.name="张三";
	console.log(arctile);
	console.log(artFactory);
	console.log(artService);
	console.log(fact1);
});





