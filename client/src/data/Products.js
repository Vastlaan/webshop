import Product from '../models/product.js';

export const Products = [
	new Product(
		"Jas met dessin",
		 29.99,
		 ["blue", "grey", "red"],
		 "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		 ["S","M","L","XL"],
		 ["men", "sale", "new" ],
		 true,
		 'https://unsplash.com/photos/P0W27GRvyww'
	),
	new Product(
		"Trui",
		 19.99,
		 ["blue", "grey", "creamy"],
		 "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		 ["S","M","L"],
		 ["women", "new" ],
		 false,
		 'https://unsplash.com/photos/ZQWcyFkQkBc'
	)
]