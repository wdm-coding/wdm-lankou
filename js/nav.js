	$(".toXQpage").click(function(){
		console.log("ss")
		
		let xqId=$(this).attr("id");
		console.log(xqId);
		if(localStorage.goodId){
			localStorage.removeItem("goodId");
			localStorage.goodId=xqId;
		}else{
			localStorage.goodId=xqId;
		}
		location.href="./detail-Pages.html";
	});
	
	
	
	window.onscroll=function(){
		//console.log($(document).scrollTop());
		if($(document).scrollTop()==0){
			$(".nov").css({
				right:"6%"
			});
			$(".second-menu").css({
				left:-81
			});
			$(".logo-2").css({
				display:"none"
			});
			$(".nov-right").css({
				marginRight:0
			})
		
			$(".nov-box").css({
				marginTop:6,
				position:"relative",
				top:0
			})
		}else{
			$(".nov").css({
				right:0
			});
			$(".second-menu").css({
				left:-162
			});
			$(".logo-2").css({
				display:"block"
			});
			$(".nov-right").css({
				marginRight:10
			});
			$(".nov-box").css({
				marginTop:26,
				position:"fixed",
				zIndex:400,
				top:-26
			});
			$(".second-menu").css({
				top:50
			});
			$(".triangle").css({
				top:50
			});
		}
	}
	
	//二级菜单
	 $(".second-menu").eq(0).css({
		 height:364
	 });
	$(function(){
		for(let i=0;i<$(".second-li").length;i++){
			$(".second-li").eq(i).mouseover(function(){
				$(".triangle").eq(i).css({
					display:"block",
					left:70+(i*66)
				});
				 $(".second-menu").eq(i).stop().fadeIn(500);
				 
				});
			
			$(".second-li").eq(i).mouseout(function(){
				$(".triangle").eq(i).css({
					display:"none"
				});
				$(".second-menu").eq(i).stop().fadeOut(500);
			});
		}
	})
	
	// 导航栏鼠标移入
	$(".nov-right").children().eq(2).hover(function(){
		$(".user-box").css({
			display:"block"
		})
	},function(){
		$(".user-box").css({
			display:"none"
		})
	});
	$(".nov-right").children().eq(1).hover(function(){
		$(".goods-car-box").css({
			display:"block"
		})
	},function(){
		$(".goods-car-box").css({
			display:"none"
		})
	});
	$(".nov-right").children().eq(0).hover(function(){
		$(".search-box").css({
			display:"block"
		})
	},function(){
		$(".search-box").css({
			display:"none"
		})
	});
	
	
	
	
	
	
	
	
	
	
	
	
	// 滚动条
	let top1=$("html").attr("height");
	$(".nov-right").children().eq(2).click(function(){
		
		$(".user-bg").css({
			display:"block"
		});
		unScroll();
		
		$("body").css({
			overflow:"hidden"
		});
		
	});
	$(".user-bgColor").click(function(){
		$(".user-bg").css({
			display:"none"
		});
		removeUnScroll();
		$("body").css({
			overflow:"auto"
		});
	})
	
	
	function unScroll() {
	    var top = $(document).scrollTop();
	    $(document).on('scroll.unable',function (e) {
	        $(document).scrollTop(top);
	    })
	}
	function removeUnScroll() {
	    $(document).unbind("scroll.unable");
	}
	
	// vip-nav
	$(".nov-vip").click(function(){
		
		$(".user-bg").css({
			display:"block"
		});
		unScroll();
		
		$("body").css({
			overflow:"hidden"
		});
		
	});
	
	
	
	
	
	
	
	
	
	
	
	//登录
	
	$(".user-box").click(function(event){
	    event.stopPropagation();   
		});
		
	$(".login-or-register").children().eq(0).mouseover(function(){
		$(".register").css({
			display:"none"
		});
		$(this).css({
			color:"#000"
		}).siblings("span").css({color:""});;
	})
	$(".login-or-register").children().eq(1).mouseover(function(){
		$(".register").css({
			display:"block"
		});
		$(this).css({
			color:"#000"
		}).siblings("span").css({color:""});
	});
	
	
	
	
	//会员中心弹出框
	$(".vip-loginORregister").children().eq(2).click(function(){
		$(".vip-register").css({
			display:"block"
		});
		$(".password-login").css({
			display:"none"
		})
		$(this).css({
			color:"#000"
		}).siblings("span").css({
			color:""
		});
		
	})
	
	$(".vip-loginORregister").children().eq(0).css({
		color:"#000"
	})
	$(".vip-loginORregister").children().eq(0).click(function(){
		$(".vip-register").css({
			display:"none"
		});
		$(this).css({
			color:"#000"
		}).siblings("span").css({
			color:""
		});
	})
	
	
	$(".vip-pwd-login").click(function(){
		$(".password-login").css({
			display:"block"
		});
	});
	$(".pass-ul").children().eq(0).click(function(){
		$(".password-login").css({
			display:"none"
		});
	})
	
	$(".close-user-bg").click(function(){
		$(".user-bg").css({
			display:"none"
		});
		removeUnScroll();
		$("body").css({
			overflow:"auto"
		});
	})