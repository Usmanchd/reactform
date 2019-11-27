import React from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  const myStyle = {
    padding: '20px 65px',
    border: '.3px solid grey',
    backgroundColor: 'orange',
    color: 'black'
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Link to="/form/adduser">
        <button className="none" style={myStyle}>
          <b>ADD User!</b>
        </button>
      </Link>{' '}
    </div>
  );
}
