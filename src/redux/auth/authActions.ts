import {createAsyncThunk} from '@reduxjs/toolkit'
import {InitialRegister} from './types';
import AuthService from '../../services/AuthService';

export const login = createAsyncThunk(
    'auth/login',
    async (obj:InitialRegister) => {
        const {email, password} = obj;
        const response = await AuthService.login(email, password);
        console.log('MY RESPONSE', response.data);
        return response.data;
})

export const registration = createAsyncThunk(
    'auth/registration',
    async (obj:InitialRegister) => {
        const {email, password} = obj;
        const response = await AuthService.registration(email, password);
        return response.data;
})

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        const response = await AuthService.logout();
        return response.data;
})
