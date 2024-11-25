import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const Header = () => {
    const { cartCount } = useContext(ProductContext);

    return (
        <>
            {/* PreLoader */}
            <div className="loader">
                <div className="loader-inner">
                    <div className="circle"></div>
                </div>
            </div>
            {/* PreLoader Ends */}

            {/* Header */}
            <div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                {/* Logo */}
                                <div className="site-logo">
                                    <Link to="/">
                                        <img src="assets/img/logo.png" alt="Logo" />
                                    </Link>
                                </div>
                                {/* Logo */}

                                {/* Menu Start */}
                                <nav className="main-menu">
                                    <ul>
                                        <li className="current-list-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li><Link to="/about">About</Link></li>
                                        <li>
                                            <Link to="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/404">404 Page</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link to="/cart">Cart</Link></li>
                                                <li><Link to="/checkout">Check Out</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                                <li><Link to="/shop">Shop</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link to="/contact">Contact</Link></li>
                                        <li>
                                            <Link to="/shop">Shop</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/shop">Shop</Link></li>
                                                <li><Link to="/checkout">Check Out</Link></li>
                                                <li><Link to="/cart">Cart</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="header-icons">
                                                <Link className="shopping-cart" to="/cart">
                                                    <i className="fas fa-shopping-cart"></i>
                                                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                                                </Link>

                                                <Link className="mobile-hide search-bar-icon" to="#">
                                                    <i className="fas fa-search"></i>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <Link className="mobile-show search-bar-icon" to="#">
                                    <i className="fas fa-search"></i>
                                </Link>
                                <div className="mobile-menu"></div>
                                {/* Menu End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
