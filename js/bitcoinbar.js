/*
	bitcoinbar, from the ZeroNet project, http://zeronet.io
    Copyright (C) 2015, ZeroNet <hello@zeronet.io>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License

*/

function applyBitcoinbarData(elem, data) {
	// var balance_btc = data.totalReceivedValue/100000000
	var balance_btc = parseFloat(data);
	var percent = balance_btc / parseFloat(elem.data("goal")) * 100

	// Set the text and create html elements
	elem.html("<div class='bar'></div><div class='text'>"+balance_btc.toFixed(0)+" USD <span class='goal'>of "+elem.data("goal")+" USD</span><br><span class='heart'>&#x2665;</span> <u>Donate via PayPal</u><br>Thank you! :)</div>")

	// Set anim later to get anim
	setTimeout(function() {
		$(".bar", elem).css("width", Math.round(percent)+"%")
		if (percent >= 100) elem.addClass("done")
	}, 10)

	elem.on("click", function() { 

		$("#paypal_purpose").val(elem.data("purpose"));
		$("#"+elem.data("formid")).submit(); 
		$(document.body).fadeOut(1000); 
		return; 
		// =====================
		
	})
}

function updateBitcoinbars() {
	// Query all address balance in one query
	/*
	helloblock.io down
	var addresses = []
	$(".bitcoinbar").each(function() {
		addresses.push("addresses="+$(this).data("address"))
	})
	$.get("https://mainnet.helloblock.io/v1/addresses?"+addresses.join("&"), function(res) { 
		for (var i=0;i<res.data.addresses.length;i++) {
			var address_data = res.data.addresses[i]
			elem = $(".bitcoinbar[data-address="+address_data.address+"]")

			// Apply the data to element
			applyBitcoinbarData(elem, address_data)
		}
	})
	*/
	$(".bitcoinbar").each(function() {
		var address = $(this).data("address");
		$.get("http://sdr.hu/static/donations/"+address, function(res) { 
			elem = $(".bitcoinbar[data-address="+address+"]");
			applyBitcoinbarData(elem, res);
		});
	});
	
}

$(document).ready(updateBitcoinbars);
