let telReg=/^17[56]\d{8}$/;
let pwdReg=/^[a-z]{3,}\d{6}$/;
let tel=$(".pr-tel-input").val();
let psd=$(".pr-pwd-input").val();

$(".password-login").width("392px")
$(".login-success").css({
	backgroundColor:"#fff",
	width:258,
	height:274,
	position: "absolute",
	left:-100,
	top:40,
	display:"none"
})

$(".pr-tel-input").blur(function(){
	let tel=$(".pr-tel-input").val();
	if($(this).val()==""){
		$(this).next().html("");
	}else{
		if(telReg.test(tel)){
			$(this).next().html("ok");
			$(this).next().css({
				backgroundColor:"green"
			});
		}else{
			$(this).next().html("false");
			$(this).next().css({
				backgroundColor:"red"
			});
		}
	}
	
});
$(".pr-pwd-input").blur(function(){
	let psd=$(".pr-pwd-input").val();
	if($(this).val()==""){
		$(this).next().html("");
	}else{
		if(pwdReg.test(psd)){
			$(this).next().html("ok");
			$(this).next().css({
				backgroundColor:"green"
			});
		}else{
			$(this).next().html("false");
			$(this).next().css({
				backgroundColor:"red"
			});
		}
	}
	
});

$(".pass-login-btn").click(function(){
	let tel=$(".pr-tel-input").val();
	$(".user-tel").html(tel);
	console.log($(".user-tel").html());
	let psd=$(".pr-pwd-input").val();
	//登录
	if(pwdReg.test(psd)&&telReg.test(tel)){
		$.ajax({
		url:"../php/login.php",
		type:"post",
		data:"tel="+tel+"&pwd="+psd,
		success:login
	});
	
	//获取id
	$.ajax({
		url:"../php/getUser.php",
		type:"post",
		data:"tel="+tel,
		success:getUserID
	});
	
	}
	
	
	
});

function login(resText){
	if(resText==1){
		islogin=true;
		
		
		
		$(".user-bg").css({
			display:"none"
		});
		removeUnScroll();
		$("body").css({
			overflow:"auto"
		});
		
		$(".nov-right").children().eq(2).hover(function(){
			$(".user-box").css({
				display:"none"
			});
			
			$(".login-success").css({
				display:"block"
			});
			
		},function(){
			$(".login-success").css({
				display:"none"
			});
		});
		alert("登录成功");
		
		
		
		
		
		
	}else{
		islogin=false;
		alert("重新输入");
	}
}


function getUserID(guid){
	sessionStorage.sessUserId=guid
	console.log(sessionStorage.sessUserId);
}