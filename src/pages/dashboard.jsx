import { useContext } from 'react';
import { AuthContext } from '../context/authcontext';

export default function Dashboard() {
  // We manually tune into the radio station again, but this time we just grab the 'logout' function
  const { logout } = useContext(AuthContext);

  return (
    <div style={{ padding: '50px', backgroundColor: '#0f172a', height: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
        <h2>🏦 Secure Financial Vault</h2>
        
        <button 
          onClick={logout} 
          style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Lock Vault & Exit
        </button>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Welcome, Admin.</h3>
        <p style={{ color: '#94a3b8' }}>
          This page is highly restricted. If you try to copy the URL (localhost:5173/dashboard), open an Incognito window, and paste it, the Bouncer will kick you out because your Global Context resets.
        </p>
        
        {/* We will eventually put your Recharts charts in here! */}
        <div style={{ height: '300px', width: '100%', backgroundColor: '#1e293b', marginTop: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #475569' }}>
          <p style={{ color: '#64748b' }}>[ Financial Data Visualizations Will Go Here ]</p>
        </div>
      </div>

    </div>
  );
}