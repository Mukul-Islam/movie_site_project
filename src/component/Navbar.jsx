
import { SiThemoviedatabase } from "react-icons/si";
import { Link, useLocation } from "react-router";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
   
    const location = useLocation();
    const isMoviePage = location.pathname === "/moviePage";
    return (
        <div className=''>

            <div className='shrink-0 bg-amber-200 '>
                <div className=' p-3 max-w-[1580px] mx-auto flex justify-between items-center'>
                <div className='flex gap-2 text-2xl font-bold  items-center'>
                    <SiThemoviedatabase />
                    MovieBD
                </div>
               <div className='flex justify-center items-center gap-4 font-semibold'>
                <Link to={'/'}><h1>Home</h1></Link>
                    <h1>Movies</h1>
               </div>
                <div className='flex justify-between items-center gap-3'>
                    
                    
{isMoviePage ? (
  /* Search form: input ও submit button */
  <form
    onSubmit={(e) => {
      e.preventDefault();
      // পরে এখানে movie search functionality যোগ করবে
    }}
    className="flex items-center gap-2 bg-white rounded-xl border border-gray-300 p-1"
  >
    {/* Search input */}
    <input
      type="text"
      placeholder="Search movies..."
      className="outline-none bg-transparent sm:w-48 px-2 py-2 text-gray-800"
    />

    {/* Submit button */}
    <button
      type="submit"
      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
    >
      <IoMdSearch size={20} />
      <span>Search</span>
    </button>
  </form>
) : (
  <Link
    to="/moviePage"
    className="bg-green-400 p-3 rounded-2xl cursor-pointer inline-block"
  >
    Browse Movies
  </Link>
)}

                </div>
            </div>
            </div>
          
        </div>
    );
};

export default Navbar;