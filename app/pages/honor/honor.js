angular.module('huaweiMall.honorPage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state({
		name:'honor',
		url:'/honor',
		css:'app/pages/honor/honor.css',
		templateUrl:'app/pages/honor/honor.html',
		controller:function fun(){
			// 读取数据
			dataLoad() ;
			function dataLoad(){
				$.get("app/pages/home/home.json",function(req){
					console.log(req);
					load(".phone","精品推荐");
					load(".pad","智能穿戴");
					load(".parts","品牌配件");
					function load(node,attr){
						var box = '';
						$.each(req[attr]["proList"],function(i,ele){
							box+='<li><a href="#/productDetails"><p class="p-img"><img src="'+ ele.img +'" alt="">';
							if(ele.tag!=""){
								box+='<i></i>';
							}
							box+='</p><p class="p-name">'+ ele.name +'</p><p class="p-promotion">'+ ele.promotion +'</p><p class="p-price">'+ ele.price +'</p></a></li>';
							$(node).html(box);
						});
					}
				})
			}
			// 轮播图
			swiper();
			function swiper(){
				mySwiper = new Swiper ('.swiper-container', {
			   		autoplay: 2000,
			   		autoplayDisableOnInteraction:false,
			   		loop: true,
			   		pagination: '.swiper-pagination'
				})
			}
		}
	})
})
