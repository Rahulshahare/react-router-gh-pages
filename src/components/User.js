import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams(); // Access the :id parameter from the URL

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

export default User;