import React from 'react';
import './about.css';
import AboutItem from './AboutItem';

const AboutUs = () => {
    return (
        <>
         <AboutItem>
         <div class="container mx-auto">
             <h3 class=" text-center my-5 my-8 text-base font-medium  text-gary-500 uppercase text-2xl  sm:mt-0 sm:px-0 sm:text-3xl text-blue-600 ">Your Most Trusted Health Partner</h3>
         </div>
        </AboutItem>   
        </>
    );
};

export default AboutUs;