//设定模板
var myApp=angular.module('myApp',[]);
//自定义指令
myApp.directive('booklist',function(){
	return {
		restrict:'ECM',
		controller:function($scope){  //相当于下面的自定义控制器
			$scope.books = [
				{name:'php'},
				{name:'java'},
				{name:'javaScript'}
			];
			this.addBook = function(){
				console.log(2222222)
			}
		},
		controllerAs:'bookListController', //给controller起个别名
		template:'<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
		replace:true,
		link:function(scope,iEelement,iAttrs,bookListController){  //自动注入参数
			iEelement.on('click',bookListController.addBook);
		}
	}
	
	
});



myApp.controller('row1',['$scope',function($scope){
	
//		$scope.books = [
//			{name:'php'},
//			{name:'java'},
//			{name:'javaScript'}
//		]


}])


