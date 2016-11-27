angular.module('minePage.mineAddress',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	// 三级路由
	.state({
		name:"myaddress.add",
		url:"/add",
		templateUrl:'app/pages/mine/mine.address/add/add.html',
		css:'app/pages/mine/mine.address/add/add.css',
	})
})