import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AllMovies from './pages/AllMovies';
import AddMovie from './pages/AddMovie';
import MyCollection from './pages/MyCollection';
import MovieDetails from './pages/MovieDetails';
import UpdateMovie from './pages/UpdateMovie';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/add" element={<PrivateRoute><AddMovie /></PrivateRoute>} />
          <Route path="/my-collection" element={<PrivateRoute><MyCollection /></PrivateRoute>} />
          <Route path="/movies/update/:id" element={<PrivateRoute><UpdateMovie /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;