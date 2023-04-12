import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import Jobdetails from './components/JobDetails/JobDetails';
import Statisticks from './components/Statisticks/Statisticks';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("/FeaturedJobs.json")
      },
      {
       path: "/Jobdetails/:id",
       element: <Jobdetails></Jobdetails>,
       loader: ({params}) => fetch(`/Jobdetails/${params.id}`)
      },
      {
       path: "/Statistics",
       element: <Statisticks></Statisticks>,
      },
      {
       path: '/appliedJobs',
       element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blogs",
        element: <Blog></Blog>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />,
)
