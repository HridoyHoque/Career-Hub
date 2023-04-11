import React from 'react';
import './HeaderHomePage.css'


const HeaderHomePage = () => {
    return (
        <div className='Header-container my-container mx-auto flex flex-col items-center justify-between lg:flex-row'>
        {/* Header Text Content */}
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            One Step <br /> 
            Closer To Your <br /> 
              <span className='inline-block text-blue-400'>Dream Job</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row '>
          <button className="rounded-lg p-2.5 text-white bg-indigo-500 ">Get Started</button>
           
          </div>
        </div>
        {/* Header Img */}
        <div className='relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <img src="https://i.ibb.co/Q6dZNwr/P3-OLGJ1-copy-1.png" className="object-contain w-full" alt="cover image" />
          </div>
        </div>
      </div>
    );
};

export default HeaderHomePage;