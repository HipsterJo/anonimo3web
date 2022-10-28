import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "../store";
import {fetchAnime, updateProperty, fetchRecentlyUpdated} from "./cardActions";
import {cardSliceState , Status, animeFilter} from "./type";



const initialState: cardSliceState = {
  cards: [],
  topAnime:{
    cards: [],
    type: "topAnime",
    status: Status.LOADING,
    period: "today",
    filter: "all"
  },
  recentlyUpdated:{
    cards: [],
    type: "recentlyUpdated",
    status: Status.LOADING,
    period: "today",
    filter: "all"
  },
  recentlyAdded: {
    cards: [],
    type: "recentlyAdded",
    status: Status.LOADING,
    period: "today",
    filter: "all"
  },
  recentlyCompleted:{
    cards: [],
    type: "recentlyCompleted",
    status: Status.LOADING,
    period: "today",
    filter: "all"
  },
  status: Status.LOADING
}

export const cardSlice = createSlice({
  name: 'animeCards',
  initialState,
  reducers: {
    setCards(state, action){
      
        state.cards = action.payload;
        
    },
    setPeriod(state, action){
      const {type, period} = action.payload;
      if(type === "topAnime"){
        state.topAnime.period = period;
      }
      if(type === "recentlyUpdated"){
        state.recentlyUpdated.period = period;
      }
      if(type === "recentlyAdded"){
        state.recentlyAdded.period = period;
      }
      if(type === "recentlyCompleted"){
        state.recentlyCompleted.period = period;
      }
    },
    setFilter(state, action){
      const { filter} = action.payload;
      state.recentlyUpdated.filter = filter;
    }
    
  },
    extraReducers: (builder) => {
        builder.addCase(fetchAnime.pending, (state, action) => {
            state.status = Status.LOADING;
            state.cards = [];
            
        });

        builder.addCase(fetchAnime.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            console.log(action.payload)
            state.cards = action.payload.cards;
            state.topAnime.cards = action.payload.topAnime;
            state.recentlyUpdated.cards = action.payload.recentlyUpdated;
            state.recentlyAdded.cards = action.payload.recentlyAdded;
            state.recentlyCompleted.cards = action.payload.resentlyCompleted;
        });

        builder.addCase(fetchAnime.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.cards = [];
            state.recentlyAdded.cards = [];
            state.recentlyUpdated.cards = [];
            state.recentlyAdded.cards = [];
            state.recentlyCompleted.cards = [];
        });

        builder.addCase(updateProperty.fulfilled, (state, action) => {
            state[action.payload.label].cards = action.payload.cards;
        });

        
        builder.addCase(fetchRecentlyUpdated.fulfilled, (state, action) => {
            state.recentlyUpdated.cards = action.payload.cards;
        });

        

    }
      
})


export const {setCards, setPeriod, setFilter} = cardSlice.actions
export default cardSlice.reducer








