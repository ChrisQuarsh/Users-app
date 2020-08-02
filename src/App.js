import './App.css';

import React, {Component} from 'react';
import { connect } from  'react-redux';
import { addUser, deleteUser } from './store/usersActions';
import UsersForm from './components/UsersForm';
import UsersInfo from './components/UsersInfo'; 
import './css/bootstrap.min.css';

export class App extends Component { 

addNewUser = newUser => { 
  this.props.addUser(newUser)
};

deleteUser = user_id => {
  this.props.deleteUser(user_id);
} 

render() {
  return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
          <UsersForm addUser = {this.addNewUser} />
          </div>
          <div className='col-md-8'>
                    <div className='App_user-info'>
                      {this.props.users.map((item, index) => {
                        return (
                          <UsersInfo
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            email={item.email}
                            gen={item.gen}
                            removeUser={this.deleteUser}
                            />
                        );
                      })}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = {
  addUser:  addUser,
  deleteUser: deleteUser
}   


export default connect(mapStateToProps, mapDispatchToProps)(App);
