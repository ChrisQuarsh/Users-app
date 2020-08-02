import React from 'react';
import '../css/UsersInfo.css';

const UserInfo = ({name, email, gen, id, removeUser}) => {
    const handleClick = () => {
        removeUser(id)
    }
    return (
            <div className='contact'>
                <h4>Name: {name}</h4>
                <p><b>Email:</b> {email}</p>
                <p><b>Gen:</b> {gen}</p>
                <button onClick={handleClick}>Remove User</button>
            </div>
    );
}

export default UserInfo;