import React from 'react';
import './JobCategory.css'

const JobCategory = ({ jobCategory }) => {
    const { id, logo, name, description } = jobCategory;
    return (
        <div className='Job-Category'>
            <div>
                <img src={logo} alt="" />
                <h5>{name}</h5>
                <h6>{description}</h6>
            </div>
        </div>
    );
};

export default JobCategory;