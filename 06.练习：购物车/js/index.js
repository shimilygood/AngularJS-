
/**
 *控制器的声明及使用
 *$scope就是管理当前控制器作用域下的所有内容
 *作用域：类似js中function的作用域，内部函数可以访问外部的变量，但外部函数无法访问内部变量。
 *变量的取值：就近原则。
 */

var cartController=function($scope){  //此处的参数必须是$scope，其他参数无效【js注入】


	$scope.cart=[    //应该是读取出的json数据
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
	 *查找索引值index
	 */

	 var findIndex=function(id){
	 	var index=-1;
	 	angular.forEach($scope.cart,function(item,key){
	 		if(item.id===id){
	 			index=key;
	 			return;
	 		}

	 	});
	 	return index;
	 }

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

	 /**
	  *删除产品
	  */
	 $scope.remove=function(id){
	  	//console.log(id);
	 	
	  	var index=findIndex(id);
	  	//console.log(index);
	  	 	if(index!==-1){  //当找到产品所在的索引值时，进行删除
	  		$scope.cart.splice(index,1);
	  	}
	  }


	 /**
	  *点击+,为产品添加数量
	  */
	  $scope.add=function(id){
	  	var index=findIndex(id);
	  	if(index!==-1){
	  		++$scope.cart[index].quantity;
	  	}

	  }

	  $scope.reduce=function(id){
	  	 var index=findIndex(id);

	  	 var item=$scope.cart[index];

	  	 if(item.quantity > 1){
	  		--$scope.cart[index].quantity;
	  	 }else{
	  	 	var returnKey=confirm("是否从购物车内删除该产品！");
	  	 	if(returnKey){
	  	 		$scope.remove(id);
	  	 	}
	  	 }
	  }






	
}