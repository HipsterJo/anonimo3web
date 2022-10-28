import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { User } from '../../types/User';
import {login, logout, registration} from './authActions';

export interface IAuthState {
    user: User | null;
    

}


const initialState: IAuthState = {
    user: null,
    
}


export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
      
      }
    , 
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.user = action.payload.user;
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.user = null;
            localStorage.removeItem('token');
        })
        builder.addCase(registration.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.user = action.payload.user;
        })
    }
})

export const {} = authSlice.actions

export default authSlice.reducer