/* eslint-disable jsx-a11y/anchor-is-valid */
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    axios
      .post('http://localhost:5000/login', user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('userName', res.data.name);
        alert('Login Successful');
        window.location.href = '/';
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert('Invalid Credentials');
        }
      });
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="col-left">
          <div className="login-text">
            <h2>Logo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              eros dapibus, ultricies tellus vitae, consectetur tortor. Etiam
              rutrum placerat
            </p>
            <a className="btn" href="">
              Read More
            </a>
          </div>
        </div>
        <div className="col-right">
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <p>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </p>
              <p>
                <input
                  className="btn"
                  type="submit"
                  value="Login"
                  onClick={handleClick}
                />
              </p>
              <p>
                <a href="">Forget password?</a>
                <a href="">Create an account.</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;