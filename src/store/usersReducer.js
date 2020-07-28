const initialState = {
    users: [
        {
          name : 'Kojo Asamoah',
          email : 'Kojo Asamoah@gmail.com',
          gen: 3
        },
        {
          name : 'Kojo Asamoah',
          email : 'Kojo Asamoah@gmail.com',
          gen: 3
        },
        {
          name : 'Kojo Asamoah',
          email : 'Kojo Asamoah@gmail.com',
          gen: 3
        },
      ]
}

const usersReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_USER':
            const newUser = {
                name: action.payload.name,
                email: action.payload.email,
                gen: action.payload.gen
            };
            return { ...state, users: [...state.users, newUser] };
        default:
            return state;
    }
};

export default usersReducer;