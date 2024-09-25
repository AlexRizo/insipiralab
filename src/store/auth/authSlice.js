import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'unauthenticated',
    uid: null,
    email: null,
    message: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.message = null;
        },
        onLogout: (state) => {
            state.status = 'unauthenticated';
            state.uid = null;
            state.email = null;
            state.message = payload?.error;
        },
    },
});

export const { onLogin, onLogout } = authSlice.actions;