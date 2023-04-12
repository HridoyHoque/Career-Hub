import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold text-center py-4 mb-2'>Blog Page</h3>
            <h3 className='text-3xl font-bold text-center py-4 mb-2'>Questions & Answer</h3>
            <hr />
            <hr />
            <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-3 lg:px-16'>
                <div className='border-2 p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is ContextApi ?</h3>
                    <p>Answer: Context API is a feature in React that allows for sharing data and state across multiple components in a React application without passing data explicitly through props. It simplifies global state management in large or complex applications by providing a way to share data across components at different levels of the component tree.</p>
                </div>
                <div className='border-2 p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is custom hook in react.js?</h3>
                    <p>Answer: A custom hook in React is a reusable JavaScript function that encapsulates stateful logic and can be used across multiple components. Custom hooks allow for extracting common logic, such as handling state, side effects, and data fetching, into separate functions, promoting code reusability and maintainability in React applications.</p>
                </div>
                <div className='border-2 p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is useRef in react.js?</h3>
                    <p>Answer: useRef is a built-in hook in React that allows for creating a mutable reference to a DOM element or a value that persists across renders. It can be used to directly access and manipulate DOM elements, manage focus, or store values that do not trigger re-renders, making it useful for certain optimizations and interactions in React components.</p>
                </div>
                <div className='border-2 p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is useMemo in react.js?</h3>
                    <p>Answer: "UseMemo" is a built-in hook in React that allows for memoizing the result of a computation and caching it until certain dependencies change. It can optimize performance by preventing unnecessary re-computations in functional components, especially for expensive calculations or operations, by only recomputing when necessary, based on the provided dependencies.</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;