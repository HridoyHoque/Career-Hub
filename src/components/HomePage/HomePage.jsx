import React, { useState } from 'react';
import HeaderHomePage from '../HeaderHomePage/HeaderHomePage';
import './HomePage.css'
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../featuredJobs/FeaturedJobs';
const HomePage = () => {
    
    return (
        <div className='px-5 md:px-28'>
            <HeaderHomePage></HeaderHomePage>
            <JobCategory />
            <FeaturedJobs />
        </div>
    );
};

export default HomePage;