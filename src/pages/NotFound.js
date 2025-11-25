import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">The page you are looking for doesn't exist.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;