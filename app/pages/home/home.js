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
		templateUrl:'app/pages/home/real_name/real_name.html'

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
.controller('homeCtrl',function($scope,$timeout){

		$scope.mySwiper1 = new Swiper ('.swiper-container1', {
	   		autoplay: 2000,
	   		autoplayDisableOnInteraction:false,
	   		loop: true,
	   		pagination: '.swiper-pagination'
		})
		
		$scope.mySwiper2 = new Swiper ('.swiper-container2', {
			direction:'vertical',  
	   		autoplay: 4000,
	   		autoplayDisableOnInteraction:false,
	   		loop: true
		})
	
	$.get('app/pages/home/home.json',function(res){
		$.each(res, function(i,elem) {
			if(i=="精品推荐"){
				var str="<section class='p'>";
			}else if(i=="热销配件"){
				var str="<section class='parts common'>";
			}else if(i=="品牌配件"){
				var str="<section class='brand common'>";
			}else{
				var str="<section class='common'>"
			}

			str+="<h3><span>"+i+"</span><hr/></h3><a href='javascript:;'><img src='"+elem.adImg+"'/></a><div>";
			$.each(elem.proList,function(j,el){	
				if(i!="精品推荐"){
					if(j%2==0){
						if(j!=0){
							str+="</ul>";
						}
						str+="<ul>";
					}
				}else{
					if(j%3==0){
						if(j!=0){
							str+="</ul>";
						}
						str+="<ul>";
					}
				}
				str+="<li><a ui-sref='productDetails' href='#/productDetails'>";
				if(i=="精品推荐"){
					str+="<p class='p-img'>"
				}else if(i=="热销配件"){
					str+="<p class='parts-img common-img'>"
				}else if(i=="品牌配件"){
					str+="<p class='brand-img common-img'>"
				}else{
					str+="<p class='common-img'>"
				}
				str+="<img class='lazy' src='"+el.img+"'/>"
				if(el.tag!=""){
					str+="<i class='icon-tag'><img src='"+el.tag+"'/></i>"
				}
				str+="</p>";
				str+="<p class='common-name'>"+el.name+"</p>";
				str+="<p class='common-promotion'>"+el.promotion+"</p>";
				str+="<p class='common-price'>"+el.price+"</p>";
				str+="</a></li>";
				
			})
			
				$(str).appendTo($(".main"));
				
		})
		
	})
	
})
