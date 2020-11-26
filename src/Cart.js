import React, { Component } from 'react';
import 'tachyons';

const Cart = ({ Cart, setCart, toCart, addToCart, products }) => {
	return (
		<div>
		<button className='w-30 grow f4 link ph3 pv2 dib white bg-pink pointer center' length={[].length}>
			Cart ({Cart.length})
		</button>
		</div>
	);
}

export default Cart;