import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutForm = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isShippingDifferent, setIsShippingDifferent] = useState(false);
    const [createAccount, setCreateAccount] = useState(false);

    // Load cart items and calculate total amount
    useEffect(() => {
        try {
            const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartItems(storedCart);

            const total = storedCart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            setTotalAmount(parseFloat(total.toFixed(2))); // Ensure consistent formatting
        } catch (error) {
            console.error("Error loading cart items from localStorage:", error);
        }
    }, []);

    // Handle PayPal payment success
    const handlePaymentSuccess = (details, data) => {
        alert(`Transaction completed by ${details.payer.name.given_name}`);
        console.log("Transaction Details:", details, data);
    };

    // Toggle for shipping to different address
    const handleShippingToggle = () => {
        setIsShippingDifferent(!isShippingDifferent);
    };

    // Toggle for creating an account
    const handleCreateAccountToggle = () => {
        setCreateAccount(!createAccount);
    };

    const initialPayPalOptions = {
        "client-id": "AZsg0CU6mNHveGmpF90bMucCtWGs2ZKPUKg7B2iQzzFYvQoYcH2p_L_MREqXMJgYPtjeZ43Fq11uDhIf",
        currency: "USD",
    };

    return (
        <div>
            {/* Page Header */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Check Out Product</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Checkout Section */}
            <div className="checkout-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        {/* Billing Details */}
                        <div className="col-md-6">
                            <section>
                                <h4>Billing Details</h4>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName">First Name *</label>
                                        <input type="text" className="form-control" id="firstName" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName">Last Name *</label>
                                        <input type="text" className="form-control" id="lastName" required />
                                    </div>
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="company">Company Name (Optional)</label>
                                    <input type="text" className="form-control" id="company" />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="address">Street Address *</label>
                                    <input type="text" className="form-control" id="address" placeholder="House number and street name" required />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="city">Town/City *</label>
                                    <input type="text" className="form-control" id="city" required />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="phone">Phone *</label>
                                    <input type="tel" className="form-control" id="phone" required />
                                </div>
                                <div className="form-check mb-3 ">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="createAccount"
                                        checked={createAccount}
                                        onChange={handleCreateAccountToggle}
                                    />
                                    <label className="form-check-label" htmlFor="createAccount">
                                        Create an account?
                                    </label>
                                </div>
                                {createAccount && (
                                    <div className="mb-3">
                                        <label htmlFor="password">Account Password *</label>
                                        <input type="password" className="form-control" id="password" required />
                                    </div>
                                )}
                            </section>

                            {/* Shipping Details */}
                            <section className="mt-4">
                                <div className="form-check mb-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="differentShipping"
                                        checked={isShippingDifferent}
                                        onChange={handleShippingToggle}
                                    />
                                    <label className="form-check-label" htmlFor="differentShipping">
                                        Ship to a different address?
                                    </label>
                                </div>
                                {isShippingDifferent && (
                                    <div>
                                        <h4>Shipping Details</h4>
                                        <div className="mb-3">
                                            <label htmlFor="shippingAddress">Street Address *</label>
                                            <input type="text" className="form-control" id="shippingAddress" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="shippingCity">Town/City *</label>
                                            <input type="text" className="form-control" id="shippingCity" required />
                                        </div>
                                    </div>
                                )}
                            </section>

                        </div>

                        {/* Order Summary */}
                        <div className="col-md-6">
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <h2 className="h3 mb-3 text-black">Your Order</h2>
                                    <div className="p-3 p-lg-5 border bg-white">
                                        <table className="table site-block-order-table mb-5">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            {item.title} <strong className="mx-2">x</strong> {item.quantity}
                                                        </td>
                                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                                    </tr>
                                                ))}
                                                <tr>


                                                </tr>
                                                {/* Additional rows for subtotal, shipping, and total */}
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td>${totalAmount.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td>$50.00</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Order Total</strong></td>
                                                    <td> <strong>${(totalAmount + 50).toFixed(2)}</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>


                                        {/* PayPal Payment Section */}
                                        <PayPalScriptProvider options={initialPayPalOptions}>
                                            <PayPalButtons
                                                style={{ layout: "vertical" }}
                                                createOrder={(data, actions) => {
                                                    return actions.order.create({
                                                        purchase_units: [
                                                            {
                                                                amount: {
                                                                    value: totalAmount, // Ensure valid total amount
                                                                },
                                                            },
                                                        ],
                                                    });
                                                }}
                                                onApprove={(data, actions) => {
                                                    return actions.order.capture().then((details) => {
                                                        handlePaymentSuccess(details, data);
                                                    });
                                                }}
                                                onError={(err) => {
                                                    console.error("PayPal Checkout Error:", err);
                                                }}
                                            />
                                        </PayPalScriptProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CheckoutForm;
