import React from 'react';
import './search-box.styles.css';

//incase we don't need internal state nor lifecycle hooks, just use functional components
//destructuring our props to obtain the placeholder and handleChange.
export const SearchBox = ({placeholder, handleChange}) => (
    <input  
     className="search"
     type="search" 
     placeholder={placeholder}
     onChange={handleChange}
     />
);