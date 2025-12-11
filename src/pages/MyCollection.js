import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const MyCollection = () => {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://movie-server-delta-three.vercel.app/movies/user/${user.email}`)
        .then(res => res.json())
        .then(data => setMovies(data));
    }
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await fetch(`https://movie-server-delta-three.vercel.app/movies/${id}`, {
          method: 'DELETE'
        });
        toast.success('Movie deleted successfully!');
        setMovies(movies.filter(movie => movie._id !== id));
      } catch (error) {
        toast.error('Error deleting movie');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">My Collection</h1>
      {movies.length === 0 ? (
        <p className="text-center text-gray-600">You haven't added any movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(movie => (
            <div key={movie._id} className="border rounded p-4 shadow hover:shadow-lg">
              <img src={movie.posterUrl} alt={movie.title} className="w-full h-64 object-cover rounded mb-4" />
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <p className="text-gray-600">{movie.genre}</p>
              <p className="text-gray-600">Rating: {movie.rating}</p>
              <div className="flex gap-2 mt-4">
                <Link to={`/movies/${movie._id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Details
                </Link>
                <Link to={`/movies/update/${movie._id}`} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Edit
                </Link>
                <button onClick={() => handleDelete(movie._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollection;