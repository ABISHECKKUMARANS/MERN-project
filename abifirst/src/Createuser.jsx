import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Style.css'; // Link the CSS file

const Createuser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, address };
    const token = localStorage.getItem('token'); // Get JWT token from local storage
    axios.post('http://localhost:3000/api/user/create', newUser, {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to request headers
      }
    })
      .then((res) => {
        alert('User created successfully!');
        setName('');
        setEmail('');
        setAddress('');
      })
      .catch((error) => console.error('Error creating user:', error));
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button><Link to="/">Home</Link></button>
    </div>
  );
};

export default Createuser;
