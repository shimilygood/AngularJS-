//设定模板
var myApp=angular.module('myApp',[]);
//自定义指令
myApp.directive('booklist',function(){
	return {
		restrict:'ECM',
		controller:function($scope){  //相当于下面的自定义控制器
			//$scope.books=$scope.a();
			//$scope.books=$scope.b;
			$scope.name=$scope.c;
			console.log($scope.name)
		},
		/*scope为false:内部和外部的$scope作用域是一样的；
		 *scope为true:会创建一个作用域，此时内部controller控制器是子类，外部控制器是父类，子类会继承父类
		 */
		//scope:true,   //创建一个有继承链的独立作用域 
		/*scope为对象时，创建的是一个独立的作用域，没有继承关系*/
		scope:{
			/*&将父元素books封装成一个函数 */
			//a:'&books',
			/*=是双向绑定,只适用于简单数据类型，引用数据类型不适用*/
			//b:'=parentBooks',
			c:'@scopeName'
		},
		controllerAs:'bookListController', //给controller起个别名
		template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>',
		replace:true,
		link:function(scope,iEelement,iAttrs,bookListController){  //自动注入参数
			//console.log(iEelement)
			//iEelement.on('click',bookListController.addBook);
		}
	}
	
	
});


//自定义控制器
myApp.controller('row1',['$scope',function($scope){
	console.log($scope)
		$scope.books = [
			{name:'php'},
			{name:'java'},
			{name:'javaScript'}
		]
		
		$scope.name="张三";
}])


