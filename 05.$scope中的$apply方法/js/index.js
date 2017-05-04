
/**
 *控制器的声明及使用
 *$scope就是管理当前控制器作用域下的所有内容
 *作用域：类似js中function的作用域，内部函数可以访问外部的变量，但外部函数无法访问内部变量。
 *变量的取值：就近原则。
 */

var firstController=function($scope){  //此处的参数必须是$scope，其他参数无效【js注入】


	//$apply()方法：通过脏检查方法告知视图控制器里的内容发生了变化，触发监听事件
	setInterval(function(){

		$scope.$apply(function(){    
			
			$scope.date=new Date();
			
		});

	},1000);


	/*$watch()方法：
	 *$watch("第一个参数",function(){执行代码},第三个参数);  
	 *当表达式是对象/数组时，第三个参数要设置为true。如果不是对象/数组时，第三个参数可以省略。
	 *监听一个modle每次改变时，都会触发第二个函数。
	 */

	$scope.name="张三";
	$scope.count=0;

	$scope.$watch("name",function(m,n){
		++$scope.count;
		if($scope.count>20){
			$scope.name="你的输入次数已经超过20次";
		}
		console.log(m,n,$scope.count);
	});


	//当表达式为对象时，$watch()的第三个参数要设置为true。
	
	$scope.obj={
		name:"shimily",
		age:20
	};

	$scope.$watch("name",function(m,n){
		++$scope.count;
		if($scope.count>20){
			$scope.name="你的输入次数已经超过20次";
		}
		console.log(m,n,$scope.count);
	});




}