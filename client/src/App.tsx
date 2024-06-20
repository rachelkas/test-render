import React, { useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  const fetchUsers = async (e: any) => {
    e.preventDefault();
    const response = await fetch('https://test-render-stsd.onrender.com/api/users');
    const body = await response.json();
    console.log("body", body);

    setUsers(body);

  }

  return (
    <div className="App">
      <h1>test test test</h1>
      <button onClick={(e) => fetchUsers(e)}>send</button>
      <div>
        <ul>
          {users.map((user: any) => (
            <li>{user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
