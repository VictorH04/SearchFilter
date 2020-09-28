// ! Search input
(function() {
	// Targeting search-box
	const search = document.getElementById('search-item');

	// Adding the event-listener
	search.addEventListener('keyup', function() {
		// Getting the search-value
		let value = search.value.toLowerCase().trim();
		// console.log(value);

		// Selecting all the items
		const items = document.querySelectorAll('.store-item');

		// Looping through all the items
		items.forEach(function(item) {
			let type = item.dataset.item;
			// console.log(type);

			// if (type.includes(value)) {
			// 	item.style.display = 'block';
			// } else {
			// 	item.style.display = 'none';
			// }

			let length = value.length;
			let match = type.slice(0, length);

			if (value === match) {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});
	});
})();
