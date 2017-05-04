//设定模板
var myApp=angular.module('myApp',[]);
//自定义指令
myApp.directive('booklist',function(){
	return {
		restrict:'ECM',
		controller:function($scope){  //相当于下面的控制器
			$scope.books = [
				{name:'php'},
				{name:'java'},
				{name:'javaScript'}
			]
		},
		template:'<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
		replace:true
	}
	
	
});





