import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
import {Anime} from "../../types/Anime";
import { returnType, returnUpdateProperty, returnRecentlyUpdated} from "./type";
import {property, recentlyUpdatedItem} from "../../types/Items";

const headers = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`
}

export const   fetchAnime = createAsyncThunk('anime/fetchAnimeStatus', async () => {
        const {data} = await axios.get<returnType>(
            `http://localhost:7000/animes/firstLoad`
        )

        return data as returnType
        }
)

//Для горизонатльных карточек 
export  const updateProperty = createAsyncThunk('anime/updateProperty', async (property:property) => {
    const value:string = property.type === "topAnime" ? "rating" : property.type === "recentlyAdded" ? "createdAt" : "completed"
    const {data} = await axios.get<returnUpdateProperty>(
        `http://localhost:7000/animes/updateProperty/?property=${value}&period=${property.period}&label=${property.type}`,
    )
   
    return data as returnUpdateProperty
    }
)


//Для вертикальных карточек
export  const fetchRecentlyUpdated = createAsyncThunk('anime/recentlyUpdated', async (filter:recentlyUpdatedItem) => {
    const {data} = await axios.get<returnRecentlyUpdated>(
        `http://localhost:7000/animes/recentlyUpdated/?filter=${filter}`,
    )
   
    return data as returnRecentlyUpdated
    }
)
