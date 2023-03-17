import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setUserDetails } from "../redux/userSlice"
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch=useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://dailomaa.com/api/auth/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('accessToken', response.data.access_token);
        dispatch(setUserDetails(response.data.user))
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container my-5">
  <div className="card p-4">
    <div className="card-body">
      <h1 className="card-title text-center">Welcome to Login Page</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default Login;
