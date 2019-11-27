import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <ul className="heading">
      <Link to="/form/adduser" style={{ textDecoration: 'none' }}>
        <li>Add New User</li>
      </Link>
      <Link to="/table" style={{ textDecoration: 'none' }}>
        <li>List of Users</li>
      </Link>
    </ul>
  );
}
