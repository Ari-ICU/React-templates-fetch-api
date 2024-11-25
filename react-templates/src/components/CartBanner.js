import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

const CartBanner = () => {
    const { products } = useProductContext();

    // Use the third product for the banner
    const product = products[2];

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <section className="cart-banner pt-100 pb-100">
            <div className="container">
                <div className="row clearfix">
                    {/* Image Column */}
                    <div className="image-column col-lg-6">
                        <div className="image">
                            <div className="price-box">
                                <div className="inner-price">
                                    <span className="price">
                                        <strong>30%</strong> <br /> off per kg
                                    </span>
                                </div>
                            </div>
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="content-column col-lg-6">
                        <h3>
                            <span className="orange-text">Deal</span> of the month
                        </h3>
                        <h4>{product.title}</h4>
                        <div className="text">{product.description}</div>
                        {/* Countdown Timer */}
                        <div className="time-counter">
                            <div
                                className="time-countdown clearfix"
                                data-countdown="2020/2/01"
                            >
                                <div className="counter-column">
                                    <div className="inner">
                                        <span className="count">00</span>Days
                                    </div>
                                </div>
                                <div className="counter-column">
                                    <div className="inner">
                                        <span className="count">00</span>Hours
                                    </div>
                                </div>
                                <div className="counter-column">
                                    <div className="inner">
                                        <span className="count">00</span>Mins
                                    </div>
                                </div>
                                <div className="counter-column">
                                    <div className="inner">
                                        <span className="count">00</span>Secs
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/cart" className="cart-btn mt-3">
                            <i className="fas fa-shopping-cart"></i> Add to Cart
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartBanner;
