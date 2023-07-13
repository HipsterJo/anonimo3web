import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import { Waifu } from "../../types/Waifu";


export const getAllWaifu = createAsyncThunk(
    'waifu/getAll',
    async () =>{
        const reasponse = await AuthService.getWaifu()
        console.log("Ya")
        return reasponse.data as Waifu[]
    }
)

export const getUserWaifu = createAsyncThunk(
    'waifu/getUser',
    async (userId:string) =>{
        const reasponse = await AuthService.getUserWaifu(userId)
        return reasponse.data as Waifu[]
    }
)

