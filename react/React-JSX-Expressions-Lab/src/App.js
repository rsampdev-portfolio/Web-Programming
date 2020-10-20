import React, { Component } from 'react';
import styles from './App.module.scss';

function formatPrice(price) {
    const dollars = Math.floor(price / 100)
    let cents = `${price % 100}`.padEnd(2, '0')
    return `$${dollars}.${cents}`
}

class App extends Component {
    renderShoppingCartHeaders() {
        const headers = ["Item", "Description", "Quantity", "Price", "Total"];

        return (
            <div className={styles.product + ' ' + styles.header}>
                {headers.map((headerTitle) => <h3>{headerTitle}</h3>)}
            </div>
        );
    }
    
    renderShoppingCartItems(cart) {
        return (
            cart.map(item => (
                <div key={item.id} className={styles.product}>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.quantity}</p>
                    <p>{formatPrice(item.price)}</p>
                    <p>{formatPrice(item.quantity * item.price)}</p>
                </div>
            ))
        );
    }

    renderShoppingCartItemsTotal(cart) {
        return (
            <div className={styles.product + ' ' + styles.header}>
                <p></p>
                <p></p>
                <p></p>
                <h3>Total</h3>
                <h3 style={{ color: "black"}}>
                    {formatPrice(cart.reduce((total, item) => total + item.quantity * item.price, 0))}
                </h3>
            </div>
        );
    }

    renderShoppingCart(cart) {
        return (
            <section className={styles.App}>
                <h1>Shopping Cart</h1>
                <div className={styles['product-list']}>
                    {this.renderShoppingCartHeaders()}
                    {this.renderShoppingCartItems(cart)}
                    <hr />
                    {this.renderShoppingCartItemsTotal(cart)}
                </div>
            </section>
        );
    }

    render() {
        const cart = this.props.cart;
        return this.renderShoppingCart(cart);
    }
}

export default App;