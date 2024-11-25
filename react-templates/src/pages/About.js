import React from "react";
import FeaturedSection from "../components/FeaturedSection";
import BreadcrumbSection from "../components/BreadcrumbSection";
import ShopBanner from "../components/ShopBanner";
import TeamSection from "../components/TeamSection";

const AboutPage = () => {
    return (
        <div>
            <BreadcrumbSection />
            <FeaturedSection />
            <ShopBanner />
            <TeamSection />
        </div>
    );
};

export default AboutPage;
