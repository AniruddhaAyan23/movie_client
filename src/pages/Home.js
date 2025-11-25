import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies/top-rated')
      .then(res => res.json())
      .then(data => setTopRatedMovies(data || []))
      .catch(err => console.error('Error fetching top rated:', err));

    fetch('http://localhost:3000/movies/recent')
      .then(res => res.json())
      .then(data => setRecentMovies(data || []))
      .catch(err => console.error('Error fetching recent:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-24 px-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Welcome to MovieMaster Pro</h1>
          <p className="text-2xl mb-8">Your ultimate movie management platform</p>
          <a href="/movies" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block no-underline">
            Explore Movies 🍿
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12" style={{ position: 'relative', zIndex: 1 }}>
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">⭐ Top Rated Movies</h2>
            <a href="/movies" className="text-purple-600 hover:text-purple-800 font-semibold no-underline">View All →</a>
          </div>
          {topRatedMovies.length === 0 ? (
            <p className="text-center text-gray-500 py-12 bg-white rounded-lg shadow">No movies yet. Be the first to add one!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {topRatedMovies.map(movie => (
                <div key={movie._id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
                  <img src={movie.posterUrl} alt={movie.title} className="w-full h-72 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 truncate">{movie.title}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                        ⭐ {movie.rating}
                      </span>
                      <span className="text-gray-600 text-sm">{movie.releaseYear}</span>
                    </div>
                    <a href={`/movies/${movie._id}`} className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium no-underline">
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">🎬 Recently Added</h2>
            <a href="/movies" className="text-purple-600 hover:text-purple-800 font-semibold no-underline">View All →</a>
          </div>
          {recentMovies.length === 0 ? (
            <p className="text-center text-gray-500 py-12 bg-white rounded-lg shadow">No recent movies yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {recentMovies.map(movie => (
                <a key={movie._id} href={`/movies/${movie._id}`} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden block no-underline">
                  <img src={movie.posterUrl} alt={movie.title} className="w-full h-64 object-cover" />
                  <div className="p-3">
                    <h3 className="font-bold text-sm truncate text-gray-800">{movie.title}</h3>
                    <p className="text-xs text-gray-600">{movie.releaseYear}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold mb-6">About MovieMaster Pro</h2>
          <p className="text-xl leading-relaxed">
            MovieMaster Pro is your comprehensive movie management system where you can browse, manage, and organize your favorite movies with advanced filtering and personal collections. 
            Start building your ultimate movie library today!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;