
import { Link } from 'react-router';
import banner from '../image/banner.jpg';

export default function HeroBanner() {
  return (
    <>      <div className="relative h-full w-full min-h-[350px] overflow-hidden ">
        <img
          src={banner}
          alt="Movie Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
          {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

      {/* Hero Content */}
      <div className="absolute z-10 max-w-[1580px] mx-auto h-full px-6 md:px-12 flex items-center">
        <div className="max-w-2xl space-y-5">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Explore and discover your favorite movies from around the world.
          </h1>

          <p className="mt-5 text-gray-200 text-base md:text-lg leading-relaxed">
            Discover amazing stories, explore different genres, and find your next favorite movie.
          </p>

          <Link to ='/moviePage' className="mt-7 rounded-lg bg-amber-400 hover:bg-amber-500 px-6 py-3 font-semibold text-black transition duration-300">
            Explore Movies
          </Link>
        </div>
      </div>
      </div>
      
      </>

  );
}
