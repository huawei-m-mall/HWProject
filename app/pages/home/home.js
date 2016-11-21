angular.module('huaweiMall.homePage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	 
	.state({
		name:'home',
		url:'/home',
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
	.state({
		name:'phoneNav',
		url:'/phoneNav',
		css:'app/pages/home/phoneNav/phoneNav.css',
		templateUrl:'app/pages/home/phoneNav/phoneNav.html'
	})
	.state({
		name:'preference',
		url:'/preference',
		css:'app/pages/home/preference/preference.css',
		templateUrl:'app/pages/home/preference/preference.html'
	})
	.state({
		name:'v_code',
		url:'/v_code',
		css:'app/pages/home/v_code/v_code.css',
		templateUrl:'app/pages/home/v_code/v_code.html'
	})
	.state({
		name:'old_to_new',
		url:'/old_to_new',
		css:'app/pages/home/old_to_new/old_to_new.css',
		templateUrl:'app/pages/home/old_to_new/old_to_new.html'
	})
	
})
.controller('homeCtrl',function($scope){
	
})

