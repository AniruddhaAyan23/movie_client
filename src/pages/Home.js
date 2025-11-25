import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies/top-rated')
      .then(res => res.json())
      .then(data => setTopRatedMovies(data));

    fetch('http://localhost:3000/movies/recent')
      .then(res => res.json())
      .then(data => setRecentMovies(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <section className="bg-blue-600 text-white p-20 rounded mb-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MovieMaster Pro</h1>
        <p className="text-xl">Your ultimate movie management platform</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Top Rated Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {topRatedMovies.map(movie => (
            <div key={movie._id} className="border rounded p-4 shadow hover:shadow-lg">
              <img src={movie.posterUrl} alt={movie.title} className="w-full h-64 object-cover rounded mb-2" />
              <h3 className="font-bold">{movie.title}</h3>
              <p>Rating: {movie.rating}</p>
              <Link to={`/movies/${movie._id}`} className="text-blue-600 hover:underline">Details</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Recently Added</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {recentMovies.map(movie => (
            <div key={movie._id} className="border rounded p-4 shadow hover:shadow-lg">
              <img src={movie.posterUrl} alt={movie.title} className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="font-bold text-sm">{movie.title}</h3>
              <Link to={`/movies/${movie._id}`} className="text-blue-600 hover:underline text-sm">Details</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded mb-8">
        <h2 className="text-3xl font-bold mb-4">About MovieMaster Pro</h2>
        <p className="text-lg">MovieMaster Pro is your comprehensive movie management system where you can browse, manage, and organize your favorite movies with advanced filtering and personal collections.</p>
      </section>
    </div>
  );
};

export default Home;