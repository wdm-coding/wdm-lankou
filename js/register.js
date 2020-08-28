let telReg=/^17[56]\d{8}$/;
let pwdReg=/^[a-z]{3,}\d{6}$/;
$(".vip-register-box").css({
	width: 796
})
$(".vip-tel-input").blur(function(){
	let rtel=$(this).val();
	if($(this).val()==""){
		$(this).next().html("");
	}else{
		if(telReg.test(rtel)){
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
$(".vip-psd-input").blur(function(){
	let rpsd=$(this).val();
	if($(this).val()==""){
		$(this).next().html("");
	}else{
		if(pwdReg.test(rpsd)){
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
$(".com-psd-input").blur(function(){
	let rcpsd=$(this).val();
	let rpsd=$(".vip-psd-input").val();
	if(pwdReg.test(rpsd)){
		if(rcpsd==rpsd){
		$(this).css({
			backgroundColor:"green"
		});
	}else{
			alert("密码不一致");
		}
	}
});

$(".vip-jfy-input").blur(function(){
	let jfy=$(this).val();
	let coad=$(".vip-regis-coad").html();
	if(jfy!=""){
		if(jfy==coad){
		$(this).css({
			backgroundColor:"green"
		});
	}else{
		alert("验证码错误");
	}
}
	
});
//注册
$(".vip-register-btn").click(function(){
	let rtel=$(".vip-tel-input").val();
	let rpsd=$(".vip-psd-input").val();
	let rcpsd=$(".com-psd-input").val();
	let jfy=$(".vip-jfy-input").val();
	let coad=$(".vip-regis-coad").html();
	let t1=telReg.test(rtel);
	let t2=pwdReg.test(rpsd);
	let t3=(rcpsd==rpsd);
	let t4=(jfy==coad);
	let t5=($(".vip-register-check").attr("checked")=="checked")
	console.log(t1,t2,t3,t4,t5)
	if(t1&&t2&&t3&&t4&&t5){
		$.ajax({
		url:"../php/register.php",
		type:"post",
		data:"rtel="+rtel+"&rpwd="+rpsd+"&rcoad="+coad,
		success:register
	});
	
	}
});


function register(restext){
	if(restext==1){
		alert("注册成功,请登录");
		$(".vip-register").css({
			display:"none"
		});
	}else if(restext=="用户名已存在"){
		alert(restext);
	}else{
		alert("注册失败，重新注册");
	}
	}
