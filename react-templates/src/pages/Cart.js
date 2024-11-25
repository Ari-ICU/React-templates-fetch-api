import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext"; // Import your context

const CartPage = () => {
    const { cartItems, setCartItems } = useContext(ProductContext); // Get cartItems and setter from context
    const [total, setTotal] = useState(0);

    // Default cartItems to an empty array if not defined
    const items = cartItems || [];

    // Recalculate total whenever cartItems change
    useEffect(() => {
        const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalAmount);
    }, [items]);
    console.log()

    // Handle changes to item quantity
    const handleQuantityChange = (id, quantity) => {
        const updatedCart = items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
    };

    // Remove an item from the cart
    const handleRemoveItem = (id) => {
        const updatedCart = items.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
    };

    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="cart-table-wrap">
                                <table className="cart-table">
                                    <thead className="cart-table-head">
                                        <tr className="table-head-row">
                                            <th className="product-remove">Remove</th>
                                            <th className="product-image">Product Image</th>
                                            <th className="product-name">Name</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.length === 0 ? (
                                            <tr>
                                                <td colSpan="6" className="text-center">
                                                    <p>Your cart is empty.</p>
                                                </td>
                                            </tr>
                                        ) : (
                                            items.map(item => (
                                                <tr key={item.id} className="table-body-row">
                                                    <td className="product-remove">
                                                        <button onClick={() => handleRemoveItem(item.id)}>
                                                            <i className="far fa-window-close"></i>
                                                        </button>
                                                    </td>
                                                    <td className="product-image">
                                                        <img src={item.image} alt={item.title} />
                                                    </td>
                                                    <td className="product-name">{item.title}</td>
                                                    <td className="product-price">${item.price.toFixed(2)}</td>
                                                    <td className="product-quantity">
                                                        <input
                                                            type="number"
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                                            min="1"
                                                        />
                                                    </td>
                                                    <td className="product-total">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="total-section">
                                <table className="total-table">
                                    <thead className="total-table-head">
                                        <tr className="table-total-row">
                                            <th>Total</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="total-data">
                                            <td><strong>Subtotal:</strong></td>
                                            <td>${total.toFixed(2)}</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Shipping:</strong></td>
                                            <td>$45.00</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Total:</strong></td>
                                            <td>${(total + 45).toFixed(2)}</td> {/* Add fixed shipping cost */}
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="cart-buttons">
                                    <a href="/cart" className="boxed-btn">Update Cart</a>
                                    <a href="/checkout" className="boxed-btn black">Check Out</a>
                                </div>
                            </div>

                            <div className="coupon-section">
                                <h3>Apply Coupon</h3>
                                <div className="coupon-form-wrap">
                                    <form>
                                        <p><input type="text" placeholder="Coupon" /></p>
                                        <p><input type="submit" value="Apply" /></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
