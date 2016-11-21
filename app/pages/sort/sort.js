angular.module('huaweiMall.sortPage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state({
		name:'sort',
		url:'/sort',
		templateUrl:'app/pages/sort/sort.html'
	})
	
})
