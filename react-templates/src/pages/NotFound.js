import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NotFoundPage = () => {
    return (
        <>
            {/* Breadcrumb Section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>404 - Not Found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Error Section */}
            <div className="full-height-section error-section">
                <div className="full-height-tablecell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="error-text">
                                    <i className="far fa-sad-cry"></i>
                                    <h1>Oops! Not Found.</h1>
                                    <p>The page you requested for is not found.</p>
                                    {/* Use Link for navigation */}
                                    <Link to="/" className="boxed-btn">
                                        Back to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
