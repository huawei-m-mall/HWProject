angular.module('huaweiMall',['ui.router',
'angularCSS',
'huaweiMall.homePage',
'huaweiMall.honorPage',
'huaweiMall.huaweiPage',
'huaweiMall.minePage',
'huaweiMall.sortPage',
'huaweiMall.cartPage',
'huaweiMall.productDetails'
])

.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home')
	
})
.directive('backTop',function(){
	return {
		restrict:"E",
		template:'<div id="backTop"></div>',
		link:function(scope,element,attr){
			element.bind('click',function(){
				$('body').animate({'scrollTop':0},300);
			})
		}
	}
})
