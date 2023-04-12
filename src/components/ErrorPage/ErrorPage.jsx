import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div>
            <img src="https://i.ibb.co/WDX9H1s/Vector.png" alt="" />
             <div>
             <h1 className='text-center font-bold text-4xl'>404 - not Found</h1>
              <h5 className='text-center mt-2 font-2xl'> Page Not Found. We apologize for the inconvenience. If you need further assistance, please contact our support team."</h5>
            <Link to={"/"}className="rounded-lg p-2.5 text-white bg-indigo-500  hover:bg-violet-600">Click Back to Home Page</Link>
             </div>
        </div>
    );
};

export default ErrorPage;