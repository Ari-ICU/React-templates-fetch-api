import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>
                                    Ut enim ad minim veniam perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam, eaque ipsa quae.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                                    <li>support@fruitkha.com</li>
                                    <li>+00 111 222 3333</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/services">Shop</Link></li>
                                    <li><Link to="/news">News</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box subscribe">
                                <h2 className="widget-title">Subscribe</h2>
                                <p>Subscribe to our mailing list to get the latest updates.</p>
                                <form action="/index">
                                    <input type="email" placeholder="Email" />
                                    <button type="submit">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer */}

            {/* Copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>
                                Copyrights &copy; 2024 -{" "}
                                <Link to="#" target="_blank" rel="noopener noreferrer">
                                    THOEURN RATHA
                                </Link>
                                , All Rights Reserved.
                                <br />
                                Distributed By -{" "}
                                <Link to="" target="_blank" rel="noopener noreferrer">
                                    Google
                                </Link>
                            </p>
                        </div>
                        <div className="col-lg-6 text-right col-md-12">
                            <div className="social-icons">
                                <ul>
                                    <li>
                                        <Link to="" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-dribbble"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Copyright */}
        </>
    );
};

export default Footer;
