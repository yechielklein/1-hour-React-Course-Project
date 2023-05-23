import React, { useState } from 'react';

const Product = ({ name, price, onShowProduct, onCalculateTotal }) => {
	const [quantity, setQuantity] = useState(0);

	const buy = () => {
		setQuantity(quantity + 1);
		onCalculateTotal(price)
	};

	return (
		<div>
		<h3>{name}</h3>
		<p>${price}</p>
		<button onClick={buy}>Buy</button>
		<button onClick={() => onShowProduct(name)}>Show</button>
		<h3>Quantity: {quantity}</h3>
		</div>
	);
};

const Total = ({ totalCash }) => {
	return (
		<h3>Total Cash: {totalCash}</h3>
	);
};

const ProductForm = ({ productsLength, onCreateProduct }) => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	const createProduct = (event) => {
		event.preventDefault();
		onCreateProduct({ id: productsLength + 1, name, price });

		setName("");
		setPrice("");
	};

	return (
		<form onSubmit={(event) => createProduct(event)}>
		<label><h4>Product Name</h4></label>
		<input
			required
			value={name}
			onChange={(event) => setName(event.target.value)}
		/>

		<label><h4>Product Price</h4></label>
		<input
			type="number"
			min="0"
			required
			value={price}
			onChange={(event) => setPrice(parseInt(event.target.value))}
		/>

		<br /><br />
		<button>Create</button>

		<hr />
		</form>
	);
};

const ProductList = () => {
	const [total, setTotal] = useState(0);
	const [products, setProducts] = useState([
		{id: 1, name: "Android", price: 150},
		{id: 2, name: "Apple", price: 170},
		{id: 3, name: "Nokia", price: 65}
	]);

	const calculateTotal = (price) => {
		setTotal(total + price);
	};

	const showProduct = (name) => {
		alert(`you selected ${name}`);
	};

	const addProduct = (product) => {
		setProducts([...products, product]);
	};

	return (
		<div>
		<ProductForm
			productsLength={products.length}
			onCreateProduct={addProduct}
		/>
		
		{products.map((prod) => (
			<div>
			<Product
				name={prod.name}
				price={prod.price}
				onCalculateTotal={calculateTotal}
				onShowProduct={showProduct}
			/>
			<hr />
			</div>
		))}

		<Total totalCash={total} />
		</div>
	);
};

export default ProductList;