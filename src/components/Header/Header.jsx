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
        <span><h3><i>DEMOS</i></h3></span>
      </Link>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '3rem' }}>
          <Link to="/">Home</Link>
        </div>

        <div style={{ marginRight: '3rem' }}>
          <Link to="/about">About</Link>
        </div>

        <div
          style={{
            marginRight: '3rem',
          }}
        >
          <Link to="/login">Login</Link>
        </div>
        <div
          style={{
            marginRight: '3rem',
          }}
        >
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
