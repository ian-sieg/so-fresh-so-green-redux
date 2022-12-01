import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Todo } from './features/todos/Todo'
import './App.css';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import PlantShop from './pages/PlantShop';
import Newsfeed from './pages/Newsfeed';
import About from './pages/About';
import Post from './pages/Post'
import TestChat from './pages/TestChat/TestChat'
import UserProfile from './pages/UserProfile'
import UpdateProfile from './pages/UpdateProfile'; 

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Router>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/success"
          element={<Success />}
        />
        <Route
          path="/orderHistory"
          element={<OrderHistory />}
        />
        <Route
          path="/products/:id"
          element={<Detail />}
        />
        <Route
          path="/plant-shop"
          element={<PlantShop />}
        />
        <Route
          path="/update-profile/:id"
          element={<UpdateProfile />}
        />
        <Route
          path="/profile/:id"
          element={<UserProfile />}
        />
        <Route
          path="/newsfeed"
          element={<Newsfeed />}
        />
        <Route
          path="/post/:postId"
          element={<Post />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/chat"
          element={<TestChat />}
        />
        <Route
          path="*"
          element={<NoMatch />}
        />
      </Router>
    </Provider>
  );
}

export default App;
