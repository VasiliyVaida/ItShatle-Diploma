import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Redirect, useHistory } from 'react-router-dom';
import Posts from './components/pages/Posts';
import Albums from './components/pages/Albums';
import Todos from './components/pages/Todos';
import Users from './components/pages/Users';
import { IUser, usersContext } from './context/index';
import axios from 'axios';
import { USERS_ENDPOINT } from './constatnts/endpoints';
import AlbumPage from './components/pages/AlbumPage';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get<IUser[]>(USERS_ENDPOINT);
    // console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
    // console.log(users);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <usersContext.Provider value={{ users }}>
          <Switch>
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/albums/:urlPageNum" component={AlbumPage} />
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/users" component={Users} />
            <Redirect to="/posts" />
          </Switch>
        </usersContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
