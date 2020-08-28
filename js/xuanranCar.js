function GoodsCar() {
	this.add = function() {
		let that = this;
		let carUserId = sessionStorage.sessUserId;
		$.ajax({
			url: "../php/carusergoods.php",
			type: "post",
			data: "userID=" + carUserId,
			success: addGoodsMasage
		});

		function addGoodsMasage(restext) {
			console.log(restext);
			let addg = JSON.parse(restext);
			console.log(addg[0])

			//创造商品行
			let newGoodTr = $(
				`<tr class='car-good-tbody-tr'>
													<td class="car-good-check-td"><input type="checkbox" checked="checked" /></td>
													<td class="car-goods-img"><img src="../images/goodsimgsrc/${addg[0].ogoodSrc}CAR.jpg" alt=""></td>
													<td>
														<p class="car-goods-name">${addg[0].goodCName}</p>
														<span class="car-goods-ml">${addg[0].ogoodMl}</span>
													</td>
													<td>￥
														<span class="price">${addg[0].ogoodPrice}</span>
													</td>
													<td>
														<div class="num-box">
															<span class="num-reduce">-</span>
															<span class="goods-num">${addg[0].ogoodNum}</span>
															<span class="num-increase">+</span>
														</div>
													</td>
													<td>￥
														<span class="goods-subtotal"></span>
													</td>
													<td><span class="delete-goods">X</span></td>
												</tr>`
			)
			newGoodTr.appendTo($(".car-tbody"));
			console.log($(".car-good-tbody-tr").length);

			that.goodsSinglePrice();
			that.goodsTotalPriceAndUpdate();
			that.reduceEvent();
			that.increaseEvent();
			that.delectEvent();

		}

	}

	this.goodsSinglePrice = function(gnum, gprice) {
		return gnum * gprice;
	}
	// 总价
	this.goodsTotalPriceAndUpdate = function() {
		let allGoodsprice = 0;

		for (let i = 0; i < $(".goods-subtotal").length; i++) {
			let n = $(".goods-num").eq(i).html();
			let p = $(".price").eq(i).html()
			let gsub = this.goodsSinglePrice(n, p);
			$(".goods-subtotal").eq(i).html(gsub);
			allGoodsprice = allGoodsprice + Number(gsub);
		}
		$(".goodsCar-total-price1").html(allGoodsprice);
		$(".goodsCar-total-price").html(allGoodsprice)
		let delp = Number($(".goodsCar-del-price1").html());

		let gf = Number($(".goodsCar-freight1").html());
		//console.log(gf)
		$(".goodsCarAll-price1").html(Number($(".goodsCar-total-price1").html()) - delp - gf);
		$(".goodsCarAll-price").html($(".goodsCarAll-price1").html());
	}

	//减少
	this.goodsNumReduce = function(btn) {
		if (Number($(btn).next().html() > 1)) {
			let reduceNum = Number($(btn).next().html()) - 1;
			$(btn).next().html(reduceNum);
		} else {
			$(btn).next().html(1);
		}
	}
	this.reduceEvent = function() {
		let that = this;
		for (let i = 0; i < $(".num-reduce").length; i++) {
			$(".num-reduce").eq(i).click(function() {
				that.goodsNumReduce(this);
				that.goodsTotalPriceAndUpdate();
			});
		}
	}
	//增加
	this.goodsNumIncrease = function(btn) {

		let increaseNum = Number($(btn).prev().html()) + 1;
		$(btn).prev().html(increaseNum);
	}
	this.increaseEvent = function() {
		let that = this;
		for (let i = 0; i < $(".num-increase").length; i++) {
			$(".num-increase").eq(i).click(function() {
				that.goodsNumIncrease(this);
				that.goodsTotalPriceAndUpdate();
			});
		}
	}
	//删除购物车行
	this.delectGoods = function(btn) {
		$(btn).parent().parent().remove();
		if ($(".car-good-tbody-tr").length == 0) {
			$(".good-car-table").css({
				display: "none"
			});
			$(".no-goods-banner").css({
				display: "block"
			});
			$(".car-right-dl0").css({
				display: "none"
			});
		}

	}
	this.delectEvent = function() {
		let that = this;
		for (let i = 0; i < $(".delete-goods").length; i++) {
			$(".delete-goods").eq(i).click(function() {
				that.delectGoods(this);
				that.goodsTotalPriceAndUpdate();
			});
		}
	}
	this.goodsCarEvent = function() {
		this.goodsSinglePrice();
		this.goodsTotalPriceAndUpdate();
		this.reduceEvent();
		this.increaseEvent();
		this.delectEvent();
	}
}
let g = new GoodsCar();
g.goodsCarEvent();
g.add();
