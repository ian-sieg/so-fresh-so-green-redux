import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      console.log(token);
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
              </div>
              <h1>
                Login to Your Account
              </h1>
              <form onSubmit={handleFormSubmit}>
                <div>
                  <label class="block text-sm">
                    Email
                  </label>
                  <input type="email"
                    name="email"
                    id="email-login"
                    placeholder="youremail@test.com"
                    onChange={handleChange} />
                </div>
                <div>
                  <label class="block mt-4 text-sm">
                    Password
                  </label>
                  <input
                    placeholder="******"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                {error ? (
                  <div>
                    <p>The provided credentials are incorrect</p>
                  </div>
                ) : null}
                <button
                  type="submit"
                  id="submit-button"
                  href="#">
                  Log in
                </button>
                <hr/>
                <div>
                </div>
                <div>
                  <p>
                    Don't have an account?
                  </p>
                  <p><Link to="/signup"> <a href="/signup"
                    >Register as New User</a></Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
