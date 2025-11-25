import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">All Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map(movie => (
          <div key={movie._id} className="border rounded p-4 shadow hover:shadow-lg">
            <img src={movie.posterUrl} alt={movie.title} className="w-full h-64 object-cover rounded mb-4" />
            <h3 className="font-bold text-lg">{movie.title}</h3>
            <p className="text-gray-600">{movie.genre}</p>
            <p className="text-gray-600">Rating: {movie.rating}</p>
            <p className="text-gray-600">Year: {movie.releaseYear}</p>
            <Link to={`/movies/${movie._id}`} className="bg-blue-600 text-white px-4 py-2 rounded mt-4 inline-block hover:bg-blue-700">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;