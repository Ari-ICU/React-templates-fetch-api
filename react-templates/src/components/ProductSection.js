import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    const { products, loading, error } = useContext(ProductContext);

    // Loading state
    if (loading) {
        return <p>Loading products...</p>;
    }

    // Error state
    if (error) {
        return <p>Error fetching products: {error.message}</p>;
    }

    // If no products found after filtering
    if (products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div className="product-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h3>
                                <span className="orange-text">Our</span> Products
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {products.slice(2, 5).map((product) => (
                        <div className="col-lg-4 col-md-6 text-center" key={product.id}>
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to={`/shop/${product.id}`}>
                                        <img src={product.image} alt={product.title} />
                                    </Link>
                                </div>
                                <h3>{product.title}</h3>
                                <p className="product-price">
                                    <span>Per Kg</span> ${product.price}
                                </p>
                                <Link to="/cart" className="cart-btn">
                                    <i className="fas fa-shopping-cart"></i> Add to Cart
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
