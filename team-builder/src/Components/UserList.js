import React from 'react'
import NewUser from './NewUser'

const UserList = props => {
    return(
        <div className='user-list'>
            {props.users.map(user => {
                return <NewUser user={user} key={user.id} />
            })}
        </div>
    )
}

export default UserList