angular.module('huaweiMall.homePage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	 
	.state({
		name:'home',
		url:'/home',
		// css:'app/pages/home/swiper-3.3.1.min.css',
		css:'app/pages/home/home.css',
		templateUrl:'app/pages/home/home.html',
		controller:'homeCtrl'
	})
	.state({
		name:'real_name',
		url:'/real_name',
		css:'app/pages/home/real_name/real_name.css',
		templateUrl:'app/pages/home/real_name/real_name.html',
//		controller:function($css){
//			$css.add('app/pages/home/home.css');
//		}
	})
//	
//	.state({
//		name:'home.part2',
//		url:'/part2',
//		templateUrl:'app/pages/home/home.part2/home.part2.html'
//	})
	
})
.controller('homeCtrl',function($scope){
	
})

