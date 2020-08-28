// 随机验证码
	function RandCoad(newObj){
		this.obj=newObj;
		this.str=null;
		this.rand=function(){
			let number=Math.round(Math.random()*9);
			this.str="";
			for(let i=0;i<4;i++){
				let number=Math.round(Math.random()*9);
				this.str=this.str+number;
			}
		}
		
		this.getRandCoad=function(){
			this.rand();
			$(this.obj).html(this.str);
		}
		
	}
	
	//短信登录验证码
	let oSpan=$(".vip-login-coad")
	let rc=new RandCoad(oSpan);
	rc.getRandCoad();
	$(".re-vip-login-coad").click(function(){
		rc.getRandCoad();
	})
	
	// 注册验证码
	let oSpan1=$(".vip-regis-coad");
	let rc1=new RandCoad(oSpan1);
	rc1.getRandCoad();
	$(".re-vip-regis-coad").click(function(){
		rc1.getRandCoad();
	})
	//注册表单验证