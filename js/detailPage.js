let myImgId = localStorage.goodId;
let myUserId = sessionStorage.sessUserId;
if (myImgId != "") {
	myImgId = Number(myImgId);
	$.ajax({
		url: "../php/xqpage.php",
		type: "post",
		data: "myId=" + myImgId,
		success: select
	});
}

function select(restext) {
	let imgMasg = JSON.parse(restext);

	//渲染
	$(".english-name").html(imgMasg[0].goodEName);
	$(".chinese-name").html(imgMasg[0].goodCName);
	$(".gm-price").html(imgMasg[0].goodPrice);
	let imgSrcStr = imgMasg[0].goodSrc;
	let srcarr = imgSrcStr.split(",");
	let bigsrc = srcarr[0];
	let detasrc = srcarr[1];
	let smallsrc = srcarr[2];
	let goodspec = imgMasg[0].goodMl;
	let specArr = goodspec.split(",");



	function Magnifying(newSmallBox, newBigBox, newMask, newBigMask) {
		this.smallBox = newSmallBox;
		this.bigBox = newBigBox;
		this.mask = newMask;
		this.bigMask = newBigMask;
		this.ml = "";
		this.goodSpecAndPrice = function() {
			let that = this;
			let gspr = Number(imgMasg[0].goodPrice);
			for (let i = 0; i < specArr.length; i++) {
				let oLi = $(
					`<li><span class='gms-spec-span'>${specArr[i]}</span><br>￥<span class='gms-spec-price'>${gspr+i*400}</span></li>`
				);
				oLi.appendTo($(".gms-spec-ul"));
				oLi.click(function() {
					$(this).css({
						border: "1px #000 solid"
					}).siblings("li").css({
						border: "1px #999 solid"
					});
					that.ml = $(this).find("span").eq(0).html();
					console.log(that.ml)
					$(".gm-price").html($(this).find("span").eq(1).html());
				});
			}
		}


		this.smallImg = function() {
			let that = this;
			this.bigBox.css({
				backgroundImage: `url(../images/goodsimgsrc/${bigsrc}0.jpg)`
			});


			for (let i = 0; i < this.smallBox.length; i++) {
				this.smallBox[i].firstElementChild.src = `../images/goodsimgsrc/${smallsrc}${i}.jpg`;
				this.smallBox[i].onclick = function() {
					that.bigBox.css({
						backgroundImage: `url(../images/goodsimgsrc/${bigsrc}${i}.jpg)`
					});
					that.bigMask.css({
						backgroundImage: `url(../images/goodsimgsrc/${bigsrc}${i}.jpg)`
					})
				}
			}
		}

		this.mouseOverandOut = function() {
			let that = this;
			this.bigBox.hover(function() {
				that.mask.css({
					display: "none"
				});
				that.bigMask.css({
					display: "block"
				})


			}, function() {
				that.mask.css({
					display: "none"
				});
				that.bigMask.css({
					display: "none"
				})
			});
		}

		this.mouseMove = function() {
			let that = this;
			this.bigBox.mousemove(function(evt) {
				let e = evt || event;
				let left = e.pageX - that.bigBox.offset().left - that.mask.width() / 2;
				let top = e.pageY - that.bigBox.offset().top - that.mask.height() / 2;
				let maxLeft = that.bigBox.width() - that.mask.width();
				let maxTop = that.bigBox.width() - that.mask.width();
				if (left < 0) {
					left = 0;
				}
				if (top < 0) {
					top = 0;
				}
				if (left > maxLeft) {
					left = maxLeft;
				}
				if (top > maxTop) {
					top = maxTop;
				}
				that.mask.css({
					left: left,
					top: top
				});



				that.bigMask.css({
					backgroundPositionX: -2 * left,
					backgroundPositionY: -2 * top
				});
			});
		}




		// 加入购物车
		this.addGoods = function() {
			let that = this;
			$(".add-TogoodsCar").click(function() {
				that.addfun();
		})
		}
		//
		this.addfun=function(){
			let oId = sessionStorage.sessUserId;
				let oGid = imgMasg[0].goodId;
				let ogCname = imgMasg[0].goodCName;
				let ogPrice = $(".gm-price").html();
				let ogSrc = smallsrc;
				let ogMl = this.ml;
				let oNum = $(".gm-num").val();
				if(oId==""){
					alert("请登录");
				}
				if (ogMl == "") {
					alert("请选择商品型号");
				} else {
					let dateStr =
						`userId=${oId}&goodId=${oGid}&goodName=${ogCname}&goodPrice=${ogPrice}&goodSrc=${ogSrc}&goodMl=${ogMl}&goodNum=${oNum}`;
					if (sessionStorage.sessUserId != "") {
						$.ajax({
							url: "../php/addToGoodsCar.php",
							type: "post",
							data: dateStr,
							success: insertGoods
						});
					}
				}
			
			function insertGoods(restext) {
				console.log(restext);
				if (restext == "1") {
					alert("已加入购物车");
				}
			}
		}
		
		
		//立即购买
		this.ontoBuy = function() {
			let that = this;
			$(".to-buy").click(function() {
				that.addfun();
				location.href = "goodsCar.html";
			});
		}







































		this.magniEvent = function() {
			this.smallImg();
			this.mouseOverandOut();
			this.mouseMove();
			this.goodDecorImg();
			this.goodSpecAndPrice();
			this.addGoods();
			this.ontoBuy();
		}


		this.goodDecorImg = function() {
			$(".goods-decoration-banner").find("img").eq(0).attr("src", `../images/goodsimgsrc/${detasrc}banner0.jpg`)
			for (let i = 0; i < $(".goods-decoration-img").children().length; i++) {
				$(".goods-decoration-img").children().eq(i).attr("src", `../images/goodsimgsrc/${detasrc}${i}.jpg`);
			}
		}



	}
	let oSmallLi = $(".small-img-box").find("li");
	let oBigBox = $(".goods-big-box");
	let oMask = $(".goods-mask");
	let oBigMask = $(".goods-big-mask");
	let mag = new Magnifying(oSmallLi, oBigBox, oMask, oBigMask);
	mag.magniEvent();
}




















// 详情页
$(".li-up").click(function() {
	//console.log($(".small-img-box").css("top"))
	if ($(".small-img-box").css("top") == "0px") {
		$(".small-img-box").css({
			top: "-110px"
		});
	} else {
		$(".small-img-box").css({
			top: "-110px"
		});
	}
});
$(".li-down").click(function() {
	if ($(".small-img-box").css("top") == "0px") {
		$(".small-img-box").css({
			top: "0px"
		});
	} else {
		$(".small-img-box").css({
			top: "0px"
		});
	}
});





// 放大镜
