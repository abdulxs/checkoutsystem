import React, { Component } from 'react';
import Card from './Card'; 
import App from './App';
import CardList from './CardList';

const CartList = ({ products, setCart, toCart, Cart,  }) => {
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
							</div>
						);
				})
	    	}
	    
	    </div>
	    
	);
}

export default CartList;