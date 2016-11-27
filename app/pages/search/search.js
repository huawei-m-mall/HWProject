angular.module('huaweiMall.searchPage',[])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state({
		name:'search',
		url:'/search',
		css:'app/pages/search/search.css',
		templateUrl:'app/pages/search/search.html',
		controller:function(){
			// 搜索页面的footer隐藏
			$("footer").css("visibility","hidden");
			$(".backBtn").click(function(){
				$("footer").css("visibility","visible");
			});

			// 请求JSON数据
			$.get("app/pages/sort/json/prosort.json",function(res){
				console.log(res)
				// 点击热门搜索
				$(".search_page li").click(function(e){
					var str = $(e.target).text();
					$("header input").val(str);
					matchRes(str);
				})
				// 点击搜索按钮
				$(".searchBtn").click(function(){
					var str = $("header input").val();
					if(str==""){
						$("header input").prop("placeholder","输入不能为空！！");
					}else{
						matchRes(str)
					}
				})
				//点击 X 号
				$("header span").click(function(){
					$("header input").val("");
					$(".sortPage").hide();
					$(".search_page").show();
					$(".no_res").hide();
					$("header input").prop("placeholder","搜索. . .");

				})

				// 遍历res匹配输出的方法
				var arr = [] ;
				function matchRes(str){
					arr = [];
					// 遍历res 匹配信息输出到页面
					var reg =new RegExp("" + str,"i");
					var msg = "";
					$.each(res.prosort,function(i,ele){
						$.each(ele,function(j,elem){
							if(reg.test(elem.name)){
								msg += '<a ui-sref="productDetails"><dl><dt><img src="'+ elem.img +'" class="img"></dt><div><dd>'+ elem.name +'</dd><dd>￥ '+ elem.price +'</dd></div></dl></a>';
								arr.push(elem);
							}
						})
					});
					$("#showPhone").html(msg);
					$(".sortPage").show();
					$(".search_page").hide();
					if($("#showPhone").html()==""){
						$(".sortPage").hide();
						$(".no_res").show();
					}
					else{
						$(".no_res").hide();
					}
				searchSort(arr);
				}
				//点击排序的方法
				function searchSort(arr){
					//最初请求到的数据保存在init中，数据被改变后可以使用init重置(主要针对重新点击"最新"选项时)
					var init = [];
					$.each(arr,function(i,ele){
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
								$(".sortPage>p a span").removeClass("priceUp");
								a = false;
								resort("moods");
							}
							else if(this.innerText=="价格"){
								resort("price");
								a = true; 
							}
							else if(this.innerText=="评价数"){
								$(".sortPage>p a span").removeClass("priceUp");
								a = false;
								resort("assess");
							}
							else{
								$(".sortPage>p a span").removeClass("priceUp");
								a = false;
								console.log(init)
								reLoad(init);
							}
						})
					})
					//将数据重新排序的方法
					var n = 180;
					function resort(attr){
						if(a==true){
							arr.reverse();
							$(".checked").children("span").css("transform","rotate("+ n +"deg)")
							n += 180 ;
						}
						else{
							$(".checked").children("span").addClass("priceUp");
							//此处 重新遍历新数据！！！！
							for (var i = 0; i < arr.length; i++) {
								for (var j = i+1; j < arr.length; j++) {
									if(parseInt(arr[i][attr])<parseInt(arr[j][attr])){
										var box = arr[j];
										arr[j] = arr[i];
										arr[i] = box ;
									}
								 }; 
							};
						}
						reLoad(arr);
					}
					//重新 **排序** 后填充置页面的方法
					function reLoad(init){
						var msg = '';
						$.each(init,function(j,elem){
							msg += '<a ui-sref="productDetails"><dl><dt><img src="'+ elem.img +'" class="img"></dt><div><dd>'+ elem.name +'</dd><dd>￥ '+ elem.price +'</dd></div></dl></a>';
						});
						$("#showPhone").html(msg);
					}
				}
			})
		}
	})
})


