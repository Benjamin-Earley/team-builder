import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({firstName: '', lastName: ''})
  const handleChange = evt => {
    setUser({ ...user, [evt.target.name]: evt.target.value})
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    setUser({ firstName: '', lastName: ''})
    // console.log(user.firstName, user.lastName)
  }
  return (
    <div className="App">
      {console.log(user)}
      <form onSubmit={evt => {handleSubmit(evt)}}>
        <label>
          First Name: 
          <input onChange={event => handleChange(event)}
          maxLength='20'
          placeholder='First Name'
          id='firstNameInput'
          name='firstName'
          value={user.firstName}
          type='text'
          />
        </label>
        <label>
          Last Name: 
          <input onChange={event => handleChange(event)}
          maxLength='20'
          placeholder='Last Name'
          id='lastNameInput'
          name='lastName'
          value={user.lastName}
          type='text'
          />
        </label>
        <button>Submit</button>
      </form>
      <h5>Welcome to the team, {user.firstName} {user.lastName}!</h5>
    </div>
  );
}

export default App;
