import { RootState } from "../store";

export const selectIsLoaded = (state:RootState)=>state.cardSlice.status
export const selectCards = (state:RootState)=>state.cardSlice.cards
export const selectTopAnime = (state:RootState)=>state.cardSlice.topAnime.cards
export const selectRecentlyUpdated = (state:RootState)=>state.cardSlice.recentlyUpdated.cards
export const selectRecentlyAdded = (state:RootState)=>state.cardSlice.recentlyAdded.cards
export const selectRecentlyCompleted = (state:RootState)=>state.cardSlice.recentlyCompleted.cards
