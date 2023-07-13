import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Waifu} from '../../types/Waifu'
import {getAllWaifu  } from './waifuActions'


export interface IWaifu{
    waifu:Waifu[]
}


const initialState:IWaifu = {
    waifu:[]
}

export const waifuSlice = createSlice({
        name: 'waifuSlice',
        initialState,
        reducers:{

        },
    
    extraReducers: (builder) =>{
        builder.addCase(getAllWaifu.fulfilled, (state, action) =>{
            state.waifu = action.payload
        })

    }
})

export const {} = waifuSlice.actions
export default waifuSlice.reducer