import React from 'react';
import HeaderHomePage from '../HeaderHomePage/HeaderHomePage';
import './HomePage.css'
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategories/JobCategory';
const HomePage = () => {
    const jobCategories = useLoaderData()
    return (
        <div>
            <HeaderHomePage></HeaderHomePage>
            <div>
                <h1 className='text-center mt-10 Job-Category-title'>Job Category List</h1>
                <h5 className='text-center Job-Category-description'>Explore thousands of job opportunities with all the information you need. Its your future</h5>
            </div>
           <div className='my-container Job-Category-container'>
           {
             jobCategories.map(jobCategory => <JobCategory
             key={jobCategory.id}
             jobCategory={jobCategory}
             ></JobCategory> )
            }
           </div>
        </div>
    );
};

export default HomePage;