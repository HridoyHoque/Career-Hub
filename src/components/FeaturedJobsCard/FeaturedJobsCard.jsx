import React from 'react';
import { Link } from 'react-router-dom';
const FeaturedJobsCard = ({ featurejob }) => {
    const {id, title, image, company, type, salary, location } = featurejob;

    return (
        <div>
            <div className='border-2 p-4 h-full'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='py-2'>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <p>{company}</p>
                </div>
                <div className='flex gap-3 text-blue-600'>
                    <div className='border-2 border-blue-300 p-2'>{type.remote}</div>
                    <div className='border-2 p-2 border-blue-300'>{type.fullTime}</div>
                </div>
                <div className='py-2 flex gap-3'>
                    <div className='flex gap-1'>
                        <img src="https://i.ibb.co/h7Ck8Tv/Frame-4.png" alt="" />
                        {location}
                    </div>
                    <div className='flex gap-1'>
                        <img src="https://i.ibb.co/cvqFrgj/Frame.png" alt="" />
                        Salary: {salary}
                    </div>
                </div>
                <div className='py-2'>
                    <Link to={`/Jobdetails/${id}`} className="rounded-lg p-2.5 text-white bg-indigo-500  hover:bg-violet-600">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobsCard;