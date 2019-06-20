import React, { Component } from 'react';
import './App.css';
import { totalmem } from 'os';

export default class App extends Component {
    constructor(){
        super();
            this.state = {
                cart: [],
                shirts: [{
                    id: 1,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'fancy hat',
                    price: 12.99,
                    description: 'has a feather in it.'
                }],
                pants: [{
                    id: 2,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'fancy car',
                    price: 15750.45,
                    description: 'goes vroom vroom.'
                }],
                hats: [{
                    id: 3,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'simple rock',
                    price: 5.00,
                    description: 'it is a rock'
                }],
                address: '',
                creditCard: '',
            }
    }


    addToCart(data){
        this.setState({
            cart: [...this.state.cart, data]
        })
    }





    checkout = () => {
        if(this.state.address && this.state.creditCard){
        this.setState({
            cart: []
        })
        alert('Purchase is Complete!')
        } else{
            alert('Please fill out the required fields.')
        }
    }

    handleAddressInput = (address) => {
        this.setState({
            address: address
        })
        console.log(this.state.address)
    }

    handleCreditCardInput = (card) => {
        this.setState({
            creditCard: card
        })
    }

    render(){
        const {shirts} = this.state;
        const {pants} = this.state;
        const {hats} = this.state;
        const {cart} = this.state;

        return (
            <div className="App">
                <section className="products">
                    <h1>Products</h1>

                    <h2>Shirts</h2>
                    {shirts.map(data => (
                        <div key={data.id} className="shirts">
                            <img src={data.imageUrl}/>
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                            <p>{data.price}</p>
                            <button onClick={() => this.addToCart(data)}>Add to Cart</button>
                        </div>
                    ))}

                    <h2>Pants</h2>
                    {pants.map(data => (
                        <div key={data.id} className="pants">
                            <img src={data.imageUrl}/>
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                            <p>{data.price}</p>
                            <button onClick={() => this.addToCart(data)}>Add to Cart</button>
                        </div>
                    ))}

                    <h2>Hats</h2>
                    {hats.map(data => (
                        <div key={data.id} className="hats">
                            <img src={data.imageUrl}/>
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                            <p>{data.price}</p>
                            <button onClick={() => this.addToCart(data)}>Add to Cart</button>
                        </div>
                    ))}

                </section>
                

                <section className="cart">

                    <h1>Cart</h1>
                    <h2>Total: ${this.state.cart.reduce(
                            (totalPrice, product) => (totalPrice += product.price), 0 )}
                            </h2>
                    <div className="input">
                        <input value={this.state.address} onChange={e => this.handleAddressInput(e.target.value)}></input>
                        <input className="input2" value={this.state.creditCard} onChange={e => this.handleCreditCardInput(e.target.value)}></input>
                        <button onClick={this.checkout}>Checkout</button>
                    </div>
                    

                    {cart.map(data => (
                        <div key={data.id} className="cart">
                            <img src={data.imageUrl}/>
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                            <p>{data.price}</p>
                        </div>
                    ))}

                </section>
            </div>
        )
    }
}

