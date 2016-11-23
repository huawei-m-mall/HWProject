angular.module('huaweiMall.productDetails',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state({
		name:'productDetails',
		url:'/productDetails',
		css:'app/pages/productDetails/productDetails.css',
		templateUrl:'app/pages/productDetails/productDetails.html',
		controller:'PDCtrl'
	})
	
})
.controller('PDCtrl',function($scope){
	$scope.mySwiper = new Swiper ('.swiper-container', {
   		autoplay: 2000,
   		autoplayDisableOnInteraction:false,
   		loop: true,
   		pagination: '.swiper-pagination',
   		onSlideChangeStart: function(swiper){
	      	$('.swiper-pagination-current').html(swiper.activeIndex==10?1:swiper.activeIndex);
	    }
	})
	$(".prodetail a").each(function(i,elem){
	  	$(elem).click(function(){
	  		$(".prodetail a").css({"border-bottom":"none","color":"#000"});
	  		$(this).css({"border-bottom":"1px solid #e01d20","color":"#e01d20"});
	  	})
  	})
	$("#orderPro dl").each(function(i,elem){
		$(elem).each(function(j,el){
			$(el).find('a').click(function(){
				$(el).find('a').css({'background':'#fff','color':"#000","border-color":"#b2b2b2"});
				$(this).css({'background':'#fef5f2','color':"#f03f01","border-color":"#f03f01"});
			})
		})
		
	})
})
