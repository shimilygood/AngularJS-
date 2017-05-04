
var app=angular.module('app',[]);

var i=0;
//自定义指令
app.directive('customTags',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		template:'<div>{{user.name}}</div>',
		replace:true,   //替换当前标签
		transclude:true,
		compile:function(tElement,tAttrs,transclude){   //当前元素的jquery对象，元素上定义的属性参数，返回的link函数
		//1.一般在此操作DOM结构	
			tElement.append(angular.element("<div>{{user.name}}被点击次数：{{user.count}}</div>"));

			return {
				//在编译阶段之后，指令连接到子元素之前运行
				pref:function preLink(scope,iElement,iAttrs,controller){
					console.log(iElement)
					//console.log("preLink阶段")
				},
				//所有资源县指令都连接之后才运行
				post:function postLink(scope,iElement,iAttrs,controller){
					iElement.on('click',function(){
						console.log(scope.user);
						//触发脏检查
						scope.$apply(function(){
							//scope.user.name = "点击";
							scope.user.count = ++i;
						});
						
						
						//console.log('1221')
					});
					//console.log("所有子元素指令都连接之后，执行")
				}
			}
			/*
			return function(){
				console.log("sdfsdf")
			}
			*/
		},
		//指的就是compile里的postLink
		link:function(){
		//2.一般再此绑定事件
		
		
		}
	}
	
});

app.controller('row1',function($scope){
	$scope.users = [
		{
			name:"张三",
			age:23
		},
		{
			name:"李四",
			age:28
		}
	]
});






