import React from 'react'
 
import "./Home.scss";
import Slider from '../../components/Slider/Slider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/Hero/Hero';
import Virtual from '../../components/Virtual/Virtual';
import NewArrivals from '../../components/NewArrivals/NewArrivals';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Hero />
      <FeaturedProducts type="featured" />
      <Virtual />
      <Categories />
      <TrendingProducts type="trending" />
      <NewArrivals type="new" />
      <Contact />
    </div>
  );
};

export default Home;