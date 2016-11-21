angular.module('huaweiMall.huaweiPage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state({
		name:'huawei',
		url:'/huawei',
		css:'app/pages/huawei/huawei.css',
		templateUrl:'app/pages/huawei/huawei.html'
	})
	
})
