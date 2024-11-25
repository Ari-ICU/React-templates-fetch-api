import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import RelatedProducts from '../components/RelatedProducts';

const SingleProduct = () => {
    const { id } = useParams();  // Get the ID from URL
    const { products } = useContext(ProductContext);  // Access products from context
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Products:", products);  // Log products to check if they're being loaded
        console.log("Product ID from URL:", id);  // Log the id from URL

        // Convert id from string (URL) to number (if product.id is a number)
        const productId = Number(id);  // Convert id to a number

        if (products && products.length > 0) {
            const foundProduct = products.find(product => product.id === productId);
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                setProduct(null); // No product found
            }
            setLoading(false);
        } else {
            setLoading(true); // Still loading products
        }
    }, [id, products]);  // Dependency on id and products

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div>
            {/* Product Breadcrumb */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Read the Details</p>
                                <h1>{product.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div className="mt-150 mb-150">
                <div className="container">
                    <div className="row mb-150">
                        <div class="col-md-5">
                            <div class="single-product-img">
                                <img src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="single-product-section">
                                <div className="single-product-text">
                                    <p className="product-meta">
                                        <span className="author"><i className="fas fa-user"></i> {product.seller}</span>
                                        <span className="date"><i className="fas fa-calendar"></i> {product.date}</span>
                                    </p>
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p className="product-price"><span>Price:</span> ${product.price}</p>
                                    <div className="add-to-cart-btn">
                                        <Link className="cart-btn">Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <RelatedProducts />
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
