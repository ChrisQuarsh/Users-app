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
    return (dispatch, state, { getFirestore }) => {
        getFirestore()
        .collection('users')
        .doc(user_id)
        .delete()
        .then(() => {});
    };
};

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
             users.push({ ...doc.data(), id: doc.id });
         });
          console.log(users);
         dispatch({
             type:'SET_ALL_USERS',
             payload: users
         });
      },
      (err) => {}
      )  
    }
}