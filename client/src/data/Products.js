import Product from '../models/product.js';

export const Products = [
	new Product(
		"Long sleeved dress",
		 29.99,
		 ["black", "grey", "red"],
		 "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		 ["S","M","L","XL"],
		 ["women", "sale", "new" ],
		 true,
		 'https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
	),
	new Product(
		"Trui",
		 23.49,
		 ["blue", "grey", "creamy"],
		 "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		 ["S","M","L"],
		 ["women", "new" ],
		 false,
		 'https://images.unsplash.com/photo-1521319550444-63f5e4d5786d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
	),
	new Product(
		"Nike Free",
		 19.99,
		 ["red", "orange", "blue", "green"],
		 "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		 ["S","M","L"],
		 ["women", "men", "sport" ],
		 false,
		 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1000&q=80'
	),
	new Product(
		"Mannen pak",
		 119.00,
		 ["red", "orange", "blue", "green"],
		 "Lorem ipsum dolor sit amet, consectetur adipisiminim veniam",
		 ["S","M","L"],
		 ["women", "men", "suits", "bestsellers", "new" ],
		 true,
		 'https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
	),
	
]