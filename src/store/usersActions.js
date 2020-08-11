export const addUser = (user) => {
    return(dispatch, state,{getFirestore}) => {
        getFirestore()
        .collection('users')
        .add(user)
        .then((doc) => {       
        });
    }
};

export const deleteUser = (user_id) => {
    return {
        type: 'DELETE_USER',
        payload: user_id
    }
}

export const editUser = (user_id, updated_info) => {
    return {
        type: 'EDIT_USER',
        user_id: user_id,
        updated_info: updated_info
    };
};

export const getAllUsers = () => {
    return (dispatch, state, {getFirestore}) => {
      getFirestore().collection('users').onSnapshot((snapshot) => {
         let users = [];
         snapshot.forEach((doc) => {
             users.push(doc.data())
         })
          console.log(users);
         dispatch({
             type:'SET_ALL_USERS',
             payload: users
         })
      },
      (err) => {}
      )  
    }
}