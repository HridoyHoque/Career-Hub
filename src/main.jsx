import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import HomePage from './components/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("JobCategory.json")
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />,
)
