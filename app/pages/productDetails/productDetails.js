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
.controller('PDCtrl',function($scope,$timeout,$rootScope){
	
	
	
	//轮播图
	$scope.mySwiper = new Swiper ('.swiper-container', {
   		autoplay: 2000,
   		autoplayDisableOnInteraction:false,
   		loop: true,
   		pagination: '.swiper-pagination',
   		onSlideChangeStart: function(swiper){
	      			$('.swiper-pagination-current').html(swiper.activeIndex==10?1:swiper.activeIndex);
	    }
	})
	
	
	//选择类型
	$(".prodetail a").each(function(i,elem){
	  	$(elem).click(function(){
	  		$(".prodetail a").css({"border-bottom":"none","color":"#000"});
	  		$(this).css({"border-bottom":"1px solid #e01d20","color":"#e01d20"});
	  	})
  	})
	
	
	//详情切换
	$("#orderPro dl").each(function(i,elem){
		$(elem).each(function(j,el){
			$(el).find('a').click(function(){
				$(el).find('a').css({'background':'#fff','color':"#000","border-color":"#b2b2b2"});
				$(this).css({'background':'#fef5f2','color':"#f03f01","border-color":"#f03f01"});
			})
		})
		
	})
	
	//初始化页面商品数量
	function loadHistory(){
		if(localStorage.proList){
			$scope.data=JSON.parse(localStorage.proList);
			$scope.num=$scope.data[0].num;
			$scope.cnt=$scope.data[0].num;
		}else{
			$scope.num=0;
			$scope.cnt=0;
			$('.mul').addClass('disabled');
		}
	}
	
	loadHistory();
	
	//添加购物车
	//初始化是否加入购物车布尔变量
	$scope.tip=true;
	$('.add').click(function(){
		
				
		var name=$('#introPro>h2').text();
		var img=$(this).parents('#proMain').find('.swiper-slide:eq(1) img').attr('src');
		var price=$('.price').text();
		var parts=$('.parts img').attr('src');
		if(!parts){
			parts="";
		}

		if($scope.tip){
			
			if(localStorage.proList){
				$scope.data=JSON.parse(localStorage.proList);
				
			}else{
				$scope.data=[
					{
						name:name,
						img:img,
						price:price,
						parts:parts,
						num:0
					}
				]
			}	
			$scope.tip=false;
		}
		
		if($scope.data[0].num>=10){
			$scope.$apply(function(){
				$scope.tipText="哎哟，购买数达上限啦!"
			})
			tips();
			
			return;
		}

		$scope.data[0].num++;
		
		//利用手动脏检查进行商品数量更新
		$scope.$apply(function(){
			$scope.num=$scope.data[0].num;
		})
		
		//重置减少按钮
		$('.disabled').removeClass('disabled');
		
	})
	
	//点击减少按钮
	$('.mul').click(function(){
//		console.log($scope.data[0].num);
		if($scope.num==1||$scope.data[0].num<=1){
			$(this).addClass('disabled');
			return;
		}
		$scope.tip=false;
		$scope.data[0].num--;
		//利用手动脏检查进行商品数量更新
		$scope.$apply(function(){
			$scope.num=$scope.data[0].num;
		})
		
		
	})
	
	//加入购物车按钮
	$(".addCart").click(function(){
		
		//直接点击购物车，不能商品
		if($scope.tip){
			$scope.$apply(function(){
				$scope.tipText="请先修改购物车中的商品数量,否则不能重复提交哦";
			})
			tips();
			return;
		}
		$scope.$apply(function(){
			$scope.flag=true;
		})
		
		localStorage.proList=JSON.stringify($scope.data);
		$scope.cnt++;
		
	})
	
	function tips(){
		//给提示框赋值
		
		//判断当前是否有动画正在执行
			if($(".maxNum").is(':animated')){
				return;
			}
			$('.maxNum').css({'opacity':1});
			
			$scope.$apply(function(){
				
				$scope.maxFlag=true;
				$('.maxNum').animate({'opacity':0},1000,function(){
					$scope.maxFlag=false;
					
				})
			})
	}
	
})
