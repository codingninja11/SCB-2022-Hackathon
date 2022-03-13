/* eslint-disable jsx-a11y/anchor-is-valid */
import './Register.css';
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    axios
      .post('https://demos-edu.herokuapp.com/register', user)
      .then((res) => {
        console.log(res.data);
        alert('Register Successful');
        window.location.href = '/login';
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          alert('Invalid Credentials');
        }
      });
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="col-left">
          <div className="Register-text">
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
          <div className="Register-form">
            <h2>Register</h2>
            <form>
              <p>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="text"
                  placeholder="Username"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <p>
                <input
                  className="btn"
                  type="submit"
                  value="Register"
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

export default Register;