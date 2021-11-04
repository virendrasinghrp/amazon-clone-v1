function getItems(){
	db.collection("items").get().then((querySnapshot) => {
		let items =[];
 		querySnapshot.forEach((doc) => {
			items.push({
				id: doc.id,
				image: doc.data().image,
				name: doc.data().name,
				make: doc.data().make,
				rating: doc.data().rating,
				price: doc.data().price
			})
		});
		
		generateItems(items);
	});
}

function addToCart(item){
	let cartItem = db.collection("cart-items").doc(item.id);
	cartItem.get().then(function(doc){
		if(doc.exists){
			cartItem.update({
				quantity: doc.data().quantity + 1
			})
		}else{
			cartItem.set({
				image: item.image,
				make: item.make,
				name: item.name,
				rating: item.rating,
				price: item.price,
				quantity: 1
			})
		}
	})

}

function generateItems(items){
	let itemsHTML = "";
	items.forEach((item) =>{
		let doc = document.createElement("div");
		doc.classList.add("main-product", "mr-5");
		doc.innerHTML = `
						<div class="product-image w-48 h-52 bg-white rounded-lg p-4">
							<img class="w-full h-full object-contain" src="${item.image}" >
						</div>
						<div class="product-name text-gray-700 font-bold mt-2 text-sm">
							${item.name}
						</div>
						<div class="product-make text-green-700 font-bold">
							${item.make}
						</div>
						<div class="product-rating text-yellow-300 font-bold my-1">
							⭐⭐⭐⭐ ${item.rating}
						</div>
						<div class="product-price font-bold text-gray-700 text-lg">
							₹ ${numeral(item.price).format('0,0.00')}
						</div>

		`

		let addToCartEL = document.createElement("div");
		addToCartEL.classList.add("add-to-cart-button", "h-8", "w-28", "text-md", "flex", "justify-center", "items-center", "bg-yellow-500", "rounded", "text-white", "hover:bg-yellow-600", "cursor-pointer", "p-1", "mt-2");
		addToCartEL.addEventListener("click", function(){
			addToCart(item);
		})
		addToCartEL.innerText = "Add to cart";
		doc.appendChild(addToCartEL);
		document.querySelector(".main-section-products").appendChild(doc);
		
	});
	
}



getItems();