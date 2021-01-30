import React, { useState } from 'react';
import './App.css';

import { users } from './data'

import Form from './Components/Form'
import UserList from './Components/UserList'

function App() {
  const [user, setUser] = useState({name: '', email: '', role: ''})
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value})
  }
  const handleSubmit = event => {
    event.preventDefault()
    setUser({ name: '', email: '', role: ''})
    // console.log(user.name)
  }
  // addUser = userText => {
  //   const newUser = {
  //     name: userText
  //   }
  // } 
  return (
    <div className="App">
      {console.log(user)}
      <Form user={user} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
