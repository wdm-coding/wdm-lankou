$(".btn-buy").click(function(){
		console.log("hhhhh")
		
		var xqId=$(this).attr("id");
		console.log(xqId);
		if(localStorage.goodId){
			localStorage.removeItem("goodId");
			localStorage.goodId=xqId;
		}else{
			localStorage.goodId=xqId;
		}
		location.href="./detail-Pages.html";
	});