import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobsCard from '../FeaturedJobsCard/FeaturedJobsCard';


const FeaturedJobs = () => {
    const data = useLoaderData()
    const [sliceData, setSliceData] = useState(4);

    return (
        <div>
            <div className='text-center mt-16 mb-8'>
                <h1 className='font-bold text-4xl'>Featured Jobs are well</h1>
                <p className='py-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 py-5'>
                {
                    data.slice(0, sliceData == 4 ? sliceData : 6).map(featurejob =>
                        <FeaturedJobsCard 
                        key={featurejob.id}
                        featurejob={featurejob} />
                    )
                }
            </div>
            <div className='text-center my-3'>
                {
                    sliceData == 4 ?
                        <><button onClick={() => setSliceData(6)} className='px-9 py-3 rounded text-white bg-blue-900 text-sm'>See All</button></>
                        :
                        <></>
                }

            </div>
        </div>
    );
};

export default FeaturedJobs;