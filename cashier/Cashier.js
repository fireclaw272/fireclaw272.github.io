$(document).ready(function(){
	
	
	// ----------------------------------------------- Money/Income-------------------------------
	var money = 0;
	var incomeSpeed = 1000;
	var incomeAmount = 0.01;
	var addIncome = function(){
		money += incomeAmount;
		money = Math.round(money * 100)/100;
		$(".money p").text("$" + money);
		console.log(money);
	};
	
	$(".increaseAmount").click(function(){
		money+= 0.01;
		money = Math.round(money * 100)/100;
		$(".money p").text("$" + money);
	});
	
	setInterval(addIncome, incomeSpeed);
		
	
	//--------------------------------------------------------------------------------------------
	
	var appleAmount = 0;
	var bananaAmount = 0;
	var cookieAmount = 0;
	var donutAmount = 0;
	var cookiePay = 0;
	var donutPay =0;
	var cookiePack =0;
	var donutPack = 0;
	
	var calcSub = function(){
		return (appleAmount*0.98+bananaAmount*0.75+cookiePay*0.70+cookiePack*1+donutPay*0.9+donutPack*8);
	}
	
	var calcTax = function(){
		return (calcSub()*0.09);
	}
	
	var calcTotal = function(){
		var sub= Math.round(calcSub() * 100) / 100;
		var tax= Math.round(calcTax() * 1000) / 1000;
		var total= Math.round((sub+tax) * 100) / 100;
		$('#subtotal-cost').text(Math.round(calcSub() * 100) / 100);
		$('#tax-cost').text(Math.round(calcTax() * 1000) / 1000);
		$('#total-cost').text(total);
	}
	
	
	$('.apple-left').click(function(){
		if(appleAmount===0){
			return;
		}
		appleAmount -= 1;
		console.log("minus one apple "+ appleAmount);
		$('#apple-amount').text(appleAmount);
		calcTotal();
	});
	
	$('.apple-right').click(function(){
		appleAmount += 1;
		console.log('Plus one apple '+ appleAmount);
		$('#apple-amount').text(appleAmount);
		calcTotal();
	});
	
	$('.banana-left').click(function(){
		if(bananaAmount===0){
			return;
		}
		appleAmount
		bananaAmount -=1;
		console.log("Minus one banana "+bananaAmount );
		$('#banana-amount').text(bananaAmount);
		calcTotal();
	});

	$('.banana-right').click(function(){
		bananaAmount +=1;
		console.log("Plus one banana "+bananaAmount );
		$('#banana-amount').text(bananaAmount);
		calcTotal();
	});
	
	$('.cookie-left').click(function(){
		if(cookieAmount===0){
			return;
		}
		cookieAmount -= 1;
		console.log("minus one cookie "+ cookieAmount);
		$('#cookie-amount').text(cookieAmount);
		cookiePay=cookieAmount%3;
		cookiePack=(cookieAmount-cookiePay)/3;
		console.log(cookieAmount,  cookiePay,  cookiePack);
		calcTotal();
	});
	
	$('.cookie-right').click(function(){
		cookieAmount += 1;
		console.log('Plus one cookie '+ cookieAmount);
		$('#cookie-amount').text(cookieAmount);
		cookiePay=cookieAmount%3;
		cookiePack=(cookieAmount-cookiePay)/3;
		console.log(cookieAmount,  cookiePay,  cookiePack);
		calcTotal();
	});

	$('.donut-left').click(function(){
		if(donutAmount===0){
			return;
		}
		donutAmount -=1;
		console.log("Minus one donut "+donutAmount );
		$('#donut-amount').text(donutAmount);
		donutPay=donutAmount%12;
		donutPack=(donutAmount-donutPay)/12;
		console.log(donutAmount,donutPay,donutPack);
		calcTotal();
	});

	$('.donut-right').click(function(){
		donutAmount +=1;
		console.log("Plus one donut "+donutAmount );
		$('#donut-amount').text(donutAmount);
		donutPay=donutAmount%12;
		donutPack=(donutAmount-donutPay)/12;
		console.log(donutAmount,donutPay,donutPack);
		calcTotal();
	});

	$('.checkout').click(function(){
		var sub= Math.round(calcSub() * 100) / 100;
		var tax= Math.round(calcTax() * 1000) / 1000;
		var total= Math.round((sub+tax) * 100) / 100;
		money = money - total;
		$(".money p").text("$" + money);
		appleAmount = 0;
		bananaAmount = 0;
		cookieAmount = 0;
		donutAmount = 0;
		cookiePay = 0;
	    donutPay =0;
	    cookiePack =0;
	    donutPack = 0;
		$('#apple-amount').text(appleAmount);
		$('#banana-amount').text(bananaAmount);
		$('#cookie-amount').text(cookieAmount);
		$('#donut-amount').text(donutAmount);
		calcTotal();
		console.log(money);
	});
	
});