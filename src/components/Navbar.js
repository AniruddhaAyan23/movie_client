import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav style={{ 
      background: 'linear-gradient(to right, #2563eb, #9333ea)',
      padding: '1rem',
      color: 'white',
      position: 'relative',
      zIndex: 9999
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="/" style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          color: 'white',
          textDecoration: 'none'
        }}>
          🎬 MovieMaster Pro
        </a>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
            Home
          </a>
          
          <a href="/movies" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
            All Movies
          </a>
          
          {user && (
            <>
              <a href="/my-collection" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                My Collection
              </a>
              
              <a href="/movies/add" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                Add Movie
              </a>
            </>
          )}
          
          {user ? (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {user.photoURL && (
                <img src={user.photoURL} alt="Profile" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '2px solid white' }} />
              )}
              <span style={{ fontWeight: '500' }}>{user.displayName || user.email}</span>
              <button 
                onClick={handleLogout}
                style={{
                  background: '#ef4444',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href="/login"
                style={{
                  background: 'white',
                  color: '#2563eb',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'inline-block'
                }}
              >
                Login
              </a>
              
              <a 
                href="/register"
                style={{
                  background: '#fbbf24',
                  color: '#1e3a8a',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'inline-block'
                }}
              >
                Register
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;