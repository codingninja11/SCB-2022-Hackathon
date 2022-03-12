import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '1.5rem',
        background: '#0F1624',
        color: '#fff',
        height: '10vh',
        textDecoration: 'none',
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width="70"
          height="70"
          style={{ borderRadius: '50%' }}
        />
      </Link>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '3rem' }}>
          <Link to="/">Home</Link>
        </div>
        <div>
        <div style={{ marginRight: '3rem' }}>
          <Link to="/about">About</Link>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '3rem' }}>
          <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;