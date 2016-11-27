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
		css:'app/pages/mine/mine.order/myorder.css',
		controller:"myorderCtrl"
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
	//收货地址
	.state({
		name:'mine.address',
		url:'/address',
		templateUrl:'app/pages/mine/mine.address/myaddress.html',
		css:'app/pages/mine/mine.address/myaddress.css',
		controller:"buyaddressCtrl"
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

	// 三级路由
	.state({
		name:'adc',
		url:'/adc',
		templateUrl:'app/pages/mine/mine.address/add/add.html',
		css:'app/pages/mine/mine.address/add/add.css',
		controller:"adcCtrl"
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

// 我的订单部分
.controller("myorderCtrl",function(){
	$("li").click(function(){
		$("li").css("border","none");
		$("li").css("color","black");
		$(this).css("border-bottom","1px solid red");
		$(this).css("color","red");
	})
})


// 新增收货地址
.controller("adcCtrl",function(){
	// // 判断本地缓存里面是否有数据
	// $(".main .in1").val(ob.in1);
	// $(".main .in2").val(ob.in2);
	// $(".main .in3").val(ob.in3);
	// $(".main .in4").val(ob.in4);
	$(".bottom .sp2").click(function(){
		// 清除缓存
		// localStorage.clear();
		var addArr = JSON.parse(localStorage.getItem("Obj"));
		if(!addArr){
			var addArr = [];
		}else{
			addArr = addArr;
		}
		var	in1 = $(".main .in1").val();
		var	in2 = $(".main .in2").val();
		var	in3 = $(".main .in3").val();
		var	in4 = $(".main .in4").val();
		if(in1.length!=0&&in2.length!=0&&in3.length!=0&&in4.length!=0){
			if(addArr.length==0){
				addArr[0]={
					in1:in1,
					in2:in2,
					in3:in3,
					in4:in4
				}
			}
			// 不能让同名的添加进数组里面
			for(var i = 0;i<addArr.length;i++){
				console.log(addArr[i]["in1"]==in1)
				if(addArr[i]["in1"]==in1){
					break;
				}
			}

			// 用户名字不同的继续添加
			if(i>=addArr.length){
				addArr[i]={
					in1:in1,
					in2:in2,
					in3:in3,
					in4:in4
				}
			}
			
		}else{
			alert("请完善信息");
			return false;
		}
		// alert("信息添加成功");
		localStorage.setItem("Obj",JSON.stringify(addArr));
		
		// 把地址信息添加在管理收货地址页面
		


	})

})

// 管理收货地址页面
.controller("buyaddressCtrl",function($scope){
	// console.log(typeof localStorage)
	// console.log(localStorage);
	// 判断是否有添加收货地址,据此显示不同的页面
	function loadAdd(){

		if(!localStorage.Obj){
			return;
		}
				var ob = JSON.parse(localStorage.getItem("Obj"));
			// console.log(ob)
			// console.log(!localStorage)
			if(ob.length==0){
				var obj = [];
				$(".myaddress .main .empty").css("display","block");
				$(".myaddress .main .own").css("display","none");
			}else{
				$(".myaddress .main .empty").css("display","none");
				$(".myaddress .main .own").css("display","block");
				var str = "";
				$.each(ob,function(i,elem){
					str+="<ul><li><p class='p1'><span class='sp1'>"+elem.in1+"</span><span class='sp2'>"+elem.in2+"</span>";
					str+="</p><p class='p2'><span class='sp3'>"+elem.in3+"</span><span class='sp4'>"+elem.in4+"</span></p></li><li><a ui-sref='adc' href='#/adc' class='a'><p>"+"<img src='app/images/mine-images/icon_edit.png'>";
					str+="<span>编辑</span></p></a>";
					str+="<p class='delete'><img src='app/images/mine-images/icon_delete.png'><span>删除</span></p></li></ul>";
				})
				
				$(".main .own").html(str);
			}	

	}
	loadAdd();
	// 点击新增收货地址页面
	// 点击管理收货地址页面编辑按钮，把增加收货地址页面给替换掉
	$(".myaddress .main .own .a").click(function(){
			var in1 = $(this).parent().prev().children(".p1").children(".sp1").html();
			var in2 = $(this).parent().prev().children(".p1").children(".sp2").html();
			var in3 = $(this).parent().prev().children(".p2").children(".sp3").html();
			var in4 = $(this).parent().prev().children(".p2").children(".sp4").html();
			// 让增加收货地址的页面变为收货人信息
			$(".myadd .main .in1").val(in1);
			console.log($(".myadd .main .in1").val());
	})

	// 点击删除内容
	$(".myaddress .main .own .delete").click(function(){
		var ob = JSON.parse(localStorage.getItem("Obj"));
		var in1 = $(this).parent().prev().children(".p1").children(".sp1").html();
		$.each(ob,function(i,elem){
			if(in1==elem.in1){
				
				ob.splice(i,1);
				console.log(ob);

			}
		})
		$(this).parent().parent().remove();
		if(ob.length==0){
			localStorage.removeItem("Obj");
		}else{
			localStorage.setItem("Obj",JSON.stringify(ob));
		}
		
	})
})


					
						
						
	
						
						
					
					
						
							
						
						
							
							
						
					

				