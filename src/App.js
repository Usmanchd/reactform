import React, { useState, useEffect } from 'react';
import logo from './5.png';
import './App.css';
import Form from './Form';
import Table from './Table';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Login from './Login';

function App() {
  const initValue = () => {
    const LC = localStorage.getItem('users');
    return LC ? JSON.parse(LC) : [];
  };

  const [users, setusers] = useState(initValue);

  useEffect(() => localStorage.setItem('users', JSON.stringify(users)), [
    users
  ]);

  const addUser = user => {
    //generation a unique record num for every user!
    let length = users.length - 1;
    let newRecordNum = users.length < 1 ? 0 + 1 : users[length].recordNum + 1;

    let newbobj = { ...user, recordNum: newRecordNum };

    let newarr = [...users, newbobj];

    setusers(newarr);

    console.log(newarr);
  };

  const removeUser = user => {
    let newarr = users.filter(u => u !== user);
    setusers(newarr);
    // setrecordNum(0);
  };

  const updateUser = user => {
    let newarr = [...users];

    const index = newarr.findIndex(u => u.recordNum === user.recordNum);

    newarr[index] = user;

    setusers(newarr);

    setMode('Submit');
  };

  const [userToUpdate, setuserToUpdate] = useState();

  const updateUserData = user => {
    setuserToUpdate(user);
    setMode('Edit');
  };

  //Conditional Rendering
  const [Mode, setMode] = useState('Submit');

  return (
    <div>
      <img className="bg-image" alt="sparkling" src={logo}></img>
      <div className="content">
        <Header />
        <Switch>
          <Route path="/table">
            <ScrollToTop>
              <Table
                users={users}
                updateUserData={updateUserData}
                removeUser={removeUser}
              />
            </ScrollToTop>
          </Route>
          <Route path="/form/edituser/:id">
            <ScrollToTop>
              <Form
                updateUser={updateUser}
                userToUpdate={userToUpdate}
                Mode={Mode}
              />
            </ScrollToTop>
          </Route>
          <Route path="/form/adduser">
            <ScrollToTop>
              <Form addUser={addUser} Mode={Mode} />
            </ScrollToTop>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
