import React from 'react';
import '../css/UsersInfo.css';
import { Link } from 'react-router-dom';

const UserInfo = ({name, email, gen, id, removeUser}) => {
    const handleClick = () => {
        removeUser(id)
    }
    return (
            <div className='contact'>
                <h4>Name: {name}</h4>
                <p><b>Email:</b> {email}</p>
                <p><b>Gen:</b> {gen}</p>
                <button className='removeButton' onClick={handleClick}>Remove User</button>
                <Link className='editLink' to={`/edit/${id}`}>Edit User</Link>
            </div>
    );
}

export default UserInfo;