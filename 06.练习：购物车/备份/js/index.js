
/**
 *控制器的声明及使用
 *$scope就是管理当前控制器作用域下的所有内容
 *作用域：类似js中function的作用域，内部函数可以访问外部的变量，但外部函数无法访问内部变量。
 *变量的取值：就近原则。
 */

var cartController=function($scope){  //此处的参数必须是$scope，其他参数无效【js注入】

	$scope.age=22;

	$scope.cart=[
		{
			id:99,
			name:"产品1",
			quantity:2,
			price:223
		},
		{
			id:104,
			name:"产品2",
			quantity:5,
			price:223
		},
		{
			id:120,
			name:"产品3",
			quantity:1,
			price:223
		},
		{
			id:83,
			name:"产品4",
			quantity:10,
			price:223
		},
	];

	/**
	 *购物车总价计算
	 */
	 $scope.totalprice=function(){
	 	var total=0;
	 	angular.forEach($scope.cart,function(item){
	 		total += item.quantity * item.price;
	 	});
	 	return total;
	 }

	 /**
	 *购物车总数计算
	 */
	 $scope.totalquantity=function(){
	 	var total=0;
	 	angular.forEach($scope.cart,function(item){
	 		total += item.quantity;
	 	});
	 	return total;
	 }



	
}