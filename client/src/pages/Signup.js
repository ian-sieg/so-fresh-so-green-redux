import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
              <h1>
                Signup
              </h1>

              <form onSubmit={handleFormSubmit}>
                <div>
                  <label>
                    Username
                  </label>
                  <input
                    placeholder="Username"
                    name="username"
                    type="username"
                    id="username"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label class="block mt-4 text-sm">
                    Email
                  </label>
                  <input
                    placeholder="youremail@test.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>
                    Password
                  </label>
                  <input
                    placeholder="******"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  id="submit-button"
                  href="#">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
