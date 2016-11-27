angular.module('huaweiMall.sortPage',[])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/sort.part1')
	$stateProvider
	.state({
		name:'sort',
		url:'/sort',
		css:'app/pages/sort/sort.css',
		templateUrl:'app/pages/sort/sort.html',
		controller:'sortCtrl'
	})
	.state({
	name:"sort.part1",
	url:'/part1',
	css:"app/pages/sort/sort.css",
	templateUrl:"app/pages/sort/sort.part1/sort.part1.html",
	controller:function(scroll){
		scroll.autoScroll();
	}
})
.state({
	name:"sort.part2",
	url:'/part2',
	css:"app/pages/sort/sort.css",
	templateUrl:"app/pages/sort/sort.part2/sort.part2.html",
	controller:function(scroll){
		scroll.autoScroll();
	}
})
.state({
	name:"sort.part3",
	url:'/part3',
	css:"app/pages/sort/sort.css",
	templateUrl:"app/pages/sort/sort.part3/sort.part3.html",
	controller:function(scroll){
		scroll.autoScroll();
	}
})
.state({
	name:"sort.part4",
	url:'/part4',
	css:"app/pages/sort/sort.css",
	templateUrl:"app/pages/sort/sort.part4/sort.part4.html",
	controller:function(scroll){
		scroll.autoScroll();
	}
})
.state({
	name:"sort.part5",
	url:'/part5',
	css:"app/pages/sort/sort.css",
	templateUrl:"app/pages/sort/sort.part5/sort.part5.html",
	controller:function(scroll){
		scroll.autoScroll();
	}
})
.state({
	name:"sort.part6",
	url:'/part6',
	css:"app/pages/sort/sort.css",
	templateUrl:"app/pages/sort/sort.part6/sort.part6.html",
	controller:function(scroll){
		scroll.autoScroll();
	}
})
.state({
	name:"phone",
	url:'/phone',
	css:"app/pages/sort/list_cmn.css",
	templateUrl:"app/pages/sort/sort.part1/phone/phone.html",
	controller:'phoneCtrl'
	
})
.state({
	name:"pad",
	url:'/pad',
	css:"app/pages/sort/list_cmn.css",
	templateUrl:"app/pages/sort/sort.part2/pad/pad.html",
	controller:'padCtrl'
})
.state({
	name:"bracelet",
	url:'/bracelet',
	css:"app/pages/sort/list_cmn.css",
	templateUrl:"app/pages/sort/sort.part3/bracelet/bracelet.html",
	controller:'braceletCtrl'
})
.state({
	name:"house",
	url:'/house',
	css:"app/pages/sort/list_cmn.css",
	templateUrl:"app/pages/sort/sort.part4/house/house.html",
	controller:'houseCtrl'
})
.state({
	name:"private",
	url:'/private',
	css:"app/pages/sort/list_cmn.css",
	templateUrl:"app/pages/sort/sort.part5/private/private.html",
	controller:'privateCtrl'
})
.state({
	name:"use",
	url:'/use',
	css:"app/pages/sort/list_cmn.css",
	templateUrl:"app/pages/sort/sort.part6/use/use.html",
	controller:'useCtrl'
})


})


.controller("sortCtrl",function($scope,$http,$timeout){
	$("#leftSort ul li").each(function(i,elem){
		$(elem).click(function(){
			$("#leftSort ul li a").css("color","#333");
			$("#leftSort ul li a").eq(i).css("color","#ec1d20");
			$("#leftSort ul li span").css("display","none");
			$("#leftSort ul li span").eq(i).css("display","block");
		})
	
	})
	
})

.controller("phoneCtrl",function(){
	//请求数据
	$.get('app/pages/sort/json/phone.json',function(res){
		//最初请求到的数据保存在init中，数据被改变后可以使用init重置(主要针对重新点击"最新"选项时)
		var init = [];
		$.each(res.phone,function(i,ele){
			init.push(ele);
		})

		//点击四个排序选项
		var a;
		$("#sortNew a").each(function(j,ele){
			$(ele).click(function(){
				//点击时应用样式
				$("#sortNew a").removeClass();
				$(this).addClass("checked");
				//内容重新排序
				if(this.innerText=="人气"){
					resort("moods");
				}
				else if(this.innerText=="价格"){
					resort("price");
					a = 1; 
				}
				else if(this.innerText=="评价数"){
					resort("assess");
				}
				else{
					reLoad(init);
				}
			})
		})
		//将数据重新排序的方法
		var n = 180;
		function resort(attr){
			if(a==1){
				res.phone.reverse();
				$(".checked").children("span").css("transform","rotate("+ n +"deg)")
				n += 180 ;
			}
			else{
				$(".checked").children("span").addClass("priceUp")
				for (var i = 0; i < res.phone.length; i++) {
					for (var j = i+1; j < res.phone.length; j++) {
						if(parseInt(res.phone[i][attr])<parseInt(res.phone[j][attr])){
							var box = res.phone[j];
							res.phone[j] = res.phone[i];
							res.phone[i] = box ;
						}
					 }; 
				};
			}
			reLoad(res.phone);//重新排序后填充置页面
		}
		reLoad(res.phone);//初次进入该页面时把数据填充置页面
		function reLoad(data){
			var str="";
			$.each(data,function(i,elem){
				str+='<a ui-sref="productDetails" href="#/productDetails"><dl><dt>'
				if(elem.topimg){
					str += '<img src="'+elem.topimg+'" class="imges">';
				}
				str+='<img src="'+elem.img+'" class="img"></dt><div><dd>'+elem.name+'</dd><dd>￥'+elem.price+'</dd></div></dl></a>';
			})
			$("#showPhone").html(str);
		}
	})
	
})



.controller("padCtrl",function(){
	//请求数据
	$.get('app/pages/sort/json/pbcomputer.json',function(res){
		//最初请求到的数据保存在init中，数据被改变后可以使用init重置(主要针对重新点击"最新"选项时)
		var init = [];
		$.each(res.computer,function(i,ele){
			init.push(ele);
		})

		//点击四个排序选项
		var a;
		$("#sortNew a").each(function(j,ele){
			$(ele).click(function(){
				//点击时应用样式
				$("#sortNew a").removeClass();
				$(this).addClass("checked");
				//内容重新排序
				if(this.innerText=="人气"){
					resort("moods");
				}
				else if(this.innerText=="价格"){
					resort("price");
					a = 1; 
				}
				else if(this.innerText=="评价数"){
					resort("assess");
				}
				else{
					reLoad(init);
				}
			})
		})
		//将数据重新排序的方法
		var n = 180;
		function resort(attr){
			if(a==1){
				res.computer.reverse();
				$(".checked").children("span").css("transform","rotate("+ n +"deg)")
				n += 180 ;
			}
			else{
				$(".checked").children("span").addClass("priceUp")
				for (var i = 0; i < res.computer.length; i++) {
					for (var j = i+1; j < res.computer.length; j++) {
						if(parseInt(res.computer[i][attr])<parseInt(res.computer[j][attr])){
							var box = res.computer[j];
							console.log(1);
							res.computer[j] = res.computer[i];
							res.computer[i] = box ;
						}
					 }; 
				};
			}
			reLoad(res.computer);//重新排序后填充置页面
		}
		reLoad(res.computer);//初次进入该页面时把数据填充置页面
		function reLoad(data){
			var str="";
			$.each(data,function(i,elem){
				str+='<a ui-sref="productDetails" href="#/productDetails"><dl><dt>'
				if(elem.topimg){
					str += '<img src="'+elem.topimg+'" class="imges">';
				}
				str+='<img src="'+elem.img+'" class="img"></dt><div><dd>'+elem.name+'</dd><dd>￥'+elem.price+'</dd></div></dl></a>';
			})
			$("#showPhone").html(str);
		}
	})
	
})




.controller("braceletCtrl",function(){
	//请求数据
	$.get('app/pages/sort/json/dress.json',function(res){
		//最初请求到的数据保存在init中，数据被改变后可以使用init重置(主要针对重新点击"最新"选项时)
		var init = [];
		$.each(res.dress,function(i,ele){
			init.push(ele);
		})

		//点击四个排序选项
		var a;
		$("#sortNew a").each(function(j,ele){
			$(ele).click(function(){
				//点击时应用样式
				$("#sortNew a").removeClass();
				$(this).addClass("checked");
				//内容重新排序
				if(this.innerText=="人气"){
					resort("moods");
				}
				else if(this.innerText=="价格"){
					resort("price");
					console.log(a)
					a = 1; 
				}
				else if(this.innerText=="评价数"){
					resort("assess");
				}
				else{
					reLoad(init);
				}
			})
		})
		//将数据重新排序的方法
		var n = 180;
		function resort(attr){
			// console.log(a)
			
			if(a==1){

				res.dress.reverse();
				$(".checked").children("span").css("transform","rotate("+ n +"deg)")
				n += 180 ;
			}
			else{
				console.log(res)
				$(".checked").children("span").addClass("priceUp")
				for (var i = 0; i < res.dress.length; i++) {
					for (var j = i+1; j < res.dress.length; j++) {
						if(parseInt(res.dress[i][attr])<parseInt(res.dress[j][attr])){
							var box = res.dress[j];
							console.log(1);
							res.dress[j] = res.dress[i];
							res.dress[i] = box ;
						}
					 }; 
				};
			}
			reLoad(res.dress);//重新排序后填充置页面
		}
		reLoad(res.dress);//初次进入该页面时把数据填充置页面
		function reLoad(data){
			var str="";
			$.each(data,function(i,elem){
				str+='<a ui-sref="productDetails" href="#/productDetails"><dl><dt>'
				if(elem.topimg){
					str += '<img src="'+elem.topimg+'" class="imges">';
				}
				str+='<img src="'+elem.img+'" class="img"></dt><div><dd>'+elem.name+'</dd><dd>￥'+elem.price+'</dd></div></dl></a>';
			})
			$("#showPhone").html(str);
		}
	})
	
})



.controller("houseCtrl",function(){
	//请求数据
	$.get('app/pages/sort/json/house.json',function(res){
		//最初请求到的数据保存在init中，数据被改变后可以使用init重置(主要针对重新点击"最新"选项时)
		var init = [];
		$.each(res.house,function(i,ele){
			init.push(ele);
		})

		//点击四个排序选项
		var a;
		$("#sortNew a").each(function(j,ele){
			$(ele).click(function(){
				//点击时应用样式
				$("#sortNew a").removeClass();
				$(this).addClass("checked");
				//内容重新排序
				if(this.innerText=="人气"){
					resort("moods");
				}
				else if(this.innerText=="价格"){
					resort("price");
					a = 1; 
				}
				else if(this.innerText=="评价数"){
					resort("assess");
				}
				else{
					reLoad(init);
				}
			})
		})
		//将数据重新排序的方法
		var n = 180;
		function resort(attr){
			if(a==1){
				res.house.reverse();
				$(".checked").children("span").css("transform","rotate("+ n +"deg)")
				n += 180 ;
			}
			else{
				$(".checked").children("span").addClass("priceUp")
				for (var i = 0; i < res.house.length; i++) {
					for (var j = i+1; j < res.house.length; j++) {
						if(parseInt(res.house[i][attr])<parseInt(res.house[j][attr])){
							var box = res.house[j];
							res.house[j] = res.house[i];
							res.house[i] = box ;
						}
					 }; 
				};
			}
			reLoad(res.house);//重新排序后填充置页面
		}
		reLoad(res.house);//初次进入该页面时把数据填充置页面
		function reLoad(data){
			var str="";
			$.each(data,function(i,elem){
				str+='<a ui-sref="productDetails" href="#/productDetails"><dl><dt>'
				if(elem.topimg){
					str += '<img src="'+elem.topimg+'" class="imges">';
				}
				str+='<img src="'+elem.img+'" class="img"></dt><div><dd>'+elem.name+'</dd><dd>￥'+elem.price+'</dd></div></dl></a>';
			})
			$("#showPhone").html(str);
		}
	})
	
})


.controller("privateCtrl",function(){
	//请求数据
	$.get('app/pages/sort/json/private.json',function(res){
		//最初请求到的数据保存在init中，数据被改变后可以使用init重置(主要针对重新点击"最新"选项时)
		var init = [];
		$.each(res.private,function(i,ele){
			init.push(ele);
		})

		//点击四个排序选项
		var a;
		$("#sortNew a").each(function(j,ele){
			$(ele).click(function(){
				//点击时应用样式
				$("#sortNew a").removeClass();
				$(this).addClass("checked");
				//内容重新排序
				if(this.innerText=="人气"){
					resort("moods");
				}
				else if(this.innerText=="价格"){
					resort("price");
					a = 1; 
				}
				else if(this.innerText=="评价数"){
					resort("assess");
				}
				else{
					reLoad(init);
				}
			})
		})
		//将数据重新排序的方法
		var n = 180;
		function resort(attr){
			if(a==1){
				res.private.reverse();
				$(".checked").children("span").css("transform","rotate("+ n +"deg)")
				n += 180 ;
			}
			else{
				$(".checked").children("span").addClass("priceUp")
				for (var i = 0; i < res.private.length; i++) {
					for (var j = i+1; j < res.private.length; j++) {
						if(parseInt(res.private[i][attr])<parseInt(res.private[j][attr])){
							var box = res.private[j];
							console.log(1);
							res.private[j] = res.private[i];
							res.private[i] = box ;
						}
					 }; 
				};
			}
			reLoad(res.private);//重新排序后填充置页面
		}
		reLoad(res.private);//初次进入该页面时把数据填充置页面
		function reLoad(data){
			var str="";
			$.each(data,function(i,elem){
				str+='<a ui-sref="productDetails" href="#/productDetails"><dl><dt>'
				if(elem.topimg){
					str += '<img src="'+elem.topimg+'" class="imges">';
				}
				str+='<img src="'+elem.img+'" class="img"></dt><div><dd>'+elem.name+'</dd><dd>￥'+elem.price+'</dd></div></dl></a>';
			})
			$("#showPhone").html(str);
		}
	})
	
})


.controller("useCtrl",function(){
	//请求数据
	$.get('app/pages/sort/json/tuse.json',function(res){
		//最初请求到的数据保存在init中，数据被改变后可以使用init重置(主要针对重新点击"最新"选项时)
		var init = [];
		$.each(res.use,function(i,ele){
			init.push(ele);
		})

		//点击四个排序选项
		var a;
		$("#sortNew a").each(function(j,ele){
			$(ele).click(function(){
				//点击时应用样式
				$("#sortNew a").removeClass();
				$(this).addClass("checked");
				//内容重新排序
				if(this.innerText=="人气"){
					resort("moods");
				}
				else if(this.innerText=="价格"){
					resort("price");
					a = 1; 
				}
				else if(this.innerText=="评价数"){
					resort("assess");
				}
				else{
					reLoad(init);
				}
			})
		})
		//将数据重新排序的方法
		var n = 180;
		function resort(attr){
			if(a==1){
				res.use.reverse();
				$(".checked").children("span").css("transform","rotate("+ n +"deg)")
				n += 180 ;
			}
			else{
				$(".checked").children("span").addClass("priceUp")
				for (var i = 0; i < res.use.length; i++) {
					for (var j = i+1; j < res.use.length; j++) {
						if(parseInt(res.use[i][attr])<parseInt(res.use[j][attr])){
							var box = res.use[j];
							console.log(1);
							res.use[j] = res.use[i];
							res.use[i] = box ;
						}
					 }; 
				};
			}
			reLoad(res.use);//重新排序后填充置页面
		}
		reLoad(res.use);//初次进入该页面时把数据填充置页面
		function reLoad(data){
			var str="";
			$.each(data,function(i,elem){
				str+='<a ui-sref="productDetails" href="#/productDetails"><dl><dt>'
				if(elem.topimg){
					str += '<img src="'+elem.topimg+'" class="imges">';
				}
				str+='<img src="'+elem.img+'" class="img"></dt><div><dd>'+elem.name+'</dd><dd>￥'+elem.price+'</dd></div></dl></a>';
			})
			$("#showPhone").html(str);
		}
	})
	
})

//封装服务 （滚动条）

.service('scroll',function(){
   this.autoScroll=function(){
   		setTimeout(function(){
			$("#leftSort").css("height",innerHeight-$("#productSort")[0].offsetHeight);
		$("#rightSort").css("height",innerHeight-$("#productSort")[0].offsetHeight);
	
		$(window.resize,function(){
			$("#leftSort").css("height",innerHeight-$("#productSort")[0].offsetHeight);
		$("#rightSort").css("height",innerHeight-$("#productSort")[0].offsetHeight);
		})
		},0);
   }
})