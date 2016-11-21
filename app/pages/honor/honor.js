angular.module('huaweiMall.honorPage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state({
		name:'honor',
		url:'/honor',
		templateUrl:'app/pages/honor/honor.html'
	})
	
})
