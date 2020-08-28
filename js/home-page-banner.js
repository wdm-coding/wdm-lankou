	function PageBanner(newUl, newLi, newWidth){
		this.oUl = newUl;
		this.oLi = newLi;
		this.width = newWidth;
		this.index = 0;
		this.time=null;
		this.length=this.oUl.children().length;
		this.pageChange=function(){
			let that=this;
			this.oUl.stop().animate({
				left:this.index*this.width*(-1)
			},500,function(){
				if(that.index == that.length-1){
					that.index = 0;
					that.oUl.css({
						left: 0
					})
				}
				that.changeList();
			});
			
		}
		
		this.changeList = function() {
			this.oLi.eq(this.index).css({
				backgroundColor: "#333"
			}).siblings("li").css({
				backgroundColor: ""
			})
		}
		
		this.eventList = function() {
			let that = this;
			for (let i = 0; i < this.oLi.length; i++) {
				this.oLi.eq(i).mouseover(function() {
					that.index = i;
					that.pageChange();
					that.changeList();
				})
			}
		}
		
		this.setTime=function(){
			let that=this;
			clearInterval(this.time);
			this.time=setInterval(function(){
				that.index++;
				that.pageChange();
				
			},3000);
		}
	}
	
	let oBul = $(".page-banner1-ul");
	let oBLi = $(".page-banner1-point-ul").find("li");
	let oBpicWidth = $(".page-banner1-ul").find("li").eq(0).width();
	let pb = new PageBanner(oBul, oBLi, oBpicWidth);
	oBLi.eq(0).css({
		backgroundColor: "#333"
	});
	pb.setTime();
	pb.eventList();


	//page  banner2
	
	let oBul2 = $(".page-banner2-ul");
	let oBLi2 = $(".page-banner2-point-ul").find("li");
	let oBpicWidth2 = $(".page-banner2-ul").find("li").eq(0).width();
	let pb2 = new PageBanner(oBul2, oBLi2, oBpicWidth2);
	oBLi2.eq(0).css({
		backgroundColor: "#333"
	});
	pb2.setTime();
	pb2.eventList();