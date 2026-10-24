
export default function ShowCard({ show }) {
  // Release year বের করা
  const releaseYear = show.premiered
    ? show.premiered.slice(0, 4)
    : "Year unknown";

  // Rating না থাকলে fallback
  const rating = show.rating?.average ?? "N/A";

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Poster */}
      <div className="bg-gray-200">
        <img
          src={
            show.image?.medium ||
            "https://placehold.co/300x450?text=No+Poster"
          }
          alt={show.name}
          className="w-full h-72 object-cover"
          loading="lazy"
        />
      </div>

      {/* Show Information */}
      <div className="p-4">
        <h2 className="text-lg font-bold line-clamp-1">
          {show.name}
        </h2>

        <div className="flex justify-between items-center gap-2 mt-3 text-sm text-gray-600">
          <span>⭐ {rating}</span>
          <span>📅 {releaseYear}</span>
        </div>

        {/* See Details */}
        <a
          href={show.url}
          target="_blank"
          rel="noreferrer"
          className="block text-center mt-4 bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 rounded-lg"
        >
          See Details
        </a>
      </div>
    </div>
  );
}
