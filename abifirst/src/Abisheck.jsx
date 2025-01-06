import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Createuser from './Createuser.jsx';
import Deleteuser from './Deleteuser.jsx';
import Updateuser from './Updateuser.jsx';
import './Style.css'; // Link the CSS file

function Abisheck() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get JWT token from local storage
    axios.get('http://localhost:3000/api/user/fetch', {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to request headers
      }
    })
      .then((res) => setUsers(res.data.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <Router>
      <div>
        <button><Link to="/">Home</Link></button>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <button><Link to="/create">Create User</Link></button>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>
                          <button><Link to={`/update/${user._id}`}>Update</Link></button>
                          <button><Link to={`/delete/${user._id}`}>Delete</Link></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />
          <Route path="/create" element={<Createuser />} />
          <Route path="/delete/:id" element={<Deleteuser />} />
          <Route path="/update/:id" element={<Updateuser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Abisheck;
