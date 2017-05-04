
/**
 *控制器的声明及使用
 *$scope就是管理当前控制器作用域下的所有内容
 *作用域：类似js中function的作用域，内部函数可以访问外部的变量，但外部函数无法访问内部变量。
 *变量的取值：就近原则。
 */

var firstController=function($scope){  //此处的参数必须是$scope，其他参数无效【js注入】

	$scope.name="梁方丽";

	$scope.age="23";

}

var twoController=function($scope){

	$scope.name="shimily";

}

