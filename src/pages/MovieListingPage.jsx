
import { useEffect, useState } from "react";
import ShowCard from "../component/ShowCard";

export default function MovieListingPage() {
  // API থেকে পাওয়া সব show রাখবে
  const [shows, setShows] = useState([]);

  // Search input-এর লেখা রাখবে
  const [searchQuery, setSearchQuery] = useState("");

  // API data load হচ্ছে কি না
  const [loading, setLoading] = useState(true);

  // API থেকে shows আনা
  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Failed to fetch shows");
        }

        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  // Title অনুযায়ী shows filter করা
  const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-[1580px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Explore TV Shows
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by show title..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="w-full max-w-xl border border-gray-300 rounded-lg px-4 py-3 mb-8 outline-none focus:ring-2 focus:ring-amber-400"
      />

      {loading ? (
        <p>Loading shows...</p>
      ) : filteredShows.length === 0 ? (
        <p>No shows found. Try another title.</p>
      ) : (
        /* Responsive Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredShows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      )}

      <p className="text-sm text-gray-500 mt-6">
        Show data provided by{" "}
        <a
          href="https://www.tvmaze.com"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          TVmaze
        </a>
      </p>
    </div>
  );
}
