import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const onSubmit = evt => {
    evt.preventDefault()
  }
  const onfirstNameChange = evt => setFirstName(evt.target.value)
  const onlastNameChange = evt => setLastName(evt.target.value)
  return (
    <div className="App">
      <form onSubmit={evt => {
        evt.preventDefault()
      }}>
        <label>
          First Name: <input onChange={onfirstNameChange}
          maxLength='20'
          placeholder='First Name'
          id='firstNameInput'
          name='firstName'
          type='text'
          />
        </label>
        <label>
          Last Name: <input onChange={onlastNameChange}
          maxLength='20'
          placeholder='Last Name'
          id='lastNameInput'
          name='lastName'
          type='text'
          />
        </label>
        <button>Submit</button>
      </form>
      <h5>Welcome to the team, {firstName} {lastName}!</h5>
    </div>
  );
}

export default App;
