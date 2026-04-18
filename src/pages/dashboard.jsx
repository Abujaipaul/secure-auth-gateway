import { useContext } from 'react';
import { AuthContext } from '../context/authcontext';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const assetData = [
  { day: 'Mar 27', price: 1260.00 },
  { day: 'Mar 30', price: 1260.00 },
  { day: 'Mar 31', price: 1260.00 },
  { day: 'Apr 01', price: 1260.00 },
  { day: 'Apr 02', price: 1260.00 },
  { day: 'Apr 07', price: 1265.00 },
  { day: 'Apr 08', price: 1265.00 },
  { day: 'Apr 09', price: 1279.00 },
  { day: 'Apr 10', price: 1279.00 },
  { day: 'Apr 13', price: 1279.00 },
  { day: 'Apr 14', price: 1279.00 },
  { day: 'Apr 15', price: 1406.90 },
  { day: 'Apr 16', price: 1547.50 },
  { day: 'Apr 17', price: 1649.00 }
];

export default function Dashboard() {
  // just manually tune into here and grab the 'logout' function
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
        
        {/*recharts coding */}
        <div style={{ height: '300px', width: '100%', backgroundColor: '#1e293b', marginTop: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #475569' }}>

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={assetData}>
             <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity='50%'/>
                 <stop offset="95%" stopColor="#10b981" stopOpacity='0%'/>
                </linearGradient>
             </defs>
              
              <XAxis dataKey='day' />
              <YAxis type='number' domain={['dataMin', 'dataMax']} />

              <CartesianGrid strokeDasharray="3 3" stroke="green" vertical={false}  />
             
             <Tooltip 
               contentStyle={{ 
               backgroundColor: '#1e293b', 
               borderColor: '#334155', 
               borderRadius: '8px',
               color: 'white' 
               }} 
               itemStyle={{ color: '#10b981', fontWeight: 'bold' }} 
               labelStyle={{ color: '#cbd5e1', fontWeight: 'bold', marginBottom: '5px' }}
              />
             <Area 
              type='monotone'
              dataKey='price'
             stroke='#10b981'
             strokeWidth='3'
              fill='url(#colorPrice)' 
              />
            
            </AreaChart>
          </ResponsiveContainer>

        </div>
      </div>

    </div>
  );
}