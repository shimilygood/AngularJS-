
var myApp = angular.module('myApp',[]);


myApp.controller('row2',function($scope){
	$scope.status = false;
	$scope.changeStatus = function(event){
		angular.element(event.target).html('切换状态为'+$scope.status);
		$scope.status = !$scope.status;
		//转换成jquery对象
		
	}
});



myApp.controller('row3',function($scope){

	$scope.defaultStyle = {
			color:'red',
			background:'#ccc',
			padding:"5px 10px"
	};
	
	$scope.status = false;
	$scope.changeStatus = function(event){
		$scope.status = !$scope.status;
	
	}

	$scope.src="https://www.baidu.com/img/baidu_jgylogo3.gif?v=41950862.gif";
});

