import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todolist from './Components/Todolist';
import User from './Components/User';
import WithLoader from './Components/WithLoader';
import ClickCounterPage from './Components/HOC/ClickCounterPage';
import User2 from './Components/User2';
import WithLoader2 from './Components/HOC/WithLoader2';
import Login from './Components/HOC/login'; // Ensure 'Login' is correctly capitalized
import WithAuth from './Components/HOC/WithAuth';
import FirstForm from './Components/React_Hook_Form/FirstForm'

const UserWithLoader = WithLoader(User);
const UserWithLoader2 = WithLoader2(User2);
const User2WithAuth = WithAuth(User2)

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/User" element={<UserWithLoader />} />
          <Route path="/login" element={<Login />} /> {/* Fix typo here */}
          <Route path="/User2" element={<UserWithLoader2 />} />
          <Route path="/clickcounter" element={<ClickCounterPage />} />
          <Route path="/firstform" element={<FirstForm />} />
          {/* Remove the unused route for WithAuth if not needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;




