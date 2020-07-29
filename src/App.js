import './App.css';

import React, {Component} from 'react';
import { connect } from  'react-redux';
import UsersForm from './components/UsersForm';
import UsersInfo from './components/UsersInfo'; 
import './css/bootstrap.min.css';

export class App extends Component{

 

addNewUser = (newUser) => { 
this.setState({
  users: [...this.state.users, newUser]
});
};

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
                      {this.state.users.map((item,index) => {
                        return (
                          <UsersInfo
                            key={index}
                            name={item.name}
                            email={item.email}
                            gen={item.gen}
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
})


export default connect(mapStateToProps)(App);
