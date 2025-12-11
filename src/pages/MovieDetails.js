import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://movie-server-delta-three.vercel.app/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await fetch(`https://movie-server-delta-three.vercel.app/movies/${id}`, {
          method: 'DELETE'
        });
        toast.success('Movie deleted successfully!');
        navigate('/movies');
      } catch (error) {
        toast.error('Error deleting movie');
      }
    }
  };

  if (!movie) return <div className="text-center p-8">Loading...</div>;

  const isOwner = user && user.email === movie.addedBy;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded shadow-lg overflow-hidden">
        <img src={movie.posterUrl} alt={movie.title} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Rating:</strong> {movie.rating}/10</p>
            <p><strong>Duration:</strong> {movie.duration} minutes</p>
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Country:</strong> {movie.country}</p>
          </div>
          <p><strong>Cast:</strong> {movie.cast}</p>
          <p className="mt-4"><strong>Plot Summary:</strong></p>
          <p className="text-gray-700">{movie.plotSummary}</p>
          
          {isOwner && (
            <div className="mt-6 flex gap-4">
              <Link to={`/movies/update/${movie._id}`} className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
                Edit
              </Link>
              <button onClick={handleDelete} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;