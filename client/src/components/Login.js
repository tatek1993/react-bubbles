import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();

  const handleChange = e => {
    e.preventDefault();
    setLogin({...login, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', login)
      .then(res => {
        console.log('res', res)
        window.localStorage.setItem('token', res.data.payload)
        history.push('/bubbles');
      })
      .catch(err => console.log('there was an error', err.response))
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form className='forms-style' onSubmit={handleSubmit}>
        <label htmlFor='username'>
          <input
              type="text"
              name="username"
              label="username"
              value={login.username}
              onChange={handleChange}
              className="input"
          />     
        </label>
        <label htmlFor='password'>
          <input
            type="text"
            name="password"
            label="password"
            value={login.password}
            onChange={handleChange}
            className="input"
          />     
        </label>
        <button className="start">Login</button>
      </form>
    </div>
  );
};

export default Login;
