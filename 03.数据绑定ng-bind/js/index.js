
/**
 *控制器的声明及使用
 *$scope就是管理当前控制器作用域下的所有内容
 */

var firstController=function($scope){  //此处的参数必须是$scope，其他参数无效【js注入】

	$scope.name="梁方丽";

	$scope.age="23";

}

