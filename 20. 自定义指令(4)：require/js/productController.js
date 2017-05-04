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
				//触发脏检查
				$scope.$apply(function(){
					$scope.books.push({
						name:"angularJs"
					})
				})
				
			}
		},
		controllerAs:'bookListController', //给controller起个别名
		template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
		replace:true,
		link:function(scope,iEelement,iAttrs,bookListController){  //自动注入参数
			//console.log(iEelement)
			//iEelement.on('click',bookListController.addBook);
		}
	}
	
	
});

myApp.directive('bookAdd',function(){
	return{
		restrict:'ECM',
		require:'^booklist',
		template:'<button>添加</button>',
		replace:true,
		link:function(scope,iEelement,iAttrs,bookListController){  //添加事件
			console.log(iEelement)
			iEelement.on('click',bookListController.addBook);
		}
	}
});

//自定义控制器
myApp.controller('row1',['$scope',function($scope){
	
//		$scope.books = [
//			{name:'php'},
//			{name:'java'},
//			{name:'javaScript'}
//		]


}])


