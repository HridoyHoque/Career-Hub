import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../fakedb';
import { Link } from 'react-router-dom';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const [myData, setMydata] = useState([])
    const [newData, setNewData] = useState([])

    let localData = getShoppingCart()

    useEffect(() => {
        fetch("/FeaturedJobs.json")
        .then(res => res.json())
        .then(data => setMydata(data))
    } , [])

    useEffect(() => {
       const filteredData = [];
       for (const id in localData){
        const job = myData.find(data => data.id === id);
        if(job){
            filteredData.push(job);
        }
        setNewData(filteredData);
       }

    }, [localData]);
    return (
        <div className='p-5 md:px-16 mt-5'>
            <img className='banner-appliedJob' src="https://i.ibb.co/WDX9H1s/Vector.png" alt="" /> <h3 className='appliedJobText text-center font-bold py-5 text-3xl'>Applied Jobs</h3>
        
        <hr />

        {newData.map(data => (
            <div key={data.id}>
                <div className='border-2 p-4 m-2 grid grid-cols-1 md:grid-cols-3  items-center'>
                    <div>
                        <img src={data.image} alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold'>{data.title}</h2>
                        <h2>{data.company}</h2>
                        <div className='flex gap-3 py-3'>
                            <div className='border-2 border-blue-500 p-2 text-blue-500'>{data.type.remote}</div>
                            <div className='border-2 p-2 border-blue-500 text-blue-500'>{data.type.fullTime}</div>
                        </div>
                        <div className='flex gap-3'>
                            <div>
                           
                                <img src="https://i.ibb.co/h7Ck8Tv/Frame-4.png" alt="" />
                                {data.location}
                            </div>
                            <div>
                                <img src="https://i.ibb.co/cvqFrgj/Frame.png" alt="" />
                                {data.salary}</div>
                        </div>
                    </div>
                    <div>
                        <button className="rounded-lg p-2.5 text-white bg-indigo-500  hover:bg-violet-600">View Details</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
};

export default AppliedJobs;