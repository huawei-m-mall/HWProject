angular.module('huaweiMall.minePage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state({
		name:'mine',
		url:'/mine',
		templateUrl:'app/pages/mine/mine.html'
	})
	
})
