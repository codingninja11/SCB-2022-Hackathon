import './Register.css';
const Register = () => {
  return <div class="wrapper">
  <div class="container">
    <div class="col-left">
      <div class="Register-text">
        <h2>Logo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros dapibus, ultricies tellus vitae, consectetur tortor. Etiam rutrum placerat
        </p>
        <a class="btn" href="">Read More</a>
      </div>
    </div>
    <div class="col-right">
      <div class="Register-form">
        <h2>Register</h2>
        <form>
        <p>
            <input type="text" placeholder="Email" required />
          </p>
          <p>
            <input type="text" placeholder="Username" required />
          </p>
          <p>
            <input type="password" placeholder="Password" required />
          </p>
          <p>
            <input class="btn" type="submit" value="Sing Up" />
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
};

export default Register;
