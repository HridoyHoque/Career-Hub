import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Statistics from './components/Statistics/Statistics';
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
        loader: () => fetch("/FeaturedJobs.json")
      },
      
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
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
