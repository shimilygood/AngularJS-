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
	$provide.provider('member',function(){
		this.$get = function(){
			return {
				message:"会员中心",
				time:"2015-09-14"
			}
		}
	});
	
});





/*
 * 模块的控制器：
 * 依赖注入模块中配置的服务里的内容
 */
myApp.controller("firstController",function(arctile,member,$scope){   //arctile参数实现依赖注入模块中的自定义服务arctile
	$scope.name="张三";
	$scope.age=20;
	console.log(arctile.message);
	console.log(member.message);
});





