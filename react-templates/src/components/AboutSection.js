import React from 'react';
import { Link } from 'react-router-dom'

const AboutSection = () => {
    return (
        <div className="abt-section mb-150">
            <div className="container">
                <div className="row">
                    {/* Video Play Section */}
                    <div className="col-lg-6 col-md-12">
                        <div className="abt-bg">
                            {/* Link to YouTube Video with Play Button */}
                            <iframe
                                width="560"
                                height="500"
                                src="https://www.youtube.com/embed/v2elT9qN4k8?si=Wp_BQIpM983xwURd"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>


                    {/* About Text Section */}
                    <div className="col-lg-6 col-md-12">
                        <div className="abt-text">
                            {/* Subheading */}
                            <p className="top-sub">Since Year 1999</p>
                            {/* Heading */}
                            <h2>
                                We are <span className="orange-text">Fruitkha</span>
                            </h2>
                            {/* Paragraphs */}
                            <p>
                                Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.
                            </p>
                            {/* Know More Button */}
                            <Link to="/about" className="boxed-btn mt-4">Know More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
