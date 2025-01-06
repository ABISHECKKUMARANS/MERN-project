import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Style.css'; // Link the CSS file

const Deleteuser = () => {
  const { id } = useParams();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get JWT token from local storage
    axios.get(`http://localhost:3000/api/user/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to request headers
      }
    })
      .then((res) => {
        const user = res.data;
        setEmail(user.email);
      })
      .catch((error) => {
        console.error("There was an error fetching the user data!", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Get JWT token from local storage
    axios.delete(`http://localhost:3000/api/user/delete/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to request headers
      }
    })
      .then((res) => {
        console.log(res.data);
        // Optionally, redirect to home or clear the form
      })
      .catch((error) => {
        console.error("There was an error deleting the user!", error);
      });
  }

  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
        </div>
        <button type="submit">Delete</button>
      </form>
      <button><Link to="/">Home</Link></button>
      <button><Link to="/create">Create User</Link></button>
      <button><Link to="/update">Update User</Link></button>
    </div>
  );
}
export default Deleteuser;
