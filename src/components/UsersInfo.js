import React from 'react';
import '../css/UsersInfo.css';

const UserInfo = ({name, email, gen}) => {
    return (
            <div className='contact'>
                <h4>Name: {name}</h4>
                <p>Email: {email}</p>
                <p>Gen: {gen}</p>
            </div>
    );
}

export default UserInfo;