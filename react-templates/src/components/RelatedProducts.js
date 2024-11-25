import React from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';

const RelatedProducts = () => {
    const { products, addToCart } = useProductContext(); // Get products and addToCart function from context

    // Assuming you want to display products that are not the current product (e.g., related)
    return (
        <div className="more-products mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h3><span className="orange-text">Related</span> Products</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {products.slice(0, 3).map((relatedProduct) => (
                        <div key={relatedProduct.id} className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to={`/shop/${relatedProduct.id}`}>
                                        <img src={relatedProduct.image} alt={relatedProduct.name} />
                                    </Link>
                                </div>
                                <h3>{relatedProduct.name}</h3>
                                <p className="product-price"><span>Per Kg</span> ${relatedProduct.price} </p>
                                {/* Add to Cart button */}
                                <button
                                    onClick={() => addToCart(relatedProduct)}
                                    className="cart-btn">
                                    <i className="fas fa-shopping-cart"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;
