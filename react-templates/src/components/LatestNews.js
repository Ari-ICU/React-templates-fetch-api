import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const LatestNews = () => {
    const { products, loading, error } = useContext(ProductContext);

    if (loading) return <p>Loading news...</p>;
    if (error) return <p>Error fetching news: {error}</p>;

    // Limit to first 3 products for the news section
    const news = products.slice(1, 4).map((item) => ({
        id: item.id,
        title: item.title,
        author: 'Admin',
        date: new Date().toLocaleDateString(),
        excerpt: item.description.slice(0, 100) + '...',
        image: item.image,
        link: `/news/${item.id}`,
    }));

    return (
        <div className="latest-news pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h3>
                                <span className="orange-text">Our</span> News
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {news.map((item) => (
                        <div className="col-lg-4 col-md-6" key={item.id}>
                            <div className="single-latest-news">
                                <Link to={item.link}>
                                    <div
                                        className="latest-news-bg"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    ></div>
                                </Link>
                                <div className="news-text-box">
                                    <h3>
                                        <Link to={item.link}>{item.title}</Link>
                                    </h3>
                                    <p className="blog-meta">
                                        <span className="author">
                                            <i className="fas fa-user"></i> {item.author}
                                        </span>
                                        <span className="date">
                                            <i className="fas fa-calendar"></i> {item.date}
                                        </span>
                                    </p>
                                    <p className="excerpt">{item.excerpt}</p>
                                    <Link to={item.link} className="read-more-btn">
                                        read more <i className="fas fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Link to="/news" className="boxed-btn">
                            More News
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
