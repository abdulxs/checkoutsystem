import React, { Component } from 'react';
import Card from './Card'; 

const CardList = ({ products, setCart, addToCart, toCart, Cart }) => {
	return (
		<div>
	    	{
	    		products.map((user, i) => {
					return (
						<div key={i}>
						<Card 
							 
							id={products[i].id} 
							title={products[i].title} 
							price={products[i].price} 
							category={products[i].category}
							image={products[i].image}
							
							 />
							<button onClick={toCart} > Add to Cart</button>
							</div>
						);
				})
	    	}
	    
	    </div>
	    
	);
}

export default CardList;