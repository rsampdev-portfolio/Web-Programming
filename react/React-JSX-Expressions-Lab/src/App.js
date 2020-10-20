import React, { Component } from 'react';
import styles from './App.module.scss';

function formatPrice(price) {
    const dollars = Math.floor(price / 100)
    let cents = `${price % 100}`.padEnd(2, '0')
    return `$${dollars}.${cents}`
}

class App extends Component {

    render() {
        const { cart } = this.props;

        return (
            <section className={styles.App}>
                <h1>Shopping Cart</h1>
                <div className={styles['product-list']}>
                    <>
                        <div className={styles.product + ' ' + styles.header}>
                            <h3>Item</h3>
                            <h3>Description</h3>
                            <h3>Quantity</h3>
                            <h3>Price</h3>
                            <h3>Total</h3>
                        </div>
                        {
                            cart.map(item => (
                                <div key={item.id} className={styles.product}>
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>{item.quantity}</p>
                                    <p>{formatPrice(item.price)}</p>
                                    <p>{formatPrice(item.quantity * item.price)}</p>
                                </div>
                            ))
                        }
                        <hr />
                        <div className={styles.product + ' ' + styles.header}>
                            <p></p>
                            <p></p>
                            <p></p>
                            <h3>Total</h3>
                            <h3 style={{ color: "black"}}>
                                {formatPrice(cart.reduce((total, item) => total + item.quantity * item.price, 0))}
                            </h3>
                        </div>
                    </>
                </div>
            </section>
        );
    }
}

export default App;
