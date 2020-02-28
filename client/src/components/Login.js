import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/login', login)
      .then(res => {
        console.log('res', res)
      })
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
        <button className="start">Start</button>
      </form>
    </div>
  );
};

export default Login;
