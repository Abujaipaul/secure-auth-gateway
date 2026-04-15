import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authcontext';

export default function Login() {
  // 1. THE RAW WAY: We manually tune into the AuthContext radio station to grab the 'login' function
  const { login } = useContext(AuthContext);
  
  // 2. React Router's teleportation tool
  const navigate = useNavigate();

  function handleLogin(event) {
    // Stop the form from doing its default behavior (refreshing the whole page)
    event.preventDefault(); 
    
    // 1. Change the global security state to true!
    login(); 
    
    // 2. Teleport the user to the Dashboard!
    navigate('/dashboard'); 
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#111827' }}>
      
      <form onSubmit={handleLogin} style={{ backgroundColor: '#1f2937', padding: '40px', borderRadius: '10px', width: '350px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Admin Gateway</h2>
        
        <input 
          type="email" 
          placeholder="admin@finance.com" 
          required 
          style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: 'none', boxSizing: 'border-box' }}
        />
        
        <input 
          type="password" 
          placeholder="••••••••" 
          required 
          style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: 'none', boxSizing: 'border-box' }}
        />
        
        <button 
          type="submit" 
          style={{ width: '100%', padding: '12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Unlock Vault
        </button>
      </form>

    </div>
  );
}