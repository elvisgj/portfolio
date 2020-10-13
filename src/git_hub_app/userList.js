import React from 'react'
import './Users.css'
import { Link } from 'react-router-dom'


export function UserList(props) {
    return <div className='user-div'>
        <div className='users-name'>
            <h3 className="user">User:</h3>
            <h3> {props.item.login}</h3>
        </div>
        <div>
            <Link className='profile-link' to={`/github/users/${props.item.login}`}>Open the Profile</Link>
        </div>
    </div>
}
