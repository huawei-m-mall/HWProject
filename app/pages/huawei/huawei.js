angular.module('huaweiMall.huaweiPage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state({
		name:'list',
		url:'/list',
		css:'app/pages/huawei/list/list.css',
		templateUrl:'app/pages/huawei/list/list.html',
		controller: function(){
			// 左上角返回按钮
			back() ;
			function back(){
				$(".btn-back").click(function(){
					window.history.go(-1);
				})
			}
		}
	})
	.state({
		name:'wx_realname',
		url:'/wx_realname',
		css:'app/pages/huawei/wx_realname/wx_realname.css',
		templateUrl:'app/pages/huawei/wx_realname/wx_realname.html'
	})
	// .state({
	// 	name:'cart',
	// 	url:'/cart',
	// 	css:'app/pages/cart/cart.css',
	// 	templateUrl:'app/pages/cart/cart.html'
	// })
	.state({
		name:'download',
		url:'/download',
		css:'app/pages/huawei/download/download.css',
		templateUrl:'app/pages/huawei/download/download.html',
		controller: function(){
			// 左上角返回按钮
			back() ;
			function back(){
				$(".btn-back").click(function(){
					window.history.go(-1);
				})
			}
		}
	})
	.state({
		name:'level',
		url:'/mine/level',
		css:'app/pages/huawei/level/level.css',
		templateUrl:'app/pages/huawei/level/level.html',
		controller:function(){
			// 点击切换
			pageChange() ;
			function pageChange(){
				$(".list li").click(function(){
					// 页面显示
					$(".myPage").removeClass("showPage");
					var index = $(this).index();
					$(".myPage").eq(index).addClass("showPage");
					// 小三角显示
					$(".list span").removeClass();
					$(this).children("span").addClass("defult");
					$(this).addClass("on").siblings().removeClass("on");
				})
			}
			// 左上角返回按钮
			back() ;
			function back(){
				$(".btn-back").click(function(){
					window.history.go(-1);
				})
			}
		}
	})
	.state({
		name:'huawei',
		url:'/huawei',
		css:'app/pages/huawei/huawei.css',
		templateUrl:'app/pages/huawei/huawei.html',
		controller:function fun(){
			// 读取数据
			dataLoad() ;
			function dataLoad(){
				$.get("app/pages/home/home.json",function(req){
//					console.log(req);
					load(".phone","精品推荐");
					load(".pad","智能穿戴");
					load(".parts","品牌配件");
					function load(node,attr){
						var box = '';
						$.each(req[attr]["proList"],function(i,ele){
							// console.log(ele.price);
							box += '<li><a href="#/productDetails"><p class="p-img"><img src="'+ ele.img +'" alt="">';
							if(ele.tag != ""){
								box += '<i></i>';
							}
							box += '</p><p class="p-name">'+ ele.name +'</p><p class="p-promotion">'+ ele.promotion +'</p><p class="p-price">'+ ele.price +'</p></a></li>';
							$(node).html(box);
						});
					}
				})
			}
			// return dataLoad;
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
