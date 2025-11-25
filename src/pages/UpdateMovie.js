import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    releaseYear: '',
    director: '',
    cast: '',
    rating: '',
    duration: '',
    plotSummary: '',
    posterUrl: '',
    language: '',
    country: ''
  });

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(data => setFormData(data));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const movieData = {
        ...formData,
        releaseYear: parseInt(formData.releaseYear),
        rating: parseFloat(formData.rating),
        duration: parseInt(formData.duration)
      };

      const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieData)
      });

      if (response.ok) {
        toast.success('Movie updated successfully!');
        navigate('/my-collection');
      }
    } catch (error) {
      toast.error('Error updating movie');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-6">Update Movie</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Genre</label>
            <input type="text" name="genre" value={formData.genre} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Release Year</label>
            <input type="number" name="releaseYear" value={formData.releaseYear} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Director</label>
            <input type="text" name="director" value={formData.director} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Cast</label>
            <input type="text" name="cast" value={formData.cast} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Rating (0-10)</label>
            <input type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Duration (minutes)</label>
            <input type="number" name="duration" value={formData.duration} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Plot Summary</label>
            <textarea name="plotSummary" value={formData.plotSummary} onChange={handleChange} className="w-full p-2 border rounded" rows="4" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Poster URL</label>
            <input type="url" name="posterUrl" value={formData.posterUrl} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Language</label>
            <input type="text" name="language" value={formData.language} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Country</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;