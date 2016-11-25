angular.module('huaweiMall.minePage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	// 主页
	.state({
		name:'mine',
		url:'/mine',
		templateUrl:'app/pages/mine/mine.html', 
		css:'app/pages/mine/mine.css'
	})
	// 我的订单
	.state({
		name:'mine.order',
		url:'/order',
		templateUrl:'app/pages/mine/mine.order/myorder.html',
		css:'app/pages/mine/mine.order/myorder.css'
	})
	// 我的积分
	.state({
		name:'mine.score',
		url:'/score',
		templateUrl:'app/pages/mine/mine.score/myscore.html',
		css:'app/pages/mine/mine.score/myscore.css'
	})
	// 我的回收单
	.state({
		name:'mine.recovery',
		url:'/recovery',
		templateUrl:'app/pages/mine/mine.recovery/myrecovery.html',
		css:'app/pages/mine/mine.recovery/myrecovery.css'
	})
	// 我的预约
	.state({
		name:'mine.bood',
		url:'/bood',
		templateUrl:'app/pages/mine/mine.bood/mybood.html',
		css:'app/pages/mine/mine.bood/mybood.css'
	})
	// 我的代金券
	.state({
		name:'mine.chit',
		url:'/chit',
		templateUrl:'app/pages/mine/mine.chit/mychit.html',
		css:'app/pages/mine/mine.chit/mychit.css'
	})
	//收获地址
	.state({
		name:'mine.address',
		url:'/address',
		templateUrl:'app/pages/mine/mine.address/myaddress.html',
		css:'app/pages/mine/mine.address/myaddress.css'
	})
	// 退换货管理
	.state({
		name:'mine.returngoods',
		url:'/returngoods',
		templateUrl:'app/pages/mine/mine.returngoods/myreturngoods.html',
		css:'app/pages/mine/mine.returngoods/myreturngoods.css'
	})
	// 优惠券
	.state({
		name:'mine.coupons',
		url:'/coupons',
		templateUrl:'app/pages/mine/mine.coupons/coupons.html',
		css:'app/pages/mine/mine.coupons/coupons.css'
	})
	// 会员特权
	.state({
		name:'mine.vipPrivileges',
		url:'/vipPrivileges',
		templateUrl:'app/pages/mine/mine.vipPrivileges/vipPrivileges.html',
		css:'app/pages/mine/mine.vipPrivileges/vipPrivileges .css'
	})
	// 服务网点
	.state({
		name:'mine.serviceInternet',
		url:'/serviceInternet',
		templateUrl:'app/pages/mine/mine.serviceInternet/serviceInternet.html',
		css:'app/pages/mine/mine.serviceInternet/serviceInternet.css'
	})
	// 荣耀商铺
	.state({
		name:'mine.Glory shop',
		url:'/Glory shop',
		templateUrl:'app/pages/mine/mine.Glory shop/Glory shop.html',
		css:'app/pages/mine/mine.Glory shop/Glory shop.css',
		controller:"shopCtrl"
	})
	// 帮助中心
	.state({
		name:'mine.help',
		url:'/help',
		templateUrl:'app/pages/mine/mine.help/help.html',
		css:'app/pages/mine/mine.help/help.css',
		controller:"helpCtrl"
	})
	// 联系客服
	.state({
		name:'mine.relateService',
		url:'/relateService',
		templateUrl:'app/pages/mine/mine.relateService/relateService.html',
		css:'app/pages/mine/mine.relateService/relateService.css'
	})
	// 意见反馈
	.state({
		name:'mine.feedback',
		url:'/feedback',
		templateUrl:'app/pages/mine/mine.feedback/feedback.html',
		css:'app/pages/mine/mine.feedback/feedback.css'
	})
})

// 荣耀商铺的控制器
.controller('shopCtrl',function($scope){
		// alert(1);
		$.get('app/pages/mine/city.json',function(res){
			var provice = res.list;
			// 遍历得到省份;
			var tempStr = "";
			// $(".set2").html("广东");
		$.each(provice,function(i,elem){
			tempStr+="<option value='"+elem.province+"'>"+elem.province+"</option>";

		})
		$(".set").html(tempStr);


		// 触发change事件得到相应的市区
		$("#selet").change(function(){
			var CityStr="";
			var information = "";
			$.each(provice,function(i,elem){
				if($("#selet").val()==elem.province){
					var City = elem.branchs;
					$.each(City,function(j,el){
						// 市区字符串拼接
						CityStr+="<option value='"+el.city+"'>"+el.city+"</option>";
							// 遍历商铺信息
							var Stroe = el.store;
							$.each(Stroe ,function(k,el3){
								information+="<li><p>"+el3.name+"</p>";
								information+="<p>"+el3.address+"</p></li>";
							})
						
					})
				}
			})

			$(".set2").html(CityStr);
			$(".pj").html(information);
			
		})

		// 三级联动，下面的商铺信息相应要进行更新
		$("#selet2").change(function(){
			var information = "";
			$.each(provice,function(i,elem){
				var City = elem.branchs;
						$.each(City,function(j,el){
							if($("#selet2").val()==el.city){
								var Stroe = el.store;
								$.each(Stroe,function(k,el3){
									information+="<li><p>"+el3.name+"</p>";
									information+="<p>"+el3.address+"</p></li>";
								})
							}
						
					})
				
			})
			$(".pj").html(information);
		})


	})
		
		
})

// 帮助中心的一些事件
.controller("helpCtrl",function($scope){
	$("ul").each(function(i,elem){
		$(elem).click(function(){

			if($(this).children(".p").css("display")=="none"){
				$(this).children(".p").css("display","block");
				$(this).children(".li").children(".sp").children(0).attr("src","app/images/mine-images/arrows_06.jpg");
			}else{
				$(this).children(".p").css("display","none");
				$(this).children(".li").children(".sp").children(0).attr("src","app/images/mine-images/arrows_08.jpg");
			}
			
		})
	})
})