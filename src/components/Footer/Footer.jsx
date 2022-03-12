import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div>
        Other Links
        <div>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
          </ul>
        </div>
      </div>
      <div>
        Social Links
        <div>
          <ul>
            <li>
              <Link to="#">Insta</Link>
            </li>
            <li>
              <Link to="#">Facebook</Link>
            </li>
            <li>
              <Link to="#">Youtube</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>Contact</div>
      <div>Office</div>
    </div>
  );
};

export default Footer;
