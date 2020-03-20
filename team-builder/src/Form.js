import React from 'react'

function Form(props) {
    return(
        <div>
            <form onSubmit={event => {props.handleSubmit(event)}}>
            <label>
                Name: 
                <input onChange={event => props.handleChange(event)}
                    maxLength='20'
                    placeholder='Name'
                    id='nameInput'
                    name='name'
                    value={props.user.name}
                    type='text'
                />
            </label>
            <label>
                Email: 
                <input onChange={event => props.handleChange(event)}
                    maxLength='30'
                    placeholder='email'
                    id='emailInput'
                    name='email'
                    value={props.user.email}
                    type='text'
                />
            </label>
            <label>
                Role:
                <input onChange={event => props.handleChange(event)}
                    maxLength='30'
                    placeholder='role'
                    id='roleInput'
                    name='role'
                    value={props.user.role}
                    type='text'
                />
            </label>
            <button>Submit</button>
            </form>
            <h5>Welcome to the team, {props.user.name}! We're lucky to have {props.user.role}s like you on board!</h5>
        </div>
    )
}

export default Form