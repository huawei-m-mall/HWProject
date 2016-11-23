angular.module('huaweiMall.minePage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
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
		css:'app/pages/mine/mine.Glory shop/Glory shop.css'
	})
	// 帮助中心
	.state({
		name:'mine.help',
		url:'/help',
		templateUrl:'app/pages/mine/mine.help/help.html',
		css:'app/pages/mine/mine.help/help.css'
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
