import React from 'react';
const JobCategoryCard = ({category}) => {
    const {id, name , logo, description} = category;
    return (
        <div>
            <div className='border-2 p-4'>
            <img src={logo} alt='' />
            <h3 className='font-bold my-2'>{name}</h3>
            <p>{description} Jobs Available</p>
        </div>
        </div>
    );
};

export default JobCategoryCard;