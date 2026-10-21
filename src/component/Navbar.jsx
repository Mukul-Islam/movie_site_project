
import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router";

const Navbar = () => {
    // const [click,setClick] = useState('');
    // function heroChanged(){

    // }
    return (
        <div className=''>

            <div className='shrink-0 bg-amber-200 '>
                <div className=' p-3 max-w-[1580px] mx-auto flex justify-between items-center'>
                <div className='flex gap-2 text-2xl font-bold  items-center'>
                    <SiThemoviedatabase />
                    MovieBD
                </div>
               <div className='flex justify-center items-center gap-4 font-semibold'>
                <h1>Home</h1>
                    <h1>Movies</h1>
               </div>
                <div className='flex justify-between items-center gap-3'>
                    
                    <Link to='/moviePage' className='bg-green-400 p-3 rounded-2xl cursor-pointer '>Browser Movies</Link>
                </div>
            </div>
            </div>
          
        </div>
    );
};

export default Navbar;