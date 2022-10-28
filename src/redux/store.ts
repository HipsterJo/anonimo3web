import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './anime/cardSlice'
import {useDispatch} from "react-redux";
import authSlice from "./auth/authSlice";


export const store = configureStore({
  reducer: {
    cardSlice,
    authSlice
  },
})
export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch  = () => useDispatch<AppDispatch>()