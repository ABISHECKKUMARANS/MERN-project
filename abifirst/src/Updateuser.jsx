import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Style.css'; // Link the CSS file

const Updateuser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get JWT token from local storage
    axios.get(`http://localhost:3000/api/user/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to request headers
      }
    })
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAddress(res.data.address);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { name, email, address };
    const token = localStorage.getItem('token'); // Get JWT token from local storage
    axios.put(`http://localhost:3000/api/user/update/${id}`, updatedUser, {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to request headers
      }
    })
      .then((res) => alert('User updated successfully!'))
      .catch((error) => console.error('Error updating user:', error));
  };

  return (
    <div>
      <h1>Update User</h1>
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
        <button type="submit">Update</button>
      </form>
      <button><Link to="/">Home</Link></button>
    </div>
  );
};

export default Updateuser;
