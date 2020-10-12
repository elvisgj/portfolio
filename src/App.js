import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import usersSearch from './git_hub_app/usersSearch'
import TodoApp from './to_do_app/TodoApp'
import Nav from './Nav'
import userProfile from './git_hub_app/userProfile'
import Repo from './git_hub_app/Repo';
import Form from './form_valid/FormValid'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/github' exact component={usersSearch} />
          <Route path='/todo' component={TodoApp} />
          <Route path='/github/users/:usename' exact component={userProfile} />
          <Route path='/github/users/:user/repos' component={Repo} />
          <Route path='/form' component={Form} />
        </div>
      </div>
    </Router>
  );
}

export default App;
