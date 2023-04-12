import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb } from '../../fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Jobdetails = () => {
    const { id } = useParams();
    const [singleData, setSingleData] = useState({});
    useEffect(() => {
        fetch('/FeaturedJobs.json')
            .then(res => res.json())
            .then(data => {
                const job = data.find(item => item.id === id);
                setSingleData(job);
            })
    }, [id])
    const storeToDb = (id) => {
        addToDb(id);
        toast("Successfully applied");
    }
    return (
        <div className='p-5 md:px-16'>
            <img src="https://i.ibb.co/WDX9H1s/Vector.png" alt="" />
            <h2 className='text-3xl font-bold text-center py-5'>Job Details</h2>
            {singleData ? (
                <div className=' grid grid-cols-1 md:grid-cols-3 justify-between gap-5 '>
                    <div className='col-span-2'>
                        <p className='py-3'>
                            <span className='font-bold'>Job Description:</span> {singleData.description}
                        </p>
                        <p>
                            <span className='font-bold'>Job Responsibility:</span> {singleData.responsibility}
                        </p>
                        <p className='py-3'>
                            <span className='font-bold'>Educational Requirements:</span> {singleData.education}
                        </p>
                        <p>
                            <span className='font-bold'>Experiences:</span> {singleData.experience}
                        </p>

                    </div>

                    <div>
                        <div className='border-2 p-4 bg-blue-100 rounded-lg'>
                            <h2 className='mb-3 font-semibold'>Job Details</h2>
                            <hr className='border-2 border-blue-200 mb-4' />
                            <h3><span className='font-bold'>Salary:</span> {singleData.salary}</h3>
                            <h3 className='mb-4'><span className='font-bold'>Job Title:</span> {singleData.title}</h3>

                            <h2 className='mb-2 font-semibold'>Contact Information</h2>
                            <hr className='border-2 border-blue-200 mb-4' />
                            <h3><span className='font-bold'>Phone:</span> {singleData.phone}</h3>
                            <h3><span className='font-bold'>Email:</span> {singleData.email}</h3>
                            <h3><span className='font-bold'>Address:</span> {singleData.location}</h3>
                        </div>
                        <div>
                        <button onClick={()=>storeToDb(singleData.id)} className="rounded-lg p-2.5 text-white bg-indigo-500  hover:bg-violet-600">Apply Now</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading Data...</p>
            )}

            <ToastContainer />
        </div>
    );
};

export default Jobdetails;