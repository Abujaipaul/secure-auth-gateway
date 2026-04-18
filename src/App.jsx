import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/authcontext';

import Login from './pages/login';
import Dashboard from './pages/dashboard';

//  This component protects the Vault
function ProtectedRoute({ children }) {
  // just manually tune into the station to check security clearance
  const { isAuthenticated } = useContext(AuthContext); 

  if (!isAuthenticated) {
    console.log("Access Denied: Kicking user back to Login.");
    return <Navigate to="/" />;
  }

  // If they are logged in, let them inside
  return children;
}

export default function App() {
  return (
    // wrap the whole app in the Provider so every page hears the broadcast///api context
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Route */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
           {/* incase a page that was not created...get added to the url */}
          <Route path="*" element={
            <div style={{ padding: '50px', textAlign: 'center', color: 'black' }}>
              <h2> 404: Vault Not Found</h2>
              <p>You are trying to access a secure area that doesn't exist.</p>
              <Link to="/">Go back to Login</Link>
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}