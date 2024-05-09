import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import DisplaySection from '../DisplaySection/DisplaySection';
import FeatureProducts from '../FeatureProducts/FeatureProducts';


const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <DisplaySection />
            <FeatureProducts />
           
        </div>
    )
}
export default Home;
