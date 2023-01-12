import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "app/models/user";

export interface LoginPayload {
    username: string,
    password: string,
}
export interface AuthState {
    isLogggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
}
const initialState: AuthState = {
    isLogggedIn: false,
    logging: false,
    currentUser: undefined
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
        },
        logiSuccess(state, action: PayloadAction<User>) {
            state.logging = false;
            state.currentUser = action.payload
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },
        logout(state) {
            state.logging = false;
            state.currentUser = undefined;
        }
    }
})
export const authActions = authSlice.actions;

export const selectIsLoggedIn = (state:any) => state.auth.isLogggedIn
export const selectIsLogging = (state:any) => state.auth.logging


const authReducer = authSlice.reducer;
export default authReducer;