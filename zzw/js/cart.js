function showProductList() {
	$("#cart").empty();
	
	for (prodId in localStorage) {
		if (prodId.startsWith(PROD_PREFIX)) {
			html = "<li class='list-group-item'><span class='badge'>" 
						+ localStorage.getItem(prodId) 
						+ "</span>" + prodId + "</li>";
						
			$("#cart").append(html);
		}
	}
}

function clearCart() {
	for (key in localStorage) {
		if (key.startsWith(PROD_PREFIX)) {
			localStorage.removeItem(key);
		}
	}
	updateProdCountBadge();
	showProductList();
}


$(function () {
   showProductList();
});