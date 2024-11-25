import React from 'react';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
    return (
        <div className="homepage-slider">
            <div className="single-homepage-slider homepage-bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-right">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Mega Sale Going On!</p>
                                    <h1>Get December Discount</h1>
                                    <div className="hero-btns">
                                        <Link to="/shop" className="boxed-btn">Visit Shop</Link>
                                        <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;
