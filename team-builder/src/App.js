import React, { useState } from 'react';
import './App.css';
import Form from '../src/Form'

function App() {
  const [user, setUser] = useState({name: '', email: '', role: ''})
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value})
  }
  const handleSubmit = event => {
    event.preventDefault()
    setUser({ name: '', email: '', role: ''})
    // console.log(user.firstName, user.lastName)
  }
  return (
    <div className="App">
      {console.log(user)}
      <Form user={user} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
