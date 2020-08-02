import { v4 as uuid } from 'uuid';

const initialState = {
    users: [
        {
          id: '1',
          name : 'Kojo Asamoah',
          email : 'Kojo Asamoah@gmail.com',
          gen: 3
        },
        {
          id: '2',
          name : 'Kojo Asamoah',
          email : 'Kojo Asamoah@gmail.com',
          gen: 3
        },
        {
          id: '3',
          name : 'Kojo Asamoah',
          email : 'Kojo Asamoah@gmail.com',
          gen: 3
        },
      ]
};

const usersReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_USER':
            const newUser = {
                id: uuid(),
                name: action.payload.name,
                email: action.payload.email,
                gen: action.payload.gen
            };
            return { ...state, users: [...state.users, newUser] };
        case 'DELETE_USER':
            const filteredUsers = state.users.filter(user => user.id !== action.payload);
            return {...state, users: filteredUsers}
        default:
            return state;
    }
};

export default usersReducer;