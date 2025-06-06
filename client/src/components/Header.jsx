import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '1rem',
      }}>
        {/* DFNN Text Logo on left */}
        <div
          onClick={() => navigate('/')}
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#333',
            flex: '1',
            cursor: 'pointer',
          }}
        >
          DFNN
        </div>

        {/* Project Name in center */}
        <div style={{
          fontWeight: 'bold',
          fontSize: '1.2rem',
          textAlign: 'center',
          flex: '2',
        }}>
          Satellite Tracking System
        </div>

        {/* Empty div for balance */}
        <div style={{ flex: '1' }} />
      </header>

      <div style={{ margin: '1rem 2rem 0 0' }}>
        <Marquee speed={100} style={{
          padding: '1rem',
          color: 'white',
          backgroundColor: 'black',
        }}>
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
    </>
  );
};
