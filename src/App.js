import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import CartList from './CartList';
// import { products } from './products';
import './App.css';


const PAGE_PRODUCT = 'products';
const PAGE_CART = 'cart';
 

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      searchfield: '',
      Cart: [],
      Page: 'products',
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response=> response.json())
      .then(products => this.setState({products : products}));
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
   
  }



  render () {
       const filteredProducts = this.state.products.filter(products => {
        return products.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

       const cartProducts = this.state.Cart.filter(products => {
        return {Cart:[products]};
        // products.title.toLowerCase().includes(this.state.Cart)
        })
       
        
          
       

        const addToCart = (user) => {
          this.setState({Cart:[...this.state.Cart, this.state.products]});
          console.log('we dey dd to crt');
        }

        const navigateTo = (nextPage) => {
            this.setState({Page:(nextPage)});
            console.log('navigateTo is runnin');
        }

        const renderProducts = () => {
            return ( <div className="Products">
                   <h1>StoreProducts</h1>
                   <SearchBox searchChange={this.onSearchChange} />
                   <CardList products={filteredProducts} toCart={addToCart} />
                   </div>
            );
        }

        const renderCart = () => {
          return (
              <div className="Cart">
                   <h1>Cart</h1>
                  
                   <CartList products={this.state.Cart} />
                   </div>
          );
        }

    return (
      <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART) } >Go to Cart ({this.state.Cart.length})</button>
        <button onClick={() => navigateTo(PAGE_PRODUCT) } >View products </button>
      </header>
        
        { this.state.Page === PAGE_PRODUCT && renderProducts()}
        { this.state.Page === PAGE_CART && renderCart()}
        </div>
    );
  }
  
}

export default App;
