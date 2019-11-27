import React, { useState, useEffect } from 'react';
import logo from './5.png';
import './App.css';
import Form from './Form';
import Table from './Table';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

function App() {
  const WHATSAPP = 'Whatsapp';
  const FACEBOOK = 'FaceBook';
  const INSTAGRAM = 'Instagram';
  
  const [firstname, setfirstName] = useState('');
  const handleId = event => setfirstName(event.target.value);

  const [lastName, setlastName] = useState('');
  const handleCustomersName = event => setlastName(event.target.value);

  const [gender, setGen] = useState('');
  const handleGender = event => setGen(event.target.value);

  const [city, setCity] = useState('Lahore');
  const handleCity = event => setCity(event.target.value);

  const [comments, setcomments] = useState('');
  const handleComments = event => setcomments(event.target.value);

  const [checkBox, setcheckBox] = useState({
    [WHATSAPP]: false,
    [FACEBOOK]: false,
    [INSTAGRAM]: false
  });
  const handleCheckBox = event => {
    let id = event.target.id;
    let checked = event.target.checked;
    let dup = { ...checkBox, [id]: checked };
    setcheckBox(dup);
  };

  const [recordNum, setrecordNum] = useState();

  const initVal = () => {
    const LC = localStorage.getItem('customers');
    return LC ? JSON.parse(LC) : [];
  };

  const [customers, setcustomers] = useState(initVal);
  
  useEffect(
    () => localStorage.setItem('customers', JSON.stringify(customers)),
    [customers]
  );
  //to redirect back to form.
  const [isNull, setisNull] = useState(false);

  const handleSubmit = () => {
    if (firstname === '' || lastName === '' || gender === '') {
      setisNull(true);
      setTimeout(() => {
        setisNull(false);
      }, 1000);
      alert('Enter data to submit');
    } else {
      let newarr = [...customers];

      let length = customers.length - 1;
      let newRecordNum = customers.length < 1 ? 0 : customers[length].recordNum;

      let newbobj = {
        recordNum: newRecordNum + 1,
        firstname,
        lastName,
        gender,
        city,
        comments,
        checkBox
      };

      newarr.push(newbobj);

      setisNull(false);

      setcustomers(newarr);
      setfirstName('');
      setlastName('');
      setGen('');
      setCity('lahore');
      setrecordNum();
      setcomments('');
      setcheckBox({
        WHATSAPP: false,
        FACEBOOK: false,
        INSTAGRAM: false
      });
      console.log(newarr);
    }
  };

  const deleteRecord = item => {
    let newarr = customers.filter(customer => customer !== item);
    setcustomers(newarr);
    // setrecordNum(0);
  };

  const updateForm = item => {
    setfirstName(item.firstname);
    setlastName(item.lastName);
    setGen(item.gender);
    setCity(item.city);
    setcomments(item.comments);
    setrecordNum(item.recordNum);
    setcheckBox(item.checkBox);
    setMode('Edit');
  };

  const handleUpdateObj = () => {
    if (firstname === '' || lastName === '' || gender === '') {
      alert('First Select Record  from the database to Update');
    } else {
      let newarr = [...customers];

      const index = newarr.findIndex(c => c.recordNum === recordNum);

      newarr[index].firstname = firstname;
      newarr[index].lastName = lastName;
      newarr[index].gender = gender;
      newarr[index].city = city;
      newarr[index].comments = comments;
      newarr[index].checkBox = checkBox;

      setcustomers(newarr);

      setfirstName('');
      setlastName('');
      setGen('');
      setCity('lahore');
      setrecordNum();
      setcomments('');
      setcheckBox({
        WHATSAPP: false,
        FACEBOOK: false,
        INSTAGRAM: false
      });
      setMode('Submit');
    }
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
              {isNull ? (
                <Redirect exact to="/" />
              ) : (
                <Table
                  customers={customers}
                  updateForm={updateForm}
                  deleteRecord={deleteRecord}
                />
              )}
            </ScrollToTop>
          </Route>
          <Route path="/">
            <ScrollToTop>
              <Form
                firstname={firstname}
                handleId={handleId}
                lastName={lastName}
                handleCustomersName={handleCustomersName}
                gender={gender}
                handleGender={handleGender}
                checkBox={checkBox}
                handleCheckBox={handleCheckBox}
                city={city}
                handleCity={handleCity}
                comments={comments}
                handleComments={handleComments}
                handleSubmit={handleSubmit}
                handleUpdateObj={handleUpdateObj}
                Mode={Mode}
                isNull={isNull}
              />
            </ScrollToTop>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
