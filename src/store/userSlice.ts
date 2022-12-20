import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface UserSliceState {
//     email: string | null;
//      token: string | null;
//      id: number | null;
//      nameUser: string | null;
// }

const initialState = {
     email: null,
     token: null,
     id: null,
     nameUser: 'Guest',
}

const userSlice = createSlice({name: 'user',
    initialState,
    reducers: {
        setUser(state, action ) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.nameUser = action.payload.nameUser;

        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.nameUser = '';
        },
    }
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;