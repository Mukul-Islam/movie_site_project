import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const [click,setClick] = useState('');
    function heroChanged(){

    }
    return (
        <div>
            <h1>This is Navbar section</h1>
           
            <Link to='/about'>
             <button 
            className='border p-1 bg-amber-100 cursor-pointer'> 
            clicked to hero section</button>
            </Link>
        </div>
    );
};

export default Navbar;