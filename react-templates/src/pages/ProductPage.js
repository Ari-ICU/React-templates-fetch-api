import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProductContext } from "../contexts/ProductContext"; // Custom hook for context

const ProductPage = () => {
    const { products, cartItems, setCartItems } = useProductContext(); // Use the custom hook
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("*");

    // Add product to cart
    const handleAddToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            // Update the quantity of the existing product
            const updatedCart = cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCart);
            toast.success("Product quantity updated in cart!");
        } else {
            // Add new product to cart
            const updatedCart = [...cartItems, { ...product, quantity: 1 }];
            setCartItems(updatedCart);
            toast.success("Product added to cart!");
        }

        // Save cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cartItems));
    };

    // Filter products based on category
    useEffect(() => {
        if (activeCategory === "*") {
            setFilteredProducts(products); // Show all products
        } else {
            setFilteredProducts(
                products.filter(product => product.category.toLowerCase() === activeCategory.toLowerCase())
            );
        }
    }, [products, activeCategory]);

    const handleCategoryFilter = (category) => {
        setActiveCategory(category);
    };

    if (!products.length) return <div>Loading...</div>;

    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-filters">
                                <ul>
                                    <li
                                        className={activeCategory === "*" ? "active" : ""}
                                        onClick={() => handleCategoryFilter("*")}
                                    >
                                        All
                                    </li>
                                    <li
                                        className={activeCategory === "men" ? "active" : ""}
                                        onClick={() => handleCategoryFilter("men")}
                                    >
                                        Men
                                    </li>
                                    <li
                                        className={activeCategory === "women" ? "active" : ""}
                                        onClick={() => handleCategoryFilter("women")}
                                    >
                                        Women
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row product-lists">
                        {filteredProducts.length === 0 ? (
                            <div className="col-12 text-center">
                                <p>No products found in this category</p>
                            </div>
                        ) : (
                            filteredProducts.map((item) => (
                                <div key={item.id} className={`col-lg-4 col-md-6 text-center ${item.category.toLowerCase()}`}>
                                    <div className="single-product-item">
                                        <div className="product-image">
                                            <Link to={`/shop/${item.id}`}>
                                                <img src={item.image} alt={item.title} />
                                            </Link>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p className="product-price"><span>Per Kg</span> ${item.price}</p>
                                        <Link onClick={() => handleAddToCart(item)} className="cart-btn">
                                            <i className="fas fa-shopping-cart"></i> Add to Cart
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
