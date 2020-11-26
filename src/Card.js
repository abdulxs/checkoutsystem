import React, { Component } from 'react';


const Card = ({ id, title, price, category, image, products, setCart, addToCart, toCart, Cart }) => {
	return (
		<div className='bg-pink dib br3 pa3 ma2 w-25'>
			<img alt='product img' src={image} />
		
		<div>
			<h2>{id}</h2>
			<p>{title}</p>
			<p>{price}</p>
			<p>{category}</p>
		</div>
		</div>
	);
}

export default Card;