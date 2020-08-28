function Banner(newUl, newLi, newWidth) {
		this.oUl = newUl;
		this.oLi = newLi;
		this.width = newWidth;
		this.index = 0;
		this.time = null;
		this.length=this.oUl.children().length;
		//1.
		this.changePic = function() {
			let that=this;
			this.oUl.stop(true,true).animate({
				left: this.index * this.width * (-1)
			}, 500, function() {
				if (that.index >= that.length-1) {
					that.index = 0;
					that.oUl.css({
						left: 0
					})
				}
				that.changeList();
			})
		}
		//2.
		this.changeList = function() {
			this.oLi.eq(this.index).css({
				backgroundColor: "#333"
			}).siblings("li").css({
				backgroundColor: ""
			})
		}
		//3.
		this.eventList = function() {
			let that = this;
			for (let i = 0; i < this.oLi.length; i++) {
				this.oLi.eq(i).mouseover(function() {
					that.index = i;
					that.changePic();
					that.changeList();
				})
			}
		}
		//4.
		this.nextPic = function() {
			this.index++;
			this.changePic();
		}
		//5.
		this.prevPic = function() {
			
			if(this.index==0){
				this.index=5;
				this.oUl.css({
					left:5 * this.width * (-1)
				});
			}
			this.index--;
			this.changePic();
		}
		
		this.eventButton=function(){
			let that=this;
			$(".home-banner").mouseover(function(){
				$(".home-banner-button").css({
					display:"block"
				});
			});
			
			$(".home-banner").mouseout(function(){
				$(".home-banner-button").css({
					display:"none"
				});
			})
			
		}

		this.setTime=function(){
			let that=this;
			clearInterval(this.time);
			this.time=setInterval(function(){
				that.nextPic();
			},3000);
		}

	}
	let oul = $(".home-banner-ul");
	let oLi = $(".home-banner-point-ul").find("li");
	let picWidth = $(".home-banner-ul").find("li").eq(0).width();
	let b = new Banner(oul, oLi, picWidth);
	oLi.eq(0).css({
		backgroundColor: "#333"
	});
	b.eventList();
	b.eventButton();
	$(".button-right").click(function(){
		b.nextPic(); 
		
	});
	$(".button-left").click(function(){
		b.prevPic(); 
		
	});
	b.setTime();
	