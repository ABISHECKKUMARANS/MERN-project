import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id, name } = useParams();

  return (
    <div>
      <h1>User</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default User;
