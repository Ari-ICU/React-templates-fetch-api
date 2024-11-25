import React from 'react'
import CartBanner from '../components/CartBanner';
import ListSection from '../components/ListSection';
import ProductSection from '../components/ProductSection';
import AboutSection from '../components/AboutSection';
import ShopBanner from '../components/ShopBanner';
import LatestNews from '../components/LatestNews';
import HomepageSlider from '../components/HomepageSlider';

export const Home = () => {
    return (
        <div>
            <HomepageSlider />


            <ListSection />
            <ProductSection />
            <CartBanner />

            <AboutSection />
            <ShopBanner />
            <LatestNews />

        </div>
    )
}

export default Home;