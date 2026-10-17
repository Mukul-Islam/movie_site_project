import { Link } from 'react-router';

const Hero = () => {
    return (
        <div>
            <h1>This is hero section</h1>
            <Link to='/'>
             <button 
            className='border p-1 bg-amber-100 cursor-pointer'> 
            clicked to Navbar</button>
            </Link>
        </div>
    );
};

export default Hero;