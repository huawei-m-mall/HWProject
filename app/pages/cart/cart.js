angular.module('huaweiMall.cartPage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state({
		name:'cart',
		url:'/cart',
		css:'app/pages/cart/cart.css',
		templateUrl:'app/pages/cart/cart.html',
		controller:'cartCtrl'
	})
})
.controller('cartCtrl',function($scope,$timeout){
	function loadHistory(){
		if(localStorage.proList){
			$scope.flag=true;
			var data=localStorage.proList;
			$scope.data=JSON.parse(data);
			totalMoney();
		}
	}
	loadHistory();
	
	function totalMoney(){
		$timeout(function(){
			var sum=0,price,num;
			$('.is_check').each(function(i,elem){
				price=$(this).parents('li').find('.price').text();
				num=$(this).parents('li').find('.num').val();
				price=parseFloat(price.substr(1)).toFixed(2);
				sum+=price*num;
			})
			$('.total').text(sum);
		},0)
	}
	
	$scope.del=function(){
		$('.is_check').parents('li').remove();
		if(!$('.full li').length){
			$scope.flag=false;
			$scope.clear();
			return;
		}
		var data=localStorage.proList;
		$scope.data=JSON.parse(data);
		//判断产出元素，并从本地缓存中删除
		$($scope.data).each(function(i,elem){
			$('.is_check').each(function(j,el){
				if($(this).parents('li').find('.name').html()==elem.name){
					$($scope.data).splice(i,1);
				}
			})
		})
		localStorage.proList=JSON.stringify($scope.data);
	}
	
	$scope.changeNum=function(){
		$scope.data=localStorage.proList;
		$scope.data=JSON.parse($scope.data);
		$scope.data[0].num=$('.num').val();
		localStorage.proList=JSON.stringify($scope.data);
		totalMoney();
	}
	
	$scope.choose=function($event){

		if($($event.target).hasClass('is_check')){
			
			$($event.target).addClass('no_check').removeClass('is_check');
		}else{
			$($event.target).addClass('is_check').removeClass('no_check');
		}
		totalMoney();
	}
	
	$('.clear').click(function(){
		if($('.is_check').length!=0){
			localStorage.removeItem('proList');
			$scope.$apply(function(){
				$scope.flag=false;
			})
		}else{
			tips();
		}
		
	})
	
	function tips(){
		//给提示框赋值
		
		//判断当前是否有动画正在执行
			if($(".emptyTips").is(':animated')){
				return;
			}
			$('.emptyTips').css({'opacity':1});
			
			$scope.$apply(function(){
				$scope.maxFlag=true;
				$('.emptyTips').animate({'opacity':0},1000,function(){
					$scope.maxFlag=false;
				})
			})
	}
	

})
