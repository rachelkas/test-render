import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  const fetchUsers = async (e: any) => {
    e.preventDefault();
    const response = await fetch('/api/users');
    const body = await response.json();
    console.log(body);

  }

  return (
    <div className="App">
      <h1>test test test</h1>
      <button onClick={(e) => fetchUsers(e)}></button>
    </div>
  );
}

export default App;
