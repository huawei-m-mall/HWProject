angular.module('huaweiMall',['ui.router',
'angularCSS',
'huaweiMall.homePage',
'huaweiMall.honorPage',
'huaweiMall.huaweiPage',
'huaweiMall.minePage',
'huaweiMall.sortPage'
])

.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home')
	
})
