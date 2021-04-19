PROD_PREFIX = "zzw";


function getProdCountInCart(prodId) {
	prodCount = localStorage.getItem(prodId);
	
	if (prodCount === null || prodCount === undefined) {
		return 0;
	} else {
		return parseInt(prodCount);
	}
}

function addToCart(prodId, count) {
	existProdCount = getProdCountInCart(prodId);
	localStorage.setItem(prodId, existProdCount + count);

	updateProdCountBadge();
}

function getAllProdCountInCart() {
	allProdCount = 0;
	
	for (prodId in localStorage) {
		if (prodId.startsWith(PROD_PREFIX)) {
			allProdCount += parseInt(localStorage.getItem(prodId));
		}
	}
	
	return allProdCount;
}

function updateProdCountBadge() {
	$("#prodCount").text(getAllProdCountInCart());
}

$(function () {
   updateProdCountBadge();
});